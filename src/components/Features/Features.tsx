import { features } from '@/constants/mock';
import { FC } from 'react';
import styles from './style.module.scss';
import { FeaturesItemList } from './FeaturesItem/FeaturesItemList';
import { CustomButton } from '../CustomButton/CustomButton';

// TODO добавить на фон лого

export const Features: FC = () => {
	return (
		<div className={styles.container}>
			<h5 className={styles.title}>Компания «Баяр» производит стеновые и кровельные сэндвич-панели<br /> <strong>Sandwel</strong> на собственной автоматизированной линии в ОЭЗ «Алабуга»,<br /> Татарстан. «Баяр» — <strong>единственный в регионе производитель</strong>,<br /> использующий наполнитель <span className={styles.color}>Rockwool®</span>. <strong>Гарантируем</strong> стабильное<br /> <strong>качество</strong>, точные <strong>размеры</strong> и высокую <strong>жесткость</strong> конструкций из<br /> сэндвич-панелей.</h5>
			<FeaturesItemList data={features} />
			<CustomButton
				buttonText={"Получить прайс"}
				// handleButtonClick={handleSubmit(onSubmit)}
				// disabled={!isDirty || !isValid}
				type="submit"
				className={styles.features_button}
			/>
		</div>
	);
}