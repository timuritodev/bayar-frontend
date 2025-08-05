import { CustomButton } from '@/components/CustomButton/CustomButton';
import CustomInput from "@/components/CustomInput/CustomInput";
import Popup from '@/components/Popup/Popup';
import {
	EMAIL_VALIDATION_CONFIG,
	NAME_VALIDATION_CONFIG,
	PHONE_VALIDATION_CONFIG
} from "@/constants/validation";
import { useResize } from '@/hooks/useResize';
import { sendEmailApi } from '@/services/redux/slices/mailer/mailer';
import { useAppDispatch } from "@/services/typeHooks";
import { CustomInputTypes } from "@/types/CustomInput.types";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./style.module.scss";
import Image from 'next/image';
import logo from "../../../images/form_logo.png";

interface FeedbackFormValues {
	objectType: string;
	panelPurpose: string;
	panelThickness: string;
	area: number;
	city: string;
	fio: string;
	phone: string;
	email: string;
	preferredContact: string;
}

export const FeedbackForm = () => {
	const dispatch = useAppDispatch();
	const { width } = useResize();
	const [isPopupOpened, setIsPopupOpened] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isDirty, isValid },
		getValues,
	} = useForm<FeedbackFormValues>({
		mode: "onChange",
	});

	const onSubmit: SubmitHandler<FeedbackFormValues> = (data) => {
		dispatch(sendEmailApi({
			email: data.email,
			subject: "Новая заявка",
			text: `
        Тип объекта: ${data.objectType}
        Назначение панелей: ${data.panelPurpose}
        Толщина панели: ${data.panelThickness}
        Площадь объекта: ${data.area} м²
        Город: ${data.city}
        Имя: ${data.fio}
        Телефон: ${data.phone}
        E-mail: ${data.email}
        Способ связи: ${data.preferredContact}
      `,
			greetings: "",
		}))
			.unwrap()
			.then(() => {
				setIsPopupOpened(true);
				reset();
			})
			.catch((err) => {
				console.error(err);
			});
	};

	useEffect(() => {
		setIsPopupOpened(false);
	}, []);

	return (
		<div className={styles.container}>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
				<h2 className={styles.title}>Форма обратной связи</h2>
				<div className={styles.wrapper}>
					<CustomInput
						inputType={CustomInputTypes.text}
						labelText="Тип объекта"
						placeholder="Например, жилой дом"
						validation={register("objectType", { required: "Введите тип объекта" })}
						error={errors.objectType?.message}
					/>
					<CustomInput
						inputType={CustomInputTypes.text}
						labelText="Назначение панелей"
						placeholder="Например, фасад"
						validation={register("panelPurpose", { required: "Укажите назначение" })}
						error={errors.panelPurpose?.message}
					/>
					<CustomInput
						inputType={CustomInputTypes.text}
						labelText="Толщина панели"
						placeholder="мм"
						validation={register("panelThickness", { required: "Введите толщину" })}
						error={errors.panelThickness?.message}
					/>
					<CustomInput
						inputType={CustomInputTypes.phone}
						labelText="Площадь объекта (м²)"
						placeholder="100"
						validation={register("area", {
							...PHONE_VALIDATION_CONFIG,
							required: "Укажите площадь",
						})}
						error={errors.area?.message}
					/>
					<CustomInput
						inputType={CustomInputTypes.text}
						labelText="Город"
						placeholder="Москва"
						validation={register("city", { required: "Введите город" })}
						error={errors.city?.message}
					/>
					<CustomInput
						inputType={CustomInputTypes.fio}
						labelText="Имя *"
						placeholder="Иван Иванов"
						validation={{ ...register("fio", NAME_VALIDATION_CONFIG) }}
						error={errors.fio?.message}
					/>
					<CustomInput
						inputType={CustomInputTypes.phone}
						labelText="Телефон *"
						placeholder="+7 (___) ___-__-__"
						validation={{ ...register("phone", PHONE_VALIDATION_CONFIG) }}
						error={errors.phone?.message}
					/>
					<CustomInput
						inputType={CustomInputTypes.email}
						labelText="E-mail"
						placeholder="email@example.com"
						validation={{ ...register("email", EMAIL_VALIDATION_CONFIG) }}
						error={errors.email?.message}
					/>
					<CustomInput
						inputType={CustomInputTypes.text}
						labelText="Предпочтительный способ связи"
						placeholder="Телефон / E-mail / WhatsApp"
						validation={register("preferredContact")}
						error={errors.preferredContact?.message}
					/>
				</div>

				<div className={styles.buttons}>
					<button
						type="submit"
						className={styles.orangeButton}
						disabled={!isDirty || !isValid}
					>
						Рассчитать стоимость
					</button>
					<button
						type="button"
						className={styles.whatsappButton}
						onClick={handleSubmit(onSubmit)}
						disabled={!isDirty || !isValid}
					>
						<Image
							src="/icons/whatsapp.svg"
							alt="WhatsApp"
							width={24}
							height={24}
							className={styles.whatsappIcon}
						/>
						Рассчитать стоимость
					</button>
				</div>
			</form>

			<div className={styles.logoContainer}>
				<Image
					src={logo}
					alt="BAYAR"
					width={205}
					height={205}
					className={styles.logo}
				/>
			</div>

			<Popup
				title="Заявка отправлена"
				text="Мы свяжемся с вами в ближайшее время"
				isOpened={isPopupOpened}
				setIsOpened={setIsPopupOpened}
			/>
		</div>
	);
};
