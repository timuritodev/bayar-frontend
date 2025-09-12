import { features } from '@/constants/mock';
import { FC, useState } from 'react';
import styles from './style.module.scss';
import { FeaturesItemList } from './FeaturesItem/FeaturesItemList';
import { CustomButton } from '../../../components/CustomButton/CustomButton';
import { useResize } from '@/hooks/useResize';
import { useRouter } from 'next/router';

// TODO добавить на фон лого

export const Features: FC = () => {
	const { width } = useResize();
	const router = useRouter();
	const [showMore, setShowMore] = useState(false);

	// Короткий текст для мобилки
	const shortText = (
		<>
			Компания «Баяр» — единственный в регионе производитель, использующий наполнитель <span className={styles.color}>Rockwool<sup className={styles.superscript}>®</sup></span>.
		</>
	);
	// Полный текст с разметкой
	const fullText = (
		<>
			Компания «Баяр» производит стеновые и кровельные сэндвич-панели<br />
			<strong>Sandwel</strong> на собственной автоматизированной линии в ОЭЗ «Алабуга»,<br />
			Татарстан. «Баяр» — <strong>единственный в регионе производитель</strong>,<br />
			использующий наполнитель <span className={styles.color}>Rockwool<sup className={styles.superscript}>®</sup></span>. <strong>Гарантируем</strong> стабильное<br />
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
				) : width < 768 && showMore ? (
					<>
						{fullText} <button className={styles.readMore} onClick={() => setShowMore(false)}>Свернуть</button>
					</>
				) : fullText}
			</h5>
			<FeaturesItemList data={features} />
			<CustomButton
				buttonText={"Получить прайс"}
				handleButtonClick={() => router.push('/forms/feedback')}
				type="submit"
				className={styles.features_button}
			/>
		</div>
	);
}