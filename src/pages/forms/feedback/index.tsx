import SEO from '@/components/SEO/SEO';
import styles from "./style.module.scss";
import { FeedbackForm } from '@/feauters/forms/FeedbackForm/FeedbackForm';

const Page = () => {
	return (
		<>
			<SEO title="Контакты - BAYAR" description="Завод изготовитель сэндвич-панелей по лучшим ценам в РФ" keywords="сэндвич-панели, сэндвич панели купить, панели для строительства, строительные материалы, утепленные панели" />

			<div className={styles.page}>
				<div className={styles.container}>
					<FeedbackForm />
				</div>
			</div>
		</>
	);
};

export default Page;