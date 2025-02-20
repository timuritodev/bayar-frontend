import styles from "./style.module.scss";

export const RoofTable = () => {
	return (
		<table className={styles.table}>
			<thead>
				<tr>
					<th colSpan={3} className={styles.header}>
						Кровельные сэндвич-панели
					</th>
				</tr>
				<tr>
					<th className={styles.th}>Толщина</th>
					<th className={styles.th}>Ширина</th>
					<th className={styles.th}>Цена</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td className={styles.td}>100 мм</td>
					<td rowSpan={3} className={`${styles.td}`}>1000 см</td>
					<td rowSpan={3} className={`${styles.td} ${styles.td_small_padding}`}>
						Точную стоимость можно<br />узнать у наших менеджеров<br />по телефону<br />
						<strong>+79600000000</strong>
					</td>
				</tr>
				<tr>
					<td className={styles.td}>150 мм</td>
				</tr>
				<tr>
					<td className={styles.td}>200 мм</td>
				</tr>
			</tbody>
		</table>
	);
};
