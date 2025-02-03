import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { FirstScreen } from './FirstScreen/FirstScreen';
import { data } from './constants';
import styles from './style.module.scss';

export const MainSlider = ({ }) => {

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 4000,
	};

	return (
		<div className={styles.slick_slider}>
			<Slider {...settings} className={styles.container}>
				{data.map((item) => (
					<FirstScreen key={item.id} data={item} />
				))}
			</Slider>
		</div>
	);
};