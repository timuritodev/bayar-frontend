import { FC, useEffect } from 'react';
import styles from './style.module.scss';

interface IPopup {
	title: string;
	text: string;
	isOpened: boolean;
	setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const Popup: FC<IPopup> = ({ title, text, isOpened, setIsOpened }) => {
	const handleOverlayClick: React.MouseEventHandler<HTMLDivElement> = (evt) => {
		if (evt.target === evt.currentTarget) {
			setIsOpened(false);
		}
	};

	useEffect(() => {
		const handleEscClick = (evt: KeyboardEvent) => {
			if (evt.key === 'Escape') {
				setIsOpened(false);
			}
		};

		document.addEventListener('keydown', handleEscClick);

		return () => document.removeEventListener('keydown', handleEscClick);
	}, [setIsOpened]);

	useEffect(() => {
		const body = document.querySelector('body');
		if (isOpened) {
			body?.classList.add(styles.bodyScrollLock);
		} else {
			body?.classList.remove(styles.bodyScrollLock);
		}
	}, [isOpened]);

	return (
		<div
			className={`${styles.popup} ${isOpened ? styles.popup_opened : ''}`}
			onClick={handleOverlayClick}
		>
			<div className={styles.popup__container}>
				<button
					type="button"
					className={styles.btn_close}
					onClick={() => setIsOpened(false)}
				></button>
				<h4 className={styles.popup__title}>
					{title}
				</h4>
				<p className={styles.popup__text}>
					{text}
				</p>
				<button
					className={styles.popup__close}
					onClick={() => setIsOpened(false)}
				>
					Закрыть
				</button>
			</div>
		</div>
	);
};

export default Popup;