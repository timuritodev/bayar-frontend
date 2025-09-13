import { FC } from "react";
import Image from 'next/image';
import styles from "./style.module.scss";

export interface IIconButton {
	icon: string;
	href?: string;
	onClick?: () => void;
	size?: 'small' | 'medium' | 'large';
	buttonText?: string;
	className?: string;
	alt?: string;
	target?: '_blank' | '_self';
}

export const IconButton: FC<IIconButton> = ({
	icon,
	href,
	onClick,
	size = 'medium',
	buttonText,
	className,
	alt = 'Icon',
	target = '_self',
}) => {
	const handleClick = () => {
		if (onClick) {
			onClick();
		} else if (href) {
			if (target === '_blank') {
				window.open(href, '_blank');
			} else {
				window.location.href = href;
			}
		}
	};

	const getIconSize = () => {
		switch (size) {
			case 'medium':
				return 32;
			case 'small':
				return 24;
			default:
				return 32;
		}
	};

	return (
		<button
			className={`${styles.button} ${styles[size]} ${className ? className : ""}`}
			onClick={handleClick}
			type="button"
		>
			<div className={styles.iconContainer}>
				<Image
					src={icon}
					alt={alt}
					width={getIconSize()}
					height={getIconSize()}
					className={styles.icon}
				/>
			</div>
			{buttonText && <span className={styles.buttonText}>{buttonText}</span>}
		</button>
	);
};
