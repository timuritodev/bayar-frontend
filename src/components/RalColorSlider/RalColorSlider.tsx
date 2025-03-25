import { useResize } from '@/hooks/useResize';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import prev from "../../images/ral_arrow_left.svg";
import next from "../../images/ral_arrow_right.svg";
import { RalColor } from './RalColor/RalColor';
import { ral_colors } from './constants';
import styles from './style.module.scss';

const NextArrow = (props: { onClick?: () => void }) => {
	return (
		<div className={styles.nextArrow} onClick={props.onClick}>
			<Image className={styles.arrow} src={next} alt="next_arrow" width={40} height={60} />
		</div>
	);
};

const PrevArrow = (props: { onClick?: () => void }) => {
	return (
		<div className={styles.prevArrow} onClick={props.onClick}>
			<Image className={styles.arrow} src={prev} alt="prev_arrow" width={40} height={60} />
		</div>
	);
};

export const RalColorSlider = () => {
	const { width } = useResize();

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: width < 767 ? 2 : 7,
		slidesToScroll: width < 767 ? 1 : 3,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};

	return (
		<div className={styles.slick_slider}>
			<Slider {...settings} className={styles.container}>
				{ral_colors.map((item) => (
					<RalColor key={item.id} data={item} />
				))}
			</Slider>
		</div>
	);
};
