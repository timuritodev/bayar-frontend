import Popup from '@/components/Popup/Popup';
import { useResize } from '@/hooks/useResize';
import Image from "next/image";
import Link from 'next/link';
import { FC, useEffect, useState } from "react";
import pic from "../../../images/main_wrapper/compound.png";
import pic_small from "../../../images/main_wrapper/compound_small.png";
import styles from "./style.module.scss";

export const Compound: FC = () => {
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

			const compoundElement = document.querySelector(`.${styles.container}`);
			if (compoundElement) {
				const rect = compoundElement.getBoundingClientRect();

				// Показываем popup когда блок Compound полностью проскроллен
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
				{width < 767 ? <h2 className={styles.title}>Из чего состоит сэндвич-<br />панель Sandwel™<br /> производства "Баяр"</h2> : <h2 className={styles.title}>Из чего состоит сэндвич-панель Sandwel™<br /> производства "Баяр"</h2>}
				<Image
					src={width > 767 ? pic : pic_small}
					alt="Изображение с составом сэндвич-панели"
					className={styles.img}
					width={width > 767 ? 1129 : 320}
					height={width > 767 ? 520 : 575}
				/>
			</div>

			<Popup
				isOpened={isCalculatorPopupOpen}
				setIsOpened={setIsCalculatorPopupOpen}
				style={{
					backgroundColor: '#f08b23',
				}}
			>
				<Link
					href="/forms/feedback#form_calc"
					className={styles.popup__calculator_link}
					onClick={() => setIsCalculatorPopupOpen(false)}
				>
					Калькулятор
				</Link>
			</Popup>
		</>
	)
};