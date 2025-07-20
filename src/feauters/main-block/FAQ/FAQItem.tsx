// components/faq/FAQItem.tsx
import { FC } from "react";
import cn from "classnames";
import styles from "./style.module.scss";

export interface FAQItemProps {
	question: string;
	answer: string;
	isOpen: boolean;
	onToggle: () => void;
}

export const FAQItem: FC<FAQItemProps> = ({
	question,
	answer,
	isOpen,
	onToggle,
}) => {
	return (
		<div className={styles.item}>
			<button
				type="button"
				className={styles.question}
				onClick={onToggle}
				aria-expanded={isOpen}
			>
				{question}
				<span
					className={cn(styles.icon, {
						[styles.open]: isOpen,
					})}
				/>
			</button>
			{isOpen && (
				<div>
					{answer.split("\n").map((line, i) => (
						<p className={styles.answer} key={i}>{line}</p>
					))}
				</div>
			)}
		</div>
	);
};
