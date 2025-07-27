import { IPartner } from '@/types/Partner.types';
import Image from "next/image";
import { FC } from 'react';
import styles from './style.module.scss';

interface IPartnerProps {
	data: IPartner;
}

export const Partner: FC<IPartnerProps> = ({ data }) => {
	return (
		<div className={styles.container}>
			<Image className={styles.img} src={data.img} alt={data.title} />
		</div>
	);
}