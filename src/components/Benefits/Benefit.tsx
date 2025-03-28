import { IBenefit } from '@/types/Benefit.types';
import Image from "next/image";
import { FC } from "react";
import styles from "./style.module.scss";

interface IBenefitProps {
	data: IBenefit;
}

export const Benefit: FC<IBenefitProps> = ({ data }) => {
	return (
		<div className={styles.benefit}>
			<div className={styles.img__wrapper}>
				<Image className={styles.img} alt={data.title} src={data.img} width={120} height={120} />
			</div>
			<p className={styles.text}>{data.title}</p>
		</div>
	);
};
