// components/faq/FAQList.tsx
import { FC, useState } from "react";
import { FAQItem, FAQItemProps } from "./FAQItem";
import styles from "./style.module.scss";

export interface FAQListProps {
	items: Omit<FAQItemProps, "isOpen" | "onToggle">[];
}

export const FAQItemList: FC<FAQListProps> = ({ items }) => {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	const handleToggle = (idx: number) => {
		setOpenIndex(prev => (prev === idx ? null : idx));
	};

	return (
		<div className={styles.list}>
			{items.map((item, idx) => (
				<FAQItem
					key={idx}
					question={item.question}
					answer={item.answer}
					isOpen={openIndex === idx}
					onToggle={() => handleToggle(idx)}
				/>
			))}
		</div>
	);
};
