import { ComponentCardList } from '@/components/ComponentCard/ComponentCardList';
import SEO from '@/components/SEO/SEO';
import { components } from '../../../constants/catalog';
import styles from "./style.module.scss";
import { ConsultationForm } from '@/feauters/forms/ConsultationForm/ConsultationForm';

const Page = () => {

	return (
		<>
			<SEO title="Комплектующие - BAYAR" description="Покупайте комплектующие по лучшим ценам" keywords="комплектующие купить, комплектующие для сэндвич-панелей купить, комплектующие для сэндвич панелей" />
			<div className={styles.main}>
				<div className={styles.container}>
					<h2 className={styles.title}>Комплектующие для сэндвич-панелей</h2>
					<ComponentCardList data={components} />
					<h2 className={styles.subtitle}>Заказать консультацию</h2>
					<ConsultationForm />
				</div>
			</div>
		</>
	);
};

export default Page;
