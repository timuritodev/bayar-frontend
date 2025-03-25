
import { IComponentCard } from '@/types/ComponentCard.types';
import Image from "next/image";
import { useRouter } from 'next/router';
import { FC } from 'react';
import styles from "./style.module.scss";

interface IComponentCardProps {
	data: IComponentCard;
}

export const ComponentCard: FC<IComponentCardProps> = ({ data }) => {
	const router = useRouter();

	const handleNavigate = () => {
		if (data.link) router.push(data.link)
	}

	return (
		<div className={styles.container} onClick={data.link ? handleNavigate : undefined}>
			<Image className={styles.img} alt={data.title} src={data.img} width={460} height={450} />
			<p className={styles.title}>{data.title}</p>
		</div>
	)
}