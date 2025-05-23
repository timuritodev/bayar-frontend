
import { IExample } from '@/types/Example.types';
import Image from "next/image";
import { FC } from 'react';
import styles from "./style.module.scss";

interface IExampleProps {
	data: IExample;
}

export const Example: FC<IExampleProps> = ({ data }) => {
	return (
		<div className={styles.container}>
			<Image className={styles.img} alt={data.title} src={data.img} width={460} height={450} />
			<p className={styles.title}>{data.title}</p>
		</div>
	)
}