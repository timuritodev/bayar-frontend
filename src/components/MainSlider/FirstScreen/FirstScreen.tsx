import { IFirstScreen } from '@/types/FirstScreen.types';
import Image from "next/image";
import { FC } from 'react';
import styles from './style.module.scss';

interface IFirstScreenProps {
	data: IFirstScreen;
}

export const FirstScreen: FC<IFirstScreenProps> = ({ data }) => {
	return (
		<div className={styles.first_screen}>
			<Image className={styles.img} src={data.img} alt={data.title} />
			<p className={styles.text}>{data.title}</p>
		</div>
	);
}