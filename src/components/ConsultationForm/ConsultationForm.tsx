import { useResize } from '@/hooks/useResize';
import { sendEmailApi } from '@/services/redux/slices/mailer/mailer';
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import CustomInput from "../../components/CustomInput/CustomInput";
import {
	EMAIL_VALIDATION_CONFIG,
	NAME_VALIDATION_CONFIG
} from "../../constants/validation";
import { useAppDispatch } from "../../services/typeHooks";
import { CustomInputTypes } from "../../types/CustomInput.types";
import { CustomButton } from '../CustomButton/CustomButton';
import Popup from '../Popup/Popup';
import styles from "./style.module.scss";

interface Form {
	fio: string;
	email: string;
	phone: string;
}

export const ConsultationForm = () => {
	const dispatch = useAppDispatch();
	const { width } = useResize();
	const [isPopupOpened, setIsPopupOpened] = useState<boolean>(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isDirty, isValid },
		getValues,
	} = useForm<Form>({
		mode: "onChange",
	});

	const onSubmit: SubmitHandler<Form> = () => {
		dispatch(
			sendEmailApi({
				email: getValues("email"),
				subject: "Консультация",
				text: `Запрос на консультацию от ${getValues("fio")}, почта - ${getValues("email")}`,
				greetings: "",
			})
		)
			.unwrap()
			.then(() => {
				setIsPopupOpened(true);
			})
			.catch((err) => {
				console.log("dispatch signInUser err:", err);
			});
	};

	useEffect(() => {
		setIsPopupOpened(false);
	}, []);
	return (
		<div className={styles.container}>
			<form
				className={styles.form}
				onSubmit={handleSubmit(onSubmit)}
				noValidate
			>
				{width > 767 ? (
					<>
						<div className={styles.wrapper}>
							<CustomInput
								inputType={CustomInputTypes.fio}
								labelText={"ФИО"}
								validation={{
									...register("fio", NAME_VALIDATION_CONFIG),
								}}
								placeholder="Иван"
								error={errors?.fio?.message}
							/>
							<CustomButton
								buttonText={"Отправить"}
								handleButtonClick={handleSubmit(onSubmit)}
								disabled={!isDirty || !isValid}
								type="submit"
							/>
						</div>
						<div className={styles.wrapper}>
							<CustomInput
								inputType={CustomInputTypes.email}
								labelText={"Электронная почта"}
								validation={{
									...register("email", EMAIL_VALIDATION_CONFIG),
								}}
								placeholder="email@example.com"
								error={errors?.email?.message}
							/>
							<p className={styles.subtitle}>Нажимая кнопку «Отправить», я даю своё согласие на обработку и распространение персональных данных.</p>
						</div>
					</>
				) : (
					<div className={styles.wrapper}>
						<CustomInput
							inputType={CustomInputTypes.fio}
							labelText={"ФИО"}
							validation={{
								...register("fio", NAME_VALIDATION_CONFIG),
							}}
							placeholder="Иван"
							error={errors?.fio?.message}
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
							buttonText={"Отправить"}
							handleButtonClick={handleSubmit(onSubmit)}
							disabled={!isDirty || !isValid}
							type="submit"
						/>
						<p className={styles.subtitle}>Нажимая кнопку «Отправить», я даю своё согласие на обработку и распространение персональных данных.</p>
					</div>
				)}
			</form>
			<Popup
				title="Заявка отправлена"
				text={'успешно'}
				isOpened={isPopupOpened}
				setIsOpened={setIsPopupOpened}
			/>
		</div>
	)
}