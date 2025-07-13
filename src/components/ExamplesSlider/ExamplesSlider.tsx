import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { examples } from '../../constants/example';
import { Example } from './Example/Example';
import styles from './style.module.scss';

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
			<Slider {...settings} className={styles.container}>
				{examples.map((item) => (
					<Example key={item.id} data={item} />
				))}
			</Slider>
		</div>
	);
};
