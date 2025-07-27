import { details, features } from '@/constants/mock';
import { FC } from 'react';
import styles from './style.module.scss';
import { DetailItemList } from './DetailItem/DetailItemList';
import { useResize } from '@/hooks/useResize';
import { DetailsSlider } from '@/feauters/sliders/DetailsSlider/DetailsSlider';

// TODO добавить на фон лого

export const Details: FC = () => {
	const { width } = useResize();

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<h5 className={styles.title}>Мы знаем, что важно: ТОП-качество в сжатые сроки.</h5>
				<p className={styles.text}>Прорабы знают, чем заканчивается экономия на утеплителе — грибок, ржавчина, жалобы от заказчиков. Мы <br /> хотим, чтобы вы к нам возвращались с новыми проектами! Поэтому делаем акцент на качестве сэндвич-панелей.</p>
				{width < 767 ? <DetailsSlider /> : <DetailItemList data={details} />}
			</div>
		</div>
	);
}