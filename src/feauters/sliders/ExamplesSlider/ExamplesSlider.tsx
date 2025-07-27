import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { examples } from '../../../constants/example';
import { Example } from './Example/Example';
import styles from './style.module.scss';

// смотри мне надо сделать вот такой вот слайдер я вприницпе все сделал только единственное половина карточки отображается слева а я хочу чтобы было справа и также надо добавить эти точки

export const ExamplesSlider = () => {
	const settings = {
		// dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2.5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		arrows: false,
		centerMode: true,
		centerPadding: '20vw',
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '20px',
				},
			},
			{
				breakpoint: 349,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '0px',
				},
			},
		],
	};

	return (
		<div className={styles.slick_slider}>
			<h3 className={styles.title}>Реализованные объекты</h3>
			<Slider {...settings} className={styles.container}>
				{examples.map((item) => (
					<Example key={item.id} data={item} />
				))}
			</Slider>
		</div>
	);
};
