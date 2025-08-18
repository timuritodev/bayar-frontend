import { details, features } from '@/constants/mock';
import { FC, useEffect, useState } from 'react';
import styles from './style.module.scss';
import { DetailItemList } from './DetailItem/DetailItemList';
import { useResize } from '@/hooks/useResize';
import { DetailsSlider } from '@/feauters/sliders/DetailsSlider/DetailsSlider';
import Popup from '@/components/Popup/Popup';
import Link from 'next/link';

// TODO добавить на фон лого

export const Details: FC = () => {
	const { width } = useResize();
	const [isCalculatorPopupOpen, setIsCalculatorPopupOpen] = useState(false);
	const [hasShownPopup, setHasShownPopup] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (hasShownPopup) return;

			const detailsElement = document.querySelector(`.${styles.container}`);
			if (detailsElement) {
				const rect = detailsElement.getBoundingClientRect();
				const windowHeight = window.innerHeight;

				// Показываем popup когда блок Details полностью проскроллен
				if (rect.bottom <= 0 && !hasShownPopup) {
					setIsCalculatorPopupOpen(true);
					setHasShownPopup(true);
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [hasShownPopup]);

	return (
		<>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<h5 className={styles.title}>Мы знаем, что важно: ТОП-качество в сжатые сроки</h5>
					<p className={styles.text}>Прорабы знают, чем заканчивается экономия на утеплителе — грибок, ржавчина, жалобы от заказчиков. Мы <br /> хотим, чтобы вы к нам возвращались с новыми проектами! Поэтому делаем акцент на качестве сэндвич-панелей.</p>
					{width < 767 ? <DetailsSlider /> : <DetailItemList data={details} />}
				</div>
			</div>

			<Popup
				isOpened={isCalculatorPopupOpen}
				setIsOpened={setIsCalculatorPopupOpen}
			>
				<Link
					href="/forms/feedback"
					className={styles.popup__calculator_link}
					onClick={() => setIsCalculatorPopupOpen(false)}
				>
					Хотите, рассчитаем цену прямо сейчас?
				</Link>
			</Popup>
		</>
	);
}