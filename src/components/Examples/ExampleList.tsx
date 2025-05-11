import { IExample } from '@/types/Example.types';
import { FC } from "react";
import { Example } from './Example';
import styles from "./style.module.scss";

interface ExampleListProps {
	data: IExample[];
}

export const ExampleList: FC<ExampleListProps> = ({ data }) => {
	return (
		<div className={styles.list}>
			{data.length !== 0 &&
				data.map((item) => <Example key={item.id} data={item} />)}
		</div>
	);
};
