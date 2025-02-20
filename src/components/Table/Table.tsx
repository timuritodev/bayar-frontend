import styles from "./style.module.scss";

export const Table = () => {
	return (
		<div className={styles.tableWrapper}>
			<h2 className={styles.title}>Профили</h2>
			<table className={styles.table}>
				<thead>
					<tr>
						<th colSpan={3} className={styles.header}>
							Кровельные сэндвич-панели
						</th>
					</tr>
					<tr>
						<th>Толщина</th>
						<th className={styles.noBorder}>Ширина</th>
						<th className={styles.noBorder}>Цена</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>100 мм</td>
						<td rowSpan={3} className={`${styles.noBorder} ${styles.centerText}`}>1000 см</td>
						<td rowSpan={3} className={`${styles.noBorder} ${styles.centerText}`}>
							Точную стоимость можно узнать у наших менеджеров по телефону <br />
							<strong>+79600000000</strong>
						</td>
					</tr>
					<tr>
						<td>150 мм</td>
					</tr>
					<tr>
						<td>200 мм</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
