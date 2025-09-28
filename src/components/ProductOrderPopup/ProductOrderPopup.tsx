import { FC, useState } from "react";
import Popup from "../Popup/Popup";
import styles from "./style.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import CustomInput from "../CustomInput/CustomInput";
import { CustomInputTypes } from "../../types/CustomInput.types";
import { useAppDispatch } from "../../services/typeHooks";
import {
	FIO_VALIDATION_CONFIG,
	EMAIL_VALIDATION_CONFIG,
	PHONE_VALIDATION_CONFIG,
} from "../../constants/validation";
import { CustomButton } from "../CustomButton/CustomButton";
import { sendEmailApi } from "../../services/redux/slices/mailer/mailer";
import { IProduct } from "../../types/Product.types";

interface IProductOrderPopup {
	isOpened: boolean;
	setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
	product: IProduct;
}

interface Form {
	fio: string;
	email: string;
	phone: string;
}

export const ProductOrderPopup: FC<IProductOrderPopup> = ({
	isOpened,
	setIsOpened,
	product,
}) => {
	const dispatch = useAppDispatch();

	const [isLoading, setIsLoading] = useState(false);
	const [isSent, setIsSent] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors, isDirty, isValid },
		getValues,
	} = useForm<Form>({ mode: "onChange" });

	const onSubmit: SubmitHandler<Form> = () => {
		setIsLoading(true);
		setIsSent(false);

		const emailText = `
Новый заказ товара:

Товар: ${product.title}
Описание: ${product.description}
Тип продукта: ${product.product_type}

Данные клиента:
ФИО: ${getValues("fio")}
Email: ${getValues("email")}
Телефон: ${getValues("phone")}
    `.trim();

		dispatch(
			sendEmailApi({
				email: getValues("email"),
				subject: `Заказ товара: ${product.title}`,
				text: emailText,
				greetings: "",
			})
		)
			.unwrap()
			.then(() => {
				setIsLoading(false);
				setIsSent(true);
				setTimeout(() => setIsOpened(false), 1500);
			})
			.catch((err) => {
				setIsLoading(false);
				console.error("Ошибка отправки заказа:", err);
			});
	};

	return (
		<Popup isOpened={isOpened} setIsOpened={setIsOpened}>
			<h4 className={styles.popup__title}>Заказать товар</h4>
			<div className={styles.product__info}>
				<h5 className={styles.product__title}>{product.title}</h5>
				<p className={styles.product__description}>{product.description}</p>
			</div>
			<form
				className={styles.order__form}
				onSubmit={handleSubmit(onSubmit)}
				noValidate
			>
				<CustomInput
					inputType={CustomInputTypes.fio}
					labelText={"ФИО"}
					validation={{
						...register("fio", FIO_VALIDATION_CONFIG),
					}}
					placeholder="Введите ваше ФИО"
					error={errors?.fio?.message}
				/>
				<CustomInput
					inputType={CustomInputTypes.phone}
					labelText={"Номер телефона"}
					validation={{
						...register("phone", PHONE_VALIDATION_CONFIG),
					}}
					placeholder="+7 (999) 999-99-99"
					error={errors?.phone?.message}
				/>
				<CustomInput
					inputType={CustomInputTypes.email}
					labelText={"Электронная почта"}
					validation={{
						...register("email", EMAIL_VALIDATION_CONFIG),
					}}
					placeholder="email@example.com"
					error={errors?.email?.message}
				/>
				<CustomButton
					buttonText={
						isLoading ? "Отправка..." : isSent ? "Заказ отправлен!" : "Заказать"
					}
					handleButtonClick={handleSubmit(onSubmit)}
					disabled={!isDirty || !isValid || isLoading || isSent}
					type="button"
				/>
			</form>
		</Popup>
	);
};
