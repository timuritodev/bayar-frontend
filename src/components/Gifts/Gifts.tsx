import { FC } from 'react';
import styles from './style.module.scss';
import { CustomButton } from '../CustomButton/CustomButton';
import Image from "next/image";
import pic from "../../images/gifts/gift.png"
// TODO добавить на фон лого

export const Gifts: FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.sec_container}>
				<h3 className={styles.title}>Оставьте заявку прямо сейчас и получите подарок при заказе до 30 июня!</h3>
				<div className={styles.wrapper}>
					<div className={styles.text_wrapper}>
						<p className={styles.text}><span className={styles.bold}>При заказе кровельных панелей:</span><br />
							дарим уплотнитель ПКБ 34 (верхний и нижний).</p>
						<p className={styles.text}><span className={styles.bold}>При заказе стеновых панелей:</span> <br />
							вы получите уплотнительную ленту Кнауф Дихтунгсбанд 30ммх30м в подарок</p>
						<p className={styles.description}>Уплотнители защищают от влаги, сквозняков, пыли и продлевают срок службы конструкций</p>

					</div>
					<div className={styles.imgWrapper}>
						<Image className={styles.img} src={pic} alt={'Изображение с подарком'} width={182} height={182} />
					</div>
				</div>
				<CustomButton
					buttonText={"Оставить заявку"}
					// handleButtonClick={handleSubmit(onSubmit)}
					// disabled={!isDirty || !isValid}
					type="submit"
					className={styles.features_button}
				/>
			</div>
		</div>
	);
}