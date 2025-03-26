import React from 'react';
import styles from './style.module.scss';

const CalculatorPicture: React.FC = () => {
	return (
		<div className={styles.calculatorPicture}>
			<div className={styles.calcPictureContainer}>
				<div className={styles.calcBasePic}>
					<div className={styles.house1Container}>
						<div className={styles.housesTrava}></div>

						{/* <div className={`${styles.house2Stena3} ${styles.houseControlItem} ${styles.itemHouse2}`} style={{ display: 'none' }}>
							<svg width="187" height="178" viewBox="0 0 187 178" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path className={styles.houseStenaStart} d="M0.0454102 2.85596L183.502 52.1272V169.99L0.0454102 139V2.85596Z" fill="#E0E0E0" />
								<path className={styles.houseStenaStop} d="M183.316 52.1271L187 49.8247V176.5L183.316 177.881V52.1271Z" fill="#C4C4C4" />
								<path className={styles.houseStenaStop} d="M6.0318 1.935L187 49.8248L183.316 52.1272L0.045754 2.89792L6.0318 1.935Z" fill="#AAAAAA" />
							</svg>
						</div> */}

						{/* <div className={`${styles.house4Stena3} ${styles.houseControlItem} ${styles.itemHouse4}`} style={{ display: 'none' }}>
							<svg width="203" height="191" viewBox="0 0 203 191" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path className={styles.houseStenaStart} d="M0.0493164 3.10107L199.251 56.6011V189.93L0.0493164 140V3.10107Z" fill="#E0E0E0" />
								<path className={styles.houseStenaStop} d="M199 56.5L203 54V189.5L199 190.899V56.5Z" fill="#C4C4C4" />
								<path className={styles.houseStenaStop} d="M7.54926 2.10117L203 54L199 56.5001L1.04944 3.14673L7.54926 2.10117Z" fill="#AAAAAA" />
							</svg>
						</div> */}

						<div className={styles.house1Stena1}>
							<svg width="452" height="231" viewBox="0 0 452 231" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g mask="url(#house1-stena1-line)">
									<path d="M451.02 95.4354V4.98961L0.764709 135.241V229.739L451.02 95.4354Z" fill="url(#house1-stena1-item)" stroke="#AFAFAF" />
								</g>
								<defs>
									<linearGradient id="house1-stena1-item" x1="805.381" y1="103.24" x2="-114.779" y2="119.19" gradientUnits="userSpaceOnUse">
										<stop className={styles.houseStenaStartG} stopColor="#BABABA" />
										<stop className={styles.houseStenaStopG} offset="1" stopColor="#D1D1D1" />
									</linearGradient>
								</defs>
							</svg>
						</div>

						<div className={`${styles.house1Stena2} ${styles.houseControlItem} ${styles.itemHouse1}`}>
							<svg width="206" height="199" viewBox="0 0 206 199" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path className={styles.houseStenaStart} d="M0.79834 0.255127L205.135 103.76V198.725L0.79834 148.07V0.255127Z" fill="#E0E0E0" />
							</svg>
						</div>

						{/* <div className={`${styles.house3Stena2} ${styles.houseControlItem} ${styles.itemHouse3}`} style={{ display: 'none' }}>
							<svg width="206" height="181" viewBox="0 0 206 181" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path className={styles.houseStenaStart} d="M0.79834 7.49731L99 0.497314L205.135 57.4973V180.222L0.79834 129.567V7.49731Z" fill="#E0E0E0" />
							</svg>
						</div> */}

						<div className={styles.housesWindow1}></div>
						<div className={styles.housesWindow2}></div>

						<div className={`${styles.house1Krisha} ${styles.houseControlItem} ${styles.itemHouse1}`}>
							<svg width="682" height="217" viewBox="0 0 682 217" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path className={styles.houseKrishaLine} d="M2.47559 113.913V107.043L494.178 6.96216L681.286 78.3243V85.2865L227.876 216.697L2.47559 113.913Z" fill="#a5a29c" />
								<path d="M0.734863 107.043L494.178 0L681.286 78.3243L227.875 209.735L0.734863 107.043Z" fill="url(#house1-krisha-item)" />
								<defs>
									<linearGradient id="house1-krisha-item" x1="781.464" y1="-54.9466" x2="237.651" y2="376.215" gradientUnits="userSpaceOnUse">
										<stop className={styles.houseKrishaStart} offset="0.0076979" stopColor="#a5a29c" />
										<stop className={styles.houseKrishaStop} offset="1" stopColor="#d6d3ca" />
									</linearGradient>
								</defs>
							</svg>
						</div>

						{/* <div className={`${styles.house2Stena4} ${styles.houseControlItem} ${styles.itemHouse2}`} style={{ display: 'none' }}>
							<svg width="487" height="247" viewBox="0 0 487 247" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path className={styles.houseStenaStop} d="M0 104.5L473 0.000244141L487 64L1.5 246.5L0 104.5Z" fill="#AAAAAA" />
							</svg>
							<svg className={styles.left} width="491" height="247" viewBox="0 0 491 247" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path className={styles.houseStenaStart} d="M0 104.5L472 0.5L490.5 99L1.5 246.5L0 104.5Z" fill="#E0E0E0" />
							</svg>
						</div> */}

						{/* <div className={`${styles.house2Krisha} ${styles.houseControlItem} ${styles.itemHouse2}`} style={{ display: 'none' }}>
							<svg width="674" height="228" viewBox="0 0 674 228" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path className={styles.houseKrishaLine} d="M0 122V108.63L472.178 6.96216L673 89V98L218 228L0 122Z" fill="#a5a29c" />
								<path d="M1 104L472.178 0L673.5 89.5L217.5 220.5L1 104Z" fill="url(#house2-krisha-item)" />
								<defs>
									<linearGradient id="house2-krisha-item" x1="759.464" y1="-54.9466" x2="215.65" y2="376.214" gradientUnits="userSpaceOnUse">
										<stop className={styles.houseKrishaStart} offset="0.0076979" stopColor="#a5a29c" />
										<stop className={styles.houseKrishaStop} offset="1" stopColor="#d6d3ca" />
									</linearGradient>
								</defs>
							</svg>
						</div> */}

						{/* <div className={`${styles.house4Krisha} ${styles.houseControlItem} ${styles.itemHouse4}`} style={{ display: 'none' }}>
							<svg width="674" height="315" viewBox="0 0 674 315" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path className={styles.houseKrishaLine} d="M5 210.997L4.99987 201L221 155.724L665.879 143.497L665.879 150.497L211.5 275.997L96.0001 210.997L5 210.997Z" fill="#a5a29c" />
								<path d="M98 204.497L565 84.4971L664 143.497L211.5 269.997L98 204.497Z" fill="url(#paint0_linear)" />
								<path d="M5.50022 201.5L457 90L565.5 84.4971L99.0001 204.497L5.50022 201.5Z" fill="url(#paint1_linear)" />
								<defs>
									<linearGradient id="paint0_linear" x1="701.803" y1="-12.1789" x2="80.0453" y2="343.706" gradientUnits="userSpaceOnUse">
										<stop className={styles.houseKrishaStart} offset="0.0076979" stopColor="#a5a29c" />
										<stop className={styles.houseKrishaStop} offset="1" stopColor="#d6d3ca" />
									</linearGradient>
									<linearGradient id="paint1_linear" x1="174.43" y1="130.91" x2="-59.2362" y2="229.723" gradientUnits="userSpaceOnUse">
										<stop className={styles.houseKrishaStart} offset="0.0076979" stopColor="#a5a29c" />
										<stop className={styles.houseKrishaStop} offset="1" stopColor="#d6d3ca" />
									</linearGradient>
								</defs>
							</svg>
						</div> */}

						{/* <div className={`${styles.house2Stena2} ${styles.houseControlItem} ${styles.itemHouse2}`} style={{ display: 'none' }}>
							<svg width="204" height="211" viewBox="0 0 204 211" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path className={styles.houseStenaStart} d="M1 4L200.202 57.5V211L1 161.07V4Z" fill="#E0E0E0" />
								<path className={styles.houseStenaStop} d="M200 57.5L204 55V209.5L200 211V57.5Z" fill="#C4C4C4" />
								<path className={styles.houseStenaStop} d="M7.5 3L204 55.0001L200 57.5001L1.00019 4.04556L7.5 3Z" fill="#AAAAAA" />
							</svg>
						</div> */}

						{/* <div className={`${styles.house4Stena2} ${styles.houseControlItem} ${styles.itemHouse4}`} style={{ display: 'none' }}>
							<svg width="204" height="211" viewBox="0 0 204 211" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path className={styles.houseStenaStart} d="M0.0493164 3.10107L199.251 56.6011V210.101L0.0493164 160.171V3.10107Z" fill="#E0E0E0" />
								<path className={styles.houseStenaStop} d="M199.049 56.6011L203.049 54.1011V208.601L199.049 210.101V56.6011Z" fill="#C4C4C4" />
								<path className={styles.houseStenaStop} d="M6.54932 2.10107L203.05 54.1012L199.05 56.6012L0.0495045 3.14664L6.54932 2.10107Z" fill="#AAAAAA" />
							</svg>
						</div> */}

						{/* <div className={`${styles.house3Krisha} ${styles.houseControlItem} ${styles.itemHouse3}`} style={{ display: 'none' }}>
							<svg width="701" height="316" viewBox="0 0 701 316" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path className={styles.houseKrishaLine} d="M5.49981 210.497L5.49981 205.497L248 156.724L692.879 144.497L692.879 151.497L238.5 276.997L123 211.997L5.49981 210.497Z" fill="#a5a29c" />
								<path d="M125 205.497L592 85.4971L691 144.497L238.5 270.997L125 205.497Z" fill="url(#house3-krisha-line1)" />
								<path d="M4.99975 205.497L463 95.9974L592.5 85.4973L126 205.497L4.99975 205.497Z" fill="url(#house3-krisha-line2)" />
								<defs>
									<linearGradient id="house3-krisha-line1" x1="728.803" y1="-11.1789" x2="107.045" y2="344.706" gradientUnits="userSpaceOnUse">
										<stop className={styles.houseKrishaStart} offset="0.0076979" stopColor="#a5a29c" />
										<stop className={styles.houseKrishaStop} offset="1" stopColor="#d6d3ca" />
									</linearGradient>
									<linearGradient id="house3-krisha-line2" x1="201.43" y1="131.91" x2="-32.2362" y2="230.723" gradientUnits="userSpaceOnUse">
										<stop className={styles.houseKrishaStart} offset="0.0076979" stopColor="#a5a29c" />
										<stop className={styles.houseKrishaStop} offset="1" stopColor="#d6d3ca" />
									</linearGradient>
								</defs>
							</svg>
						</div> */}

						<div className={styles.housesDoor1}></div>
						<div className={styles.housesDoor2}></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CalculatorPicture;
