import SEO from '@/components/SEO/SEO';
import { WaterAccList } from '@/components/WaterAcc/WaterAccList';
import { getWater_accessoryApi } from '@/services/redux/slices/water_accessory/water_accessory';
import { useAppDispatch, useAppSelector } from "@/services/typeHooks";
import { useEffect } from 'react';
import styles from "./style.module.scss";

const Page = () => {
	const dispatch = useAppDispatch();
	const products = useAppSelector((state) => state.water_accessory.products);

	useEffect(() => {
		dispatch(getWater_accessoryApi());
	}, []);

	return (
		<>
			<SEO title="Гидроизоляция/Ветрозащита - BAYAR" description="Покупайте комплектующие по лучшим ценам" keywords="гидроизоляция купить, ветрозащита купить, гидроизоляция ветрозащита купить" />

			<div className={styles.page}>
				<div className={styles.container}>
					<h1 className={styles.title}>Гидроизоляция, ветрозащита</h1>
					<WaterAccList data={products} />
				</div>
			</div>
		</>
	);
};

export default Page;
