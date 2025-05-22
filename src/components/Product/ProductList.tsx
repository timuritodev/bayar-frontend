import { IProduct } from '@/types/Product.types';
import { FC } from "react";
import { Product } from './Product';
import styles from "./style.module.scss";

interface ProductListProps {
	data: IProduct[];
}

export const ProductList: FC<ProductListProps> = ({ data }) => {
	return (
		<div className={styles.list}>
			{data?.length !== 0 &&
				data?.map((item) => <Product key={item.id} data={item} />)}
		</div>
	);
};
