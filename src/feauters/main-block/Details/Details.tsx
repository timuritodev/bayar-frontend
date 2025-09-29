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
	const [isProgrammaticScroll, setIsProgrammaticScroll] = useState(false);

	// Простая проверка программной прокрутки без постоянных интервалов
	useEffect(() => {
		// Проверяем только при монтировании компонента
		if ((window as any).isProgrammaticScroll) {
			setIsProgrammaticScroll(true);
		}
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			if (hasShownPopup) return;

			// Игнорируем программную прокрутку (например, через ссылку контакты)
			const timeSinceContactsClick = (window as any).contactsClickTime ? Date.now() - (window as any).contactsClickTime : Infinity;
			const timeSinceGiftClick = (window as any).giftClickTime ? Date.now() - (window as any).giftClickTime : Infinity;
			if ((window as any).isProgrammaticScroll || isProgrammaticScroll || timeSinceContactsClick < 5000 || timeSinceGiftClick < 5000 || (window as any).isUserClick) {
				return;
			}

			const detailsElement = document.querySelector(`.${styles.container}`);
			if (detailsElement) {
				const rect = detailsElement.getBoundingClientRect();

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
					<div className={styles.text_wrapper}>
						<h5 className={styles.title}>Мы знаем, что важно: ТОП-качество в сжатые сроки</h5>
						<p className={styles.text}>Прорабы знают, чем заканчивается экономия на утеплителе — грибок, ржавчина, жалобы от заказчиков. Мы <br /> хотим, чтобы вы к нам возвращались с новыми проектами! Поэтому делаем акцент на качестве сэндвич-панелей.</p>
					</div>
					{width < 767 ?
						<DetailsSlider /> :
						<DetailItemList data={details} />
					}
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