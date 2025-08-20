import { useResize } from '@/hooks/useResize';
import Image from "next/image";
import { FC } from 'react';
import { CustomButton } from '../../../components/CustomButton/CustomButton';
import pic from "../../../images/gifts/gift.png";
import styles from './style.module.scss';
import { useRouter } from 'next/router';
// TODO добавить на фон лого

export const Gifts: FC = () => {
	const { width } = useResize();
	const router = useRouter();

	const getNextMonth = () => {
		const months = [
			'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
			'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
		];

		const currentDate = new Date();
		const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

		return months[nextMonth.getMonth()];
	};

	return (
		<div className={styles.container} id="gift">
			<div className={styles.sec_container}>
				<h3 className={styles.title}>Оставьте заявку прямо сейчас и получите подарок при заказе до 30 {getNextMonth()}!</h3>
				{width < 767 && (
					<div className={styles.imgWrapper}>
						<Image className={styles.img} src={pic} alt={'Изображение с подарком'} width={182} height={182} />
					</div>
				)}
				<div className={styles.wrapper}>
					<div className={styles.text_wrapper}>
						<p className={styles.text}><span className={styles.bold}>При заказе кровельных панелей:</span><br />
							дарим уплотнитель ПКБ 34 (верхний и нижний).</p>
						<p className={styles.text}><span className={styles.bold}>При заказе стеновых панелей:</span> <br />
							вы получите уплотнительную ленту Кнауф Дихтунгсбанд 30ммх30м в подарок</p>
						<p className={styles.description}>Уплотнители защищают от влаги, сквозняков, пыли и продлевают срок службы конструкций</p>

					</div>
					{width > 767 && (
						<div className={styles.imgWrapper}>
							<Image className={styles.img} src={pic} alt={'Изображение с подарком'} width={182} height={182} />
						</div>
					)}
				</div>
				<CustomButton
					buttonText={"Оставить заявку"}
					handleButtonClick={() => router.push('/forms/feedback')}
					type="submit"
					className={styles.features_button}
				/>
			</div>
		</div>
	);
}