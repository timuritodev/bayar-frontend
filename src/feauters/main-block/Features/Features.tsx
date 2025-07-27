import { features } from '@/constants/mock';
import { FC, useState } from 'react';
import styles from './style.module.scss';
import { FeaturesItemList } from './FeaturesItem/FeaturesItemList';
import { CustomButton } from '../../../components/CustomButton/CustomButton';
import { useResize } from '@/hooks/useResize';

// TODO добавить на фон лого

export const Features: FC = () => {
	const { width } = useResize();
	const [showMore, setShowMore] = useState(false);

	// Короткий текст для мобилки
	const shortText = (
		<>
			Компания «Баяр» — единственный в регионе производитель, использующий наполнитель <span className={styles.color}>Rockwool®</span>.
		</>
	);
	// Полный текст с разметкой
	const fullText = (
		<>
			Компания «Баяр» производит стеновые и кровельные сэндвич-панели<br />
			<strong>Sandwel</strong> на собственной автоматизированной линии в ОЭЗ «Алабуга»,<br />
			Татарстан. «Баяр» — <strong>единственный в регионе производитель</strong>,<br />
			использующий наполнитель <span className={styles.color}>Rockwool®</span>. <strong>Гарантируем</strong> стабильное<br />
			<strong>качество</strong>, точные <strong>размеры</strong> и высокую <strong>жесткость</strong> конструкций из<br />
			сэндвич-панелей.
		</>
	);

	return (
		<div className={styles.container}>
			<h5 className={styles.title}>
				{width < 768 && !showMore ? (
					<>
						{shortText} <button className={styles.readMore} onClick={() => setShowMore(true)}>Читать далее</button>
					</>
				) : fullText}
			</h5>
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