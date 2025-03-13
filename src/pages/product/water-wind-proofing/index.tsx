
import Image from "next/image";
import waterproof from '../../../images/catalog/waterproofing.png';
import { useAppDispatch, useAppSelector } from "../../../services/typeHooks";
import styles from "./style.module.scss";

const Page = () => {
	const dispatch = useAppDispatch();
	const product = useAppSelector((state) => state.water_accessory.product);
	console.log(product, 'products');


	return (
		<>
			<div className={styles.product}>
				<div className={styles.container}>
					<div className={styles.block}>
						<Image className={styles.img} alt={product.title} src={waterproof} width={557} height={532} />
						{/*TODO добавить сюда кнопку для заказать +- */}
					</div>
					<div className={styles.block}>
						<h1 className={styles.title}>{product.title}</h1>
						<h3 className={styles.subtitle}>Описание</h3>
						<p className={styles.description}>{product.description}</p>
						<h3 className={styles.subtitle}>Характеристики</h3>
						<ul className={styles.characteristics}>
							{product.characteristics?.map((char, index) => (
								<li key={index} className={styles.characteristic}>
									<span className={styles.charName}>{char.name}:</span>
									<span className={styles.charValue}>{char.value}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
