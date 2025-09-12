import { mainItems } from '@/constants/mock';
import { FC } from 'react';
import { MainItemList } from './MainItem/MainItemList';
import { useResize } from '@/hooks/useResize';
import styles from './style.module.scss';

// TODO добавить на фон лого

export const MainWrapper: FC = () => {
	const { width } = useResize();

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>
				{width > 767 ? (
					<>
						Сэндвич-панели&nbsp;от&nbsp;производителя<br />
						С&nbsp;утеплителем <span className={styles.highlight}>Rockwool<sup className={styles.superscript}>®</sup></span>
					</>
				) : (
					<>
						Сэндвич-панели от производителя<br />
						С утеплителем <span className={styles.highlight}>Rockwool<sup className={styles.superscript}>®</sup></span>
					</>
				)}
			</h2>
			<MainItemList data={mainItems} />
		</div>
	);
}