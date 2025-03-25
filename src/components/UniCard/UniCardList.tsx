import { IUniCard } from '@/types/UniCard.types';
import { FC } from "react";
import { UniCard } from './UniCard';
import styles from "./style.module.scss";

interface UniCardsListProps {
	data: IUniCard[];
}

export const UniCardsList: FC<UniCardsListProps> = ({ data }) => {
	return (
		<div className={styles.list}>
			{data.length !== 0 &&
				data.map((item) => <UniCard key={item.id} data={item} />)}
		</div>
	);
};
