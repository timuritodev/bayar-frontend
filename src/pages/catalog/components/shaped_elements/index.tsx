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
		dispatch(getProductsByType('shaped_elements'));
	}, []);

	return (
		<>
			<SEO title="Профнастил - BAYAR" description="Покупайте комплектующие по лучшим ценам" keywords="профнастил купить" />

			<div className={styles.page}>
				<div className={styles.container}>
					<h1 className={styles.title}>Профнастил</h1>
					<ProductList data={products} />
				</div>
			</div>
		</>
	);
};

export default Page;
