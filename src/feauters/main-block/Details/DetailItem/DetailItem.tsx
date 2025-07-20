import { FC } from "react";
import styles from "./style.module.scss";
import { useHighlightParser } from '@/hooks/useHighlightParser';


export interface IDetailItem {
	id: number;
	text: string;
}

interface IDetailItemProps {
	data: IDetailItem;
}

export const DetailItem: FC<IDetailItemProps> = ({ data }) => (
	<div className={styles.card}>
		<p className={styles.text}>{useHighlightParser(data.text, '#f28c00')}</p>
	</div>
);
