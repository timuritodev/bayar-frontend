import { useState } from 'react';
import styles from "./style.module.scss";

export default function CalculatorPicture() {
	// состояния для переключения вида крыши, парапета и т.п.
	// для примера: houseType = 'house1' (односкатная), 'house2' (двускатная) и т.д.
	const [houseType, setHouseType] = useState('house1');
	const [withParapet, setWithParapet] = useState(false);

	return (
		<div className={styles.calculator_picture}>
			<div className={styles.controls}>
				{/* Пример управления */}
				<label>
					Тип здания:
					<select value={houseType} onChange={(e) => setHouseType(e.target.value)}>
						<option value="house1">Односкатная</option>
						<option value="house2">Двускатная</option>
						<option value="house3">Вариант 3</option>
						<option value="house4">Вариант 4</option>
					</select>
				</label>

				<label>
					Парапет:
					<input
						type="checkbox"
						checked={withParapet}
						onChange={() => setWithParapet(!withParapet)}
					/>
					{withParapet ? 'С парапетом' : 'Без парапета'}
				</label>
			</div>

			<div className={styles.calc_picture_container}>
				<div className={styles.calc_base_pic}>
					<div className={styles.house1_container}>
						{/* Земля/трава, просто пример */}
						<div className={styles.houses_trava}></div>

						{/* house2-stena3 (показывается, если выбрали house2 + что-то) */}
						<div
							className={
								'house2-stena3 house-control-item item-house2' +
								(houseType === 'house2' ? '' : ' hidden')
							}
						>
							<svg
								width="187"
								height="178"
								viewBox="0 0 187 178"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									className={styles.houseStenaStart}
									d="M0.0454102 2.85596L183.502 52.1272V169.99L0.0454102 139V2.85596Z"
									fill="#E0E0E0"
								></path>
								<path
									className={styles.houseStenaStop}
									d="M183.316 52.1271L187 49.8247V176.5L183.316 177.881V52.1271Z"
									fill="#C4C4C4"
								></path>
								<path
									className={styles.houseStenaStop}
									d="M6.0318 1.935L187 49.8248L183.316 52.1272L0.045754 2.89792L6.0318 1.935Z"
									fill="#AAAAAA"
								></path>
							</svg>
						</div>

						{/* house4-stena3 */}
						<div
							className={
								`${styles.house4_stena3} ${styles.house_control_item} ${styles.item_house4}`
							}
						>
							<svg
								width="203"
								height="191"
								viewBox="0 0 203 191"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									className={styles.houseStenaStart}
									d="M0.0493164 3.10107L199.251 56.6011V189.93L0.0493164 140V3.10107Z"
									fill="#E0E0E0"
								></path>
								<path
									className={styles.houseStenaStop}
									d="M199 56.5L203 54V189.5L199 190.899V56.5Z"
									fill="#C4C4C4"
								></path>
								<path
									className={styles.houseStenaStop}
									d="M7.54926 2.10117L203 54L199 56.5001L1.04944 3.14673L7.54926 2.10117Z"
									fill="#AAAAAA"
								></path>
							</svg>
						</div>

						{/* house1-stena1 (примерно под односкатную) */}
						<div className={styles.house1_stena1}>
							<svg
								width="452"
								height="231"
								viewBox="0 0 452 231"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g mask="url(#house1-stena1-line)">
									<path
										d="M451.02 95.4354V4.98961L0.764709 135.241V229.739L451.02 95.4354Z"
										fill="url(#house1-stena1-item)"
										stroke="#AFAFAF"
									></path>
								</g>
								<defs>
									<linearGradient
										id="house1-stena1-item"
										x1="805.381"
										y1="103.24"
										x2="-114.779"
										y2="119.19"
										gradientUnits="userSpaceOnUse"
									>
										<stop className={styles.houseStenaStartG} stopColor="#BABABA"></stop>
										<stop
											className={styles.houseStenaStopG}
											offset="1"
											stopColor="#D1D1D1"
										></stop>
									</linearGradient>
								</defs>
							</svg>
						</div>

						{/* house1-stena2 - показываем, если выбрали house1 */}
						<div
							className={
								'house1-stena2 house-control-item item-house1' +
								(houseType === 'house1' ? '' : ' hidden')
							}
						>
							<svg
								width="206"
								height="199"
								viewBox="0 0 206 199"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									className={styles.houseStenaStart}
									d="M0.79834 0.255127L205.135 103.76V198.725L0.79834 148.07V0.255127Z"
									fill="#E0E0E0"
								></path>
							</svg>
						</div>

						{/* ...и так далее для всех стена/крыша, как в исходном HTML... */}

						{/* house1-krisha (односкатная) */}
						<div
							className={
								'house1-krisha house-control-item item-house1' +
								(houseType === 'house1' ? '' : ' hidden')
							}
						>
							<svg
								width="682"
								height="217"
								viewBox="0 0 682 217"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									className={styles.houseKrishaLine}
									d="M2.47559 113.913V107.043L494.178 6.96216L681.286 78.3243V85.2865L227.876 216.697L2.47559 113.913Z"
									fill="#044246"
								></path>
								<path
									d="M0.734863 107.043L494.178 0L681.286 78.3243L227.875 209.735L0.734863 107.043Z"
									fill="url(#house1-krisha-item)"
								></path>
								<defs>
									<linearGradient
										id="house1-krisha-item"
										x1="781.464"
										y1="-54.9466"
										x2="237.651"
										y2="376.215"
										gradientUnits="userSpaceOnUse"
									>
										<stop
											className={styles.houseKrishaStart}
											offset="0.0076979"
											stopColor="#044246"
										></stop>
										<stop
											className={styles.houseKrishaStop}
											offset="1"
											stopColor="#067077"
										></stop>
									</linearGradient>
								</defs>
							</svg>
						</div>

						{/* house2-krisha (двускатная) */}
						<div
							className={
								'house2-krisha house-control-item item-house2' +
								(houseType === 'house2' ? '' : ' hidden')
							}
						>
							<svg
								width="674"
								height="228"
								viewBox="0 0 674 228"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									className={styles.houseKrishaLine}
									d="M0 122V108.63L472.178 6.96216L673 89V98L218 228L0 122Z"
									fill="#044246"
								></path>
								<path
									d="M1 104L472.178 0L673.5 89.5L217.5 220.5L1 104Z"
									fill="url(#house2-krisha-item)"
								></path>
								<defs>
									<linearGradient
										id="house2-krisha-item"
										x1="759.464"
										y1="-54.9466"
										x2="215.65"
										y2="376.214"
										gradientUnits="userSpaceOnUse"
									>
										<stop
											className={styles.houseKrishaStart}
											offset="0.0076979"
											stopColor="#044246"
										></stop>
										<stop
											className={styles.houseKrishaStop}
											offset="1"
											stopColor="#067077"
										></stop>
									</linearGradient>
								</defs>
							</svg>
						</div>

						{/* ... и т.д. для house3-krisha, house4-krisha, парапеты и т.п. ... */}

						{/* Пример окон / дверей */}
						<div className={styles.houses_window_1}></div>
						<div className={styles.houses_window_2}></div>
						<div className={styles.active_house1}></div>
						<div className={styles.active_house1}></div>
					</div>
				</div>
			</div>
		</div>
	);
}
