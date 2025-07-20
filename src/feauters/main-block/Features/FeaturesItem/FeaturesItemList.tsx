import { FC } from "react";
import { IFeaturesItem, FeaturesItem } from "./FeaturesItem";
import styles from "./style.module.scss";

interface FeaturesItemListProps {
	data: IFeaturesItem[];
}

export const FeaturesItemList: FC<FeaturesItemListProps> = ({ data }) => {
	return (
		<div className={styles.list}>
			{data.length !== 0 &&
				data.map((item) => <FeaturesItem key={item.id} data={item} />)}
		</div>
	);
};
