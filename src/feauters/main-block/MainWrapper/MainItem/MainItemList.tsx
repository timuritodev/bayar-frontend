import { FC } from "react";
import { IMainItem, MainItem } from "./MainItem";
import styles from "./style.module.scss";

interface MainItemListProps {
	data: IMainItem[];
}

export const MainItemList: FC<MainItemListProps> = ({ data }) => {
	return (
		<div className={styles.mainitemlist}>
			{data.length !== 0 &&
				data.map((item) => <MainItem key={item.id} data={item} />)}
		</div>
	);
};
