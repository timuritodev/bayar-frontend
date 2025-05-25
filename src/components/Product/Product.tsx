import { API_BASE_URL } from '@/constants/constants';
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
		router.push(`/product/${data.id}`);
	};

	const imageUrl = API_BASE_URL + data.picture;

	return (
		<div className={styles.container}>
			<Image className={styles.img} alt={data.title} src={imageUrl} width={383} height={370} onClick={handleClickImage} />
			<p className={styles.text}>{data.title}</p>
			<button className={styles.button}>Заказать</button> {/*TODO сделать кнопку рабочей +- */}
		</div>
	);
};
