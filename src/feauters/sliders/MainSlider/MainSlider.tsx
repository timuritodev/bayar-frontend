import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import prev from "../../images/arrow_left.svg";
import next from "../../images/arrow_right.svg";

import { FirstScreen } from './FirstScreen/FirstScreen';
import { data } from './constants';
import styles from './style.module.scss';

const NextArrow = (props: { onClick?: () => void }) => {
	return (
		<div className={styles.nextArrow} onClick={props.onClick}>
			<Image src={next} className={styles.arrow} alt="Next" width={40} height={40} />
		</div>
	);
};

const PrevArrow = (props: { onClick?: () => void }) => {
	return (
		<div className={styles.prevArrow} onClick={props.onClick}>
			<Image src={prev} className={styles.arrow} alt="Prev" width={40} height={40} />
		</div>
	);
};


export const MainSlider = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
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
