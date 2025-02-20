import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import styles from "./style.module.scss";

interface CatalogIntroProps {
	title: string;
	subtitle: string;
	buttonText: string;
	img: StaticImageData;
	onButtonClick?: () => void;
}

export const CatalogIntro: FC<CatalogIntroProps> = ({
	title,
	subtitle,
	buttonText,
	img,
	onButtonClick,
}) => {
	return (
		<div className={styles.container}>
			<div className={styles.imgWrapper}>
				<Image
					src={img}
					alt="background"
					fill
					priority
					className={styles.img}
					style={{ objectFit: "cover" }}
				/>
			</div>
			<h1 className={styles.title}>{title}</h1>
			<p className={styles.subtitle}>{subtitle}</p>
			<button className={styles.button} onClick={onButtonClick}>{buttonText}</button>
		</div>
	);
};
