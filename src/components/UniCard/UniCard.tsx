import { IUniCard } from '@/types/UniCard.types';
import Image from "next/image";
import { useRouter } from 'next/router';
import { FC } from 'react';
import styles from "./style.module.scss";

interface IUniCardProps {
	data: IUniCard;
}

export const UniCard: FC<IUniCardProps> = ({ data }) => {
	const router = useRouter();

	const handleNavigate = () => {
		if (data.link) router.push(data.link)
	}

	return (
		<div className={styles.container} onClick={data.link ? handleNavigate : undefined}>
			<Image className={styles.img} alt={data.title} src={data.img} width={data.width ?? 460} height={data.height ?? 310} />
			<p className={styles.title}>{data.title}</p>
		</div>
	)
}