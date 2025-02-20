import { IUniCard } from '@/types/UniCard.types';
import Image from "next/image";
import { FC } from 'react';
import styles from "./style.module.scss";

interface IUniCardProps {
	data: IUniCard;
}

export const UniCard: FC<IUniCardProps> = ({ data }) => {
	return (
		<div className={styles.container}>
			<Image className={styles.img} alt={data.title} src={data.img} width={460} height={310} />
			<p className={styles.title}>{data.title}</p>
		</div>
	)
}