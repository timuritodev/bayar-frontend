import { mainItems } from '@/constants/mock';
import { FC } from 'react';
import { MainItemList } from './MainItem/MainItemList';
import styles from './style.module.scss';

// TODO добавить на фон лого

export const MainWrapper: FC = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Сэндвич-панели от производителя с утеплителем <br /><span className={styles.highlight}>Rockwool®</span></h2>
			<MainItemList data={mainItems} />
		</div>
	);
}