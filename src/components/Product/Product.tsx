import { IProduct } from '@/types/Product.types';
import Image from "next/image";
import router from 'next/router';
import { FC } from "react";
import styles from "./style.module.scss";

interface IProductProps {
	data: IProduct;
}

export const Product: FC<IProductProps> = ({ data }) => {
	const handleClickImage = () => {
		router.push(`/product/water-wind-proofing/${data.id}`);
	};

	return (
		<div className={styles.container}>
			{/* <Image className={styles.img} alt={data.title} src={data.h_picture} width={383} height={370} onClick={handleClickImage}/> */}
			<Image className={styles.img} alt={data.title} src={''} width={383} height={370} />
			<p className={styles.text}>{data.title}</p>
			<button className={styles.button}>Заказать</button> {/*TODO сделать кнопку рабочей +- */}
		</div>
	);
};
