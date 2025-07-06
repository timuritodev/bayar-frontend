import { FC } from "react";
import styles from "./style.module.scss";
import Image, { StaticImageData } from "next/image";


export interface IFeaturesItem {
	id: number;
	img: StaticImageData;
	description: string;
}

interface IFeaturesItemProps {
	data: IFeaturesItem;
}

export const FeaturesItem: FC<IFeaturesItemProps> = ({ data }) => (
	<div className={styles.card}>
		<Image
			src={data.img}
			alt="feature"
			className={styles.img}
		/>
		<p className={styles.description}>{data.description}</p>
	</div>
);
