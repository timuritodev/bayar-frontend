import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import styles from './style.module.scss';
import { details } from '@/constants/mock';
import { DetailItem } from '@/feauters/main-block/Details/DetailItem/DetailItem';

// смотри мне надо сделать вот такой вот слайдер я вприницпе все сделал только единственное половина карточки отображается слева а я хочу чтобы было справа и также надо добавить эти точки

export const DetailsSlider = () => {
	const settings = {
		// dots: true,
		infinite: true,
		speed: 500,
		centerMode: true,
		centerPadding: '40px',
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		arrows: false,
		responsive: [
			{
				breakpoint: 349,
				settings: {
					dots: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '20px',
				},
			},
		],
	};

	return (
		<div className={styles.slick_slider}>
			<Slider {...settings} className={styles.container}>
				{details.map((item) => (
					<DetailItem key={item.id} data={item} />
				))}
			</Slider>
		</div>
	);
};
