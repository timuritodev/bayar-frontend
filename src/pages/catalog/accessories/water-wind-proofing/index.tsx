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
			<div className={styles.page}>
				<div className={styles.container}>
					<h2 className={styles.subtitle}>Гидроизоляция, ветрозащита</h2>
					<WaterAccList data={products} />
				</div>
			</div>
		</>
	);
};

export default Page;
