import { FC } from "react";
import styles from "./style.module.scss";

export interface IMainItem {
	id: number;
	value: string;
	beforeUnit?: string;
	unit?: string;
	smallUnit?: string;
	description: string;
}


interface IMainItemProps {
	data: IMainItem;
}

export const MainItem: FC<IMainItemProps> = ({ data }) => (
	<div className={styles.card}>
		<div className={styles.wrapper}>
			<span className={styles.beforeUnit}>{data?.beforeUnit}</span>
			<span className={styles.value}>{data.value}</span>
			<span className={styles.unit}>{data.unit}</span>
			<span className={styles.smallUnit}>{data?.smallUnit}</span>
		</div>
		<p className={styles.description}>{data.description}</p>
	</div>
);
