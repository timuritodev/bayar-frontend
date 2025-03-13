import { ConsultationForm } from '@/components/ConsultationForm/ConsultationForm';
import { UniCardsList } from '@/components/UniCard/UniCardList';
import { accessories } from '../constants';
import styles from "./style.module.scss";

const Page = () => {

	return (
		<>
			<div className={styles.page}>
				<div className={styles.container}>
					<h2 className={styles.subtitle}>Преимущества сэндвич-панелей</h2>
					<UniCardsList data={accessories} />
					<h2 className={styles.subtitle}>Заказать консультацию</h2>
					<ConsultationForm />
				</div>
			</div>
		</>
	);
};

export default Page;
