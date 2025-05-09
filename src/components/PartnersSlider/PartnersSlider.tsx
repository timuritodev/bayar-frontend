import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { data } from './constants';
import { Partner } from './Partner/Partner';
import styles from './style.module.scss';

export const PartnersSlider = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 4000,
		arrows: false,
		responsive: [
			{
				breakpoint: 1320,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					// centerMode: true,
					// centerPadding: "35px",
				},
			},
		],
	};

	return (
		<div className={styles.slick_slider}>
			<h3 className={styles.title}>Наши партнёры</h3>
			<Slider {...settings} className={styles.container}>
				{data.map((item) => (
					<Partner key={item.id} data={item} />
				))}
			</Slider>
		</div>
	);
};
