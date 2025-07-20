import { FC } from "react";
import styles from "./style.module.scss";
import Image, { StaticImageData } from "next/image";
import { useHighlightParser } from '@/hooks/useHighlightParser';
import pic from "../../../images/main_wrapper/compound.png";

export const Compound: FC = () => (
	<div className={styles.container}>
		<h2 className={styles.title}>Из чего состоит сэндвич-панель Sandwel™<br /> производства “Баяр”</h2>
		<Image
			src={pic}
			alt="Изображение с составом сэндвич-панели"
			className={styles.img}
			width={1129}
			height={520}
		/>
	</div>
);
