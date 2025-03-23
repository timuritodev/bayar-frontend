
import SEO from '@/components/SEO/SEO';
import { getWater_accessorybyidApi } from '@/services/redux/slices/water_accessory/water_accessory';
import Image from "next/image";
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import waterproof from '../../../images/catalog/waterproofing.png';
import { useAppDispatch, useAppSelector } from "../../../services/typeHooks";
import styles from "./style.module.scss";

const Page = () => {
	const dispatch = useAppDispatch();
	const router = useRouter();
	const { id } = router.query; // Получаем id из URL
	const product = useAppSelector((state) => state.water_accessory.product);

	useEffect(() => {
		if (id) {
			dispatch(getWater_accessorybyidApi(Number(id)));
		}
	}, [id, dispatch]);

	if (!product.title) return <p>Загрузка...</p>;

	return (
		<>
			<SEO title={`${product.title} - BAYAR`} description={`Покупайте ${product.title} по лучшим ценам с доставкой по всей рф. ${product.description}`} keywords={`${product.title}, купить ${product.title}, BAYAR`} />

			<div className={styles.product}>
				<div className={styles.container}>
					<div className={styles.block}>
						<Image className={styles.img} alt={product.title} src={waterproof} width={557} height={532} />
						{/*TODO добавить сюда кнопку для заказать +- */}
					</div>
					<div className={styles.block}>
						<h1 className={styles.title}>{product.title}</h1>
						<h3 className={styles.subtitle}>Описание</h3>
						<p className={styles.description}>{product.description}</p>
						<h3 className={styles.subtitle}>Характеристики</h3>
						<ul className={styles.characteristics}>
							{product.characteristics?.map((char, index) => (
								<li key={index} className={styles.characteristic}>
									<span className={styles.charName}>{char.name}:</span>
									<span className={styles.charValue}>{char.value}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
