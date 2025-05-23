import { ProductList } from '@/components/Product/ProductList';
import SEO from '@/components/SEO/SEO';
import { getProductsByType } from '@/services/redux/slices/products/products';
import { useAppDispatch, useAppSelector } from "@/services/typeHooks";
import { useEffect } from 'react';
import styles from "./style.module.scss";

const Page = () => {
	const dispatch = useAppDispatch();
	const products = useAppSelector((state) => state.products.products);

	useEffect(() => {
		dispatch(getProductsByType('fasteners'));
	}, []);

	return (
		<>
			<SEO title="Крепежные элементы - BAYAR" description="Покупайте комплектующие по лучшим ценам" keywords="крепежные элементы купить, крепеж купить" />

			<div className={styles.page}>
				<div className={styles.container}>
					<h1 className={styles.title}>Крепежные элементы</h1>
					<ProductList data={products} />
				</div>
			</div>
		</>
	);
};

export default Page;
