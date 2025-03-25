import { IWaterAcc } from '@/types/WaterAcc.types';
import { FC } from "react";
import styles from "./style.module.scss";
import { WaterAcc } from './WaterAcc';

interface WaterAccListProps {
	data: IWaterAcc[];
}

export const WaterAccList: FC<WaterAccListProps> = ({ data }) => {
	return (
		<div className={styles.list}>
			{data?.length !== 0 &&
				data?.map((item) => <WaterAcc key={item.id} data={item} />)}
		</div>
	);
};
