import { ComponentCardList } from '@/components/ComponentCard/ComponentCardList';
import { ConsultationForm } from '@/components/ConsultationForm/ConsultationForm';
import { accessories } from '../constants';
import styles from "./style.module.scss";

const Page = () => { // надо все переименовать с accessories на components

	return (
		<>
			<div className={styles.main}>
				<div className={styles.container}>
					<h2 className={styles.title}>Комплектующие для сэндвич-панелей</h2>
					<ComponentCardList data={accessories} />
					<h2 className={styles.subtitle}>Заказать консультацию</h2>
					<ConsultationForm />
				</div>
			</div>
		</>
	);
};

export default Page;
