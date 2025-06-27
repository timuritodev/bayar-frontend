// File: src/pages/product/[id]/index.tsx

import SEO from '@/components/SEO/SEO';
import { API_BASE_URL } from '@/constants/constants';
import { fetchProductById } from '@/services/redux/slices/products/productsAPI';
import { IProduct } from '@/types/Product.types';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import styles from './style.module.scss';

type ProductPageProps = {
	product: IProduct;
};

export const getServerSideProps: GetServerSideProps<ProductPageProps> = async (context) => {
	const { id } = context.params!;

	// Проверяем валидность параметра
	if (!id || Array.isArray(id)) {
		return {
			notFound: true,
		};
	}

	const productId = Number(id);
	if (isNaN(productId)) {
		return {
			notFound: true,
		};
	}

	try {
		// 1) Делаем прямой вызов к fetchProductById (API‑функция)
		const product: IProduct = await fetchProductById(productId);

		// 2) Если продукт не найден (считаем, что API вернул 404 или бросил ошибку)
		if (!product || !product.id) {
			return {
				notFound: true,
			};
		}

		// 3) Возвращаем объект product в props
		return {
			props: {
				product,
			},
		};
	} catch (error) {
		// Если fetchProductById бросил ошибку (например, 404 или сеть), показываем 404
		return {
			notFound: true,
		};
	}
};

const ProductPage = ({
	product,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	// На этом этапе мы точно знаем, что product имеется (иначе Next.js выдал бы 404)

	const imageUrl = `${API_BASE_URL}${product.picture}`; // Если picture хранит относительный путь

	return (
		<>
			<SEO
				title={`${product.title} - BAYAR`}
				description={`Покупайте ${product.title} по лучшим ценам с доставкой по всей РФ. ${product.description}`}
				keywords={`${product.title}, купить ${product.title}, BAYAR`}
			/>

			<div className={styles.product}>
				<div className={styles.container}>
					<div className={styles.block}>
						<Image
							className={styles.img}
							alt={product.title}
							src={imageUrl}
							width={557}
							height={532}
						/>
						{/* TODO: добавить кнопку «Заказать» */}
					</div>

					<div className={styles.block}>
						<h1 className={styles.title}>{product.title}</h1>
						<h3 className={styles.subtitle}>Описание</h3>
						<p className={styles.description}>{product.description}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductPage;
