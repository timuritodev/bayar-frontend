import { IWaterAcc } from '@/types/WaterAcc.types';
import Image from "next/image";
import router from 'next/router';
import { FC } from "react";
import waterproof from '../../images/catalog/waterproofing.png';
import styles from "./style.module.scss";

interface IWaterAccProps {
	data: IWaterAcc;
}

export const WaterAcc: FC<IWaterAccProps> = ({ data }) => {
	const handleClickImage = () => {
		router.push(`/product/water-wind-proofing/${data.id}`);
	};

	return (
		<div className={styles.container}>
			{/* <Image className={styles.img} alt={data.title} src={data.h_picture} width={383} height={370} onClick={handleClickImage}/> */}
			<Image className={styles.img} alt={data.title} src={waterproof} width={383} height={370} onClick={handleClickImage} />
			<p className={styles.text}>{data.title}</p>
			<button className={styles.button}>Заказать</button> {/*TODO сделать кнопку рабочей +- */}
		</div>
	);
};
