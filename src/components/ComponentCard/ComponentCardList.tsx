import { IComponentCard } from '@/types/ComponentCard.types';
import { FC } from "react";
import { ComponentCard } from './ComponentCard';
import styles from "./style.module.scss";

interface ComponentCardListProps {
	data: IComponentCard[];
}

export const ComponentCardList: FC<ComponentCardListProps> = ({ data }) => {
	return (
		<div className={styles.list}>
			{data.length !== 0 &&
				data.map((item) => <ComponentCard key={item.id} data={item} />)}
		</div>
	);
};
