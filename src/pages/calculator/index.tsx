import CustomInput from '@/components/CustomInput/CustomInput';
import { BUILDING_LENGTH_VALIDATION_CONFIG, BUILDING_WIDTH_VALIDATION_CONFIG, CEILING_HEIGHT_VALIDATION_CONFIG, DOOR_AREA_VALIDATION_CONFIG, INSULATION_TYPE_VALIDATION_CONFIG, REGION_VALIDATION_CONFIG, ROOF_PANEL_THICKNESS_VALIDATION_CONFIG, WALL_PANEL_THICKNESS_VALIDATION_CONFIG, WINDOW_AREA_VALIDATION_CONFIG } from '@/constants/validation';
import { calculateApi } from '@/services/redux/slices/calculator/calculator';
import { ICalculator } from '@/types/Auth.types';
import { CustomInputTypes } from '@/types/CustomInput.types';
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import { useAppDispatch } from "../../services/typeHooks";
import styles from "./style.module.scss";

const CalculatorPage = () => {
	const dispatch = useAppDispatch();

	const [isSavedPopupOpened, setIsSavedPopupOpened] = useState<boolean>(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isDirty, isValid },
		getValues,
	} = useForm<ICalculator>({ mode: "onChange" });

	const onSubmit: SubmitHandler<ICalculator> = () => {
		dispatch(
			calculateApi({
				building_length: getValues("building_length"),
				building_width: getValues("building_width"),
				ceiling_height: getValues("ceiling_height"),
				door_area: getValues("door_area"),
				window_area: getValues("window_area"),
				wall_panel_thickness: getValues("wall_panel_thickness"),
				roof_panel_thickness: getValues("roof_panel_thickness"),
				insulation_type: getValues("insulation_type"),
				region: getValues("region"),
			})
		)
			.unwrap()
			.then(() => {
				setIsSavedPopupOpened(true);
			})
			.catch((err) => {
				// setIsErrorPopupOpened(true);
				console.log("dispatch signInUser err:", err);
			});
	};

	useEffect(() => {
		setIsSavedPopupOpened(false);
	}, []);

	return (
		<div className={styles.calculator}>
			<div className={styles.container}>
				<h1 className={styles.title}>Калькулятор</h1>
				<form
					className={styles.form}
					onSubmit={handleSubmit(onSubmit)}
					noValidate
				>
					<div className={styles.form__container}>
						<CustomInput
							inputType={CustomInputTypes.building_length}
							labelText="Длина здания"
							validation={{
								...register("building_length", BUILDING_LENGTH_VALIDATION_CONFIG),
							}}
							error={errors?.building_length?.message}
						// maxLength={VALIDATION_SETTINGS.email.maxLength}
						/>
						<CustomInput
							inputType={CustomInputTypes.building_width}
							labelText="Ширина здания"
							validation={{
								...register("building_width", BUILDING_WIDTH_VALIDATION_CONFIG),
							}}
							error={errors?.building_width?.message}
						// maxLength={VALIDATION_SETTINGS.email.maxLength}
						/>
						<CustomInput
							inputType={CustomInputTypes.ceiling_height}
							labelText="Высота до потолка"
							validation={{
								...register("ceiling_height", CEILING_HEIGHT_VALIDATION_CONFIG),
							}}
							error={errors?.ceiling_height?.message}
						// maxLength={VALIDATION_SETTINGS.email.maxLength}
						/>
						<CustomInput
							inputType={CustomInputTypes.door_area}
							labelText="Площадь проёмов ворот, дверей"
							validation={{
								...register("door_area", DOOR_AREA_VALIDATION_CONFIG),
							}}
							error={errors?.door_area?.message}
						// maxLength={VALIDATION_SETTINGS.email.maxLength}
						/>
						<CustomInput
							inputType={CustomInputTypes.window_area}
							labelText="Площадь оконных проёмов"
							validation={{
								...register("window_area", WINDOW_AREA_VALIDATION_CONFIG),
							}}
							error={errors?.window_area?.message}
						// maxLength={VALIDATION_SETTINGS.window_area.maxLength}
						/>
					</div>
					<div className={styles.form__container}>
						<CustomInput
							inputType={CustomInputTypes.wall_panel_thickness}
							labelText="Толщина стеновых панелей, мм."
							validation={{
								...register("wall_panel_thickness", WALL_PANEL_THICKNESS_VALIDATION_CONFIG),
							}}
							error={errors?.wall_panel_thickness?.message}
						// maxLength={VALIDATION_SETTINGS.wall_panel_thickness.maxLength}
						/>
						<CustomInput
							inputType={CustomInputTypes.roof_panel_thickness}
							labelText="Толщина кровельных панелей, мм."
							validation={{
								...register("roof_panel_thickness", ROOF_PANEL_THICKNESS_VALIDATION_CONFIG),
							}}
							error={errors?.roof_panel_thickness?.message}
						// maxLength={VALIDATION_SETTINGS.roof_panel_thickness.maxLength}
						/>
						<CustomInput
							inputType={CustomInputTypes.insulation_type}
							labelText="Тип наполнителя"
							validation={{
								...register("insulation_type", INSULATION_TYPE_VALIDATION_CONFIG),
							}}
							error={errors?.insulation_type?.message}
						// maxLength={VALIDATION_SETTINGS.insulation_type.maxLength}
						/>
						<CustomInput
							inputType={CustomInputTypes.region}
							labelText="Район строительства"
							validation={{
								...register("region", REGION_VALIDATION_CONFIG),
							}}
							error={errors?.region?.message}
						// maxLength={VALIDATION_SETTINGS.region.maxLength}
						/>
						<CustomButton
							buttonText={"Рассчитать"}
							handleButtonClick={handleSubmit(onSubmit)}
							disabled={!isDirty || !isValid}
							type="submit"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CalculatorPage;