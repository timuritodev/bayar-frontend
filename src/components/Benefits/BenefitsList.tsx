import { IBenefit } from '@/types/Benefit.types';
import { FC } from "react";
import { Benefit } from './Benefit';
import styles from "./style.module.scss";

interface BenefitsListProps {
	data: IBenefit[];
}

export const BenefitsList: FC<BenefitsListProps> = ({ data }) => {
	return (
		<div className={styles.list}>
			{data.length !== 0 &&
				data.map((item) => <Benefit key={item.id} data={item} />)}
		</div>
	);
};
