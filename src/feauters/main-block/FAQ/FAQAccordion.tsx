// components/faq/FAQAccordion.tsx
import { FC } from "react";
import { FAQItemList } from "./FAQItemList";
import styles from "./style.module.scss";
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { useRouter } from "next/router";

export interface FAQData {
	question: string;
	answer: string;
}

export interface FAQAccordionProps {
	title?: string;
	items: FAQData[];
}

export const FAQAccordion: FC<FAQAccordionProps> = ({
	title = "Ответы на самые частые вопросы",
	items,
}) => {
	const router = useRouter();

	return (
		<section className={styles.accordion}>
			<div className={styles.container}>
				<h2 className={styles.title}>{title}</h2>
				<FAQItemList items={items} />
				<CustomButton buttonText={"Задайте нам свой вопрос"}
					handleButtonClick={() => router.push('/forms/feedback')}
					type="submit"
					className={styles.cta}
				/>
			</div>
		</section>
	);
};
