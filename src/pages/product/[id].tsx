
import SEO from '@/components/SEO/SEO';
import { API_BASE_URL } from '@/constants/constants';
import { getProductById } from '@/services/redux/slices/products/products';
import Image from "next/image";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from "../../services/typeHooks";
import styles from "./style.module.scss";
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { ProductOrderPopup } from '@/components/ProductOrderPopup/ProductOrderPopup';

const Page = () => {
	const dispatch = useAppDispatch();
	const router = useRouter();
	const { id } = router.query;
	const product = useAppSelector((state) => state.products.product);
	const [isOrderPopupOpen, setIsOrderPopupOpen] = useState(false);

	useEffect(() => {
		if (id) {
			dispatch(getProductById((+id)));
		}
	}, [id, dispatch]);

	if (!product.title) return <p>Загрузка...</p>;

	const imageUrl = API_BASE_URL + product.picture;

	const handleOrderClick = () => {
		setIsOrderPopupOpen(true);
	};

	return (
		<>
			<SEO title={`${product.title} - BAYAR`} description={`Покупайте ${product.title} по лучшим ценам с доставкой по всей рф. ${product.description}`} keywords={`${product.title}, купить ${product.title}, BAYAR`} />

			<div className={styles.product}>
				<div className={styles.container}>
					<div className={styles.block}>
						<Image className={styles.img} alt={product.title} src={imageUrl} width={557} height={532} />
						<CustomButton
							buttonText="Заказать"
							handleButtonClick={handleOrderClick}
							type="button"
						/>
					</div>
					<div className={styles.block}>
						<h1 className={styles.title}>{product.title}</h1>
						<h3 className={styles.subtitle}>Описание</h3>
						<p className={styles.description}>{product.description}</p>
					</div>
				</div>
			</div>
			<ProductOrderPopup
				isOpened={isOrderPopupOpen}
				setIsOpened={setIsOrderPopupOpen}
				product={product}
			/>
		</>
	);
};

export default Page;
