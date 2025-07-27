import { useResize } from '@/hooks/useResize';
import Image from "next/image";
import { FC } from "react";
import pic from "../../../images/main_wrapper/compound.png";
import pic_small from "../../../images/main_wrapper/compound_small.png";
import styles from "./style.module.scss";

export const Compound: FC = () => {
	const { width } = useResize();

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Из чего состоит сэндвич-панель Sandwel™<br /> производства “Баяр”</h2>
			<Image
				src={width > 767 ? pic : pic_small}
				alt="Изображение с составом сэндвич-панели"
				className={styles.img}
				width={width > 767 ? 1129 : 320}
				height={width > 767 ? 520 : 575}
			/>
		</div>
	)
};