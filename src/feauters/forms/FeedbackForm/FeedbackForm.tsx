import { CustomButton } from '@/components/CustomButton/CustomButton';
import CustomInput from "@/components/CustomInput/CustomInput";
import { default as CustomOptions } from '@/components/CustomOptions/CustomOptions';
import Popup from '@/components/Popup/Popup';
import { IconButton } from '@/components/IconButton/IconButton';
import whatsapp from '@/images/icons/whatsapp.svg';
import {
	AREA_VALIDATION_CONFIG,
	CITY_VALIDATION_CONFIG,
	EMAIL_VALIDATION_CONFIG,
	FIO_VALIDATION_CONFIG,
	NAME_VALIDATION_CONFIG,
	OBJECT_TYPE_VALIDATION_CONFIG,
	PANEL_PURPOSE_VALIDATION_CONFIG,
	PHONE_VALIDATION_CONFIG,
	PREFERRED_CONTACT_VALIDATION_CONFIG,
	TEXT_VALIDATION_CONFIG,
	WALL_PANEL_THICKNESS_VALIDATION_CONFIG
} from "@/constants/validation";
import {
	options_purpose_panels,
	options_panel_thickness,
	options_connection_type
} from "@/constants/form";
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
	object_type: string;
	panel_purpose: string;
	wall_panel_thickness: string;
	area: number;
	city: string;
	fio: string;
	phone: string;
	email: string;
	preferred_contact: string;
}

export const FeedbackForm = () => {
	const dispatch = useAppDispatch();
	const { width } = useResize();
	const [isPopupOpened, setIsPopupOpened] = useState(false);

	// Состояние для CustomOptions полей
	const [panel_purpose, setPanel_purpose] = useState('стеновые');
	const [wall_panel_thickness, setWall_panel_thickness] = useState('100');
	const [preferred_contact, setPreferred_contact] = useState('whatsapp');

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isDirty, isValid },
		getValues,
		watch,
	} = useForm<FeedbackFormValues>({
		mode: "onChange",
	});

	const watchedValues = watch();

	const onSubmit: SubmitHandler<FeedbackFormValues> = () => {
		const email = getValues("email") || "";
		dispatch(sendEmailApi({
			email: email,
			subject: "Новая заявка",
			text: `
        Тип объекта: ${getValues("object_type")}
        Назначение панелей: ${panel_purpose}
        Толщина панели: ${wall_panel_thickness} мм
        Площадь объекта: ${getValues("area")} м²
        Город: ${getValues("city")}
        Имя: ${getValues("fio")}
        Телефон: ${getValues("phone")}
        E-mail: ${email}
        Способ связи: ${preferred_contact || "не указан"}
      `,
			greetings: "",
		}))
			.unwrap()
			.then(() => {
				setIsPopupOpened(true);
				// reset();
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
						inputType={CustomInputTypes.object_type}
						labelText="Тип объекта *"
						placeholder="Например, жилой дом"
						validation={register("object_type", OBJECT_TYPE_VALIDATION_CONFIG)}
						error={errors.object_type?.message}
					/>
					<CustomOptions
						label="Назначение панелей *"
						options={options_purpose_panels}
						selectedValue={panel_purpose}
						onChange={setPanel_purpose}
					/>
					<CustomOptions
						label="Толщина панели (мм) *"
						options={options_panel_thickness}
						selectedValue={wall_panel_thickness}
						onChange={setWall_panel_thickness}
					/>
					<CustomInput
						inputType={CustomInputTypes.area}
						labelText="Площадь объекта (м²) *"
						placeholder="100"
						validation={register("area", AREA_VALIDATION_CONFIG)}
						error={errors.area?.message}
					/>
					<CustomInput
						inputType={CustomInputTypes.city}
						labelText="Город *"
						placeholder="Москва"
						validation={register("city", CITY_VALIDATION_CONFIG)}
						error={errors.city?.message}
					/>
					<CustomInput
						inputType={CustomInputTypes.fio}
						labelText="Имя *"
						placeholder="Иван Иванов"
						validation={{ ...register("fio", FIO_VALIDATION_CONFIG) }}
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
						labelText={"Электронная почта *"}
						validation={{
							...register("email", EMAIL_VALIDATION_CONFIG),
						}}
						placeholder="email@example.com"
						error={errors?.email?.message}
					/>
					<CustomOptions
						label="Предпочтительный способ связи"
						options={options_connection_type}
						selectedValue={preferred_contact}
						onChange={setPreferred_contact}
					/>
				</div>

				<div className={styles.buttons}>
					<CustomButton
						buttonText={"Отправить"}
						handleButtonClick={handleSubmit(onSubmit)}
						disabled={!isDirty || !isValid}
						type="submit"
					/>
					<IconButton
						icon={whatsapp}
						href="https://wa.me/79272499942"
						size="medium"
						target="_blank"
						alt="WhatsApp"
					/>
				</div>
			</form>
			{width > 767 && (
				<div className={styles.logoContainer}>
					<Image
						src={logo}
						alt="BAYAR"
						width={205}
						height={205}
						className={styles.logo}
					/>
				</div>
			)}
			<Popup
				title="Спасибо!"
				text="Мы свяжемся с вами в ближайшее время"
				isOpened={isPopupOpened}
				setIsOpened={setIsPopupOpened}
			/>
		</div>
	);
};
