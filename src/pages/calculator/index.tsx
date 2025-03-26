import BuildingIllustration from '@/components/CalculatorPicture/CalculatorPicture';
import Popup from '@/components/Popup/Popup';
import SEO from '@/components/SEO/SEO';
import { calculateApi } from "@/services/redux/slices/calculator/calculator";
import { ICalculator } from '@/types/Calculator.types';
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../services/typeHooks";
import styles from "./style.module.scss";

const CalculatorPage = () => {
	const dispatch = useAppDispatch();
	const calculator = useAppSelector((state) => state.calculator);

	const [isPopupOpened, setIsPopupOpened] = useState<boolean>(false);
	const [insulation_type, setInsulation_type] = useState('mineral_wool');
	const [wall_panel_width, setWall_panel_width] = useState('1');
	const [metal_thickness, setMetal_thickness] = useState('0,45');
	const [insulation_density, setInsulation_density] = useState('95');
	const [buildingType, setBuildingType] = useState("односкатная");
	const [roofType, setRoofType] = useState("с");
	const [selectedColor, setSelectedColor] = useState('#FFFFFF');

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isDirty, isValid },
		getValues,
		watch,
	} = useForm<ICalculator>({
		mode: "onChange",
	});

	const onSubmit: SubmitHandler<ICalculator> = () => {
		dispatch(
			calculateApi({
				// building_type: buildingType,
				// roof_type: roofType,
				building_length: getValues("building_length"),
				building_width: getValues("building_width"),
				ceiling_height: getValues("ceiling_height"),
				door_area: getValues("door_area"),
				window_area: getValues("window_area"),
				wall_panel_thickness: getValues("wall_panel_thickness"),
				roof_panel_thickness: getValues("roof_panel_thickness"),
				wall_panel_width: +wall_panel_width,
				metal_thickness: +metal_thickness,
				insulation_type: insulation_type,
				insulation_density: +insulation_density,
				region: getValues("region"),
				color: getValues("color"),
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

	const formatPrice = (price: number) => {
		return new Intl.NumberFormat("ru-RU").format(price);
	};

	const calculator_formatted = [
		`Стоимость стен: ${formatPrice(calculator.details.basePrices.wall)} ₽/м²`,
		`Стоимость крыши: ${formatPrice(calculator.details.basePrices.roof)} ₽/м²`,
		`Утепление: ${formatPrice(calculator.details.insulation_cost)} ₽`,
		`Панели крыши: ${formatPrice(calculator.details.roof_panel_cost)} ₽`,
		`Панели стен: ${formatPrice(calculator.details.wall_panel_cost)} ₽`,
		`Общая стоимость: ${formatPrice(calculator.total_cost)} ₽`
	].map((line, index) => <p key={index}>{line}</p>);

	const buildingLength = watch('building_length') || 6;
	const buildingWidth = watch('building_width') || 4;
	const ceilingHeight = watch('ceiling_height') || 3;

	return (
		<>
			<SEO title="Калькулятор - BAYAR" description="Калькулятор для расчета стоимости сэндвич-панелей" keywords="калькулятор сэндвич-панели, калькулятор сэндвич панели, калькулятор стоимость сэндвич-панели, калькулятор" />

			<div className={styles.calculator}>
				<div className={styles.container}>
					<h1 className={styles.title}>Расчет панелей</h1>
					<BuildingIllustration />
					{/* <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
						<div className={styles.form__container}>
							<CustomSelect
							labelText={"Тип здания"}
							options={optionsBuilding}
							selectedValue={buildingType}
							onChange={setBuildingType} // TODO добавить анимацию
						/> 
							<CustomSelect
							labelText={"Тип кровли"}
							options={optionsRoof}
							selectedValue={roofType}
							onChange={setRoofType}
						/> 
							<CustomInput
								inputType={CustomInputTypes.building_length}
								labelText="Длина здания, м"
								validation={{ ...register("building_length", BUILDING_LENGTH_VALIDATION_CONFIG) }}
								error={errors?.building_length?.message}
							/>
							<CustomInput
								inputType={CustomInputTypes.building_width}
								labelText="Ширина здания, м"
								validation={{ ...register("building_width", BUILDING_WIDTH_VALIDATION_CONFIG) }}
								error={errors?.building_width?.message}
							/>
							<CustomInput
								inputType={CustomInputTypes.ceiling_height}
								labelText="Высота до потолка, м"
								validation={{ ...register("ceiling_height", CEILING_HEIGHT_VALIDATION_CONFIG) }}
								error={errors?.ceiling_height?.message}
							/>
							<CustomInput
								inputType={CustomInputTypes.door_area}
								labelText="Площадь проёмов ворот, дверей, кв. м"
								validation={{ ...register("door_area", DOOR_AREA_VALIDATION_CONFIG) }}
								error={errors?.door_area?.message}
							/>
							<CustomInput
								inputType={CustomInputTypes.window_area}
								labelText="Площадь оконных проёмов, кв. м"
								validation={{ ...register("window_area", WINDOW_AREA_VALIDATION_CONFIG) }}
								error={errors?.window_area?.message}
							/>
							<CustomOptions
								label="Ширина стеновой панели"
								options={options_wall_panel_width}
								selectedValue={wall_panel_width}
								onChange={setWall_panel_width}
							/>
						</div>
						<div className={styles.form__container}>
							<CustomInput
								inputType={CustomInputTypes.wall_panel_thickness}
								labelText="Толщина стеновых панелей, мм."
								validation={{ ...register("wall_panel_thickness", WALL_PANEL_THICKNESS_VALIDATION_CONFIG) }}
								error={errors?.wall_panel_thickness?.message}
							/>
							<CustomInput
								inputType={CustomInputTypes.roof_panel_thickness}
								labelText="Толщина кровельных панелей, мм."
								validation={{ ...register("roof_panel_thickness", ROOF_PANEL_THICKNESS_VALIDATION_CONFIG) }}
								error={errors?.roof_panel_thickness?.message}
							/>
							<CustomOptions
								label="Толщина металла, мм."
								options={options_metal_thickness}
								selectedValue={metal_thickness}
								onChange={setMetal_thickness}
							/>
							<CustomOptions
								label="Тип наполнителя"
								options={options_insulation_type}
								selectedValue={insulation_type}
								onChange={setInsulation_type}
							/>
							<CustomOptions
								label="Плотность утеплителя"
								options={options_insulation_density}
								selectedValue={insulation_density}
								onChange={setInsulation_density}
							/>
							<CustomInput
							inputType={CustomInputTypes.color}
							labelText="Цвет панелей"
							validation={{ ...register("color", COLOR_VALIDATION_CONFIG) }}
							error={errors?.color?.message}
						/> TODO добавить выбор цвета
							<CustomInput
								inputType={CustomInputTypes.region}
								labelText="Район строительства"
								validation={{ ...register("region", REGION_VALIDATION_CONFIG) }}
								error={errors?.region?.message}
							/>
							<CustomButton
								buttonText={"Рассчитать"}
								handleButtonClick={handleSubmit(onSubmit)}
								disabled={!isDirty || !isValid}
								type="submit"
							/>
						</div>
					</form> */}
				</div >
				<Popup
					title="Приблизительная стоимость"
					text={calculator_formatted}
					isOpened={isPopupOpened}
					setIsOpened={setIsPopupOpened}
				/>
			</div >
		</>
	);
};

export default CalculatorPage;
