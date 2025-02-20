import { FC } from "react";
import styles from "./style.module.scss";

interface IRalColorProps {
	data: IRalColor
}

export const RalColor: FC<IRalColorProps> = ({ data }) => {
	return (
		<div className={styles.container}>
			<div
				className={styles.color}
				style={{ backgroundColor: data.hex }}
			></div>
			<p className={styles.title}>{data.name}</p>
		</div>
	);
};