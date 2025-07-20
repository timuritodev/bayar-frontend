import { FC } from "react";
import { IDetailItem, DetailItem } from "./DetailItem";
import styles from "./style.module.scss";

interface DetailItemListProps {
	data: IDetailItem[];
}

export const DetailItemList: FC<DetailItemListProps> = ({ data }) => {
	return (
		<div className={styles.list}>
			{data.length !== 0 &&
				data.map((item) => <DetailItem key={item.id} data={item} />)}
		</div>
	);
};
