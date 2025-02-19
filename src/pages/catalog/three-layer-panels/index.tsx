import { BenefitsList } from '@/components/Benefits/BenefitsList';
import { CatalogIntro } from '@/components/CatalogIntro/CatalogIntro';
import { ConsultationForm } from '@/components/ConsultationForm/ConsultationForm';
import pic from '../../../images/catalog/three_layer.jpg';
import { data } from '../constants';
import styles from "./style.module.scss";

const Page = () => {
	return (
		<>
			<div className={styles.page}>
				<div className={styles.container}>
					<CatalogIntro
						title="Трёхслойные сэндвич-панели"
						subtitle={`Трёхслойные сэндвич-панели — это строительный материал, 
							состоящий из двух металлических листов, между которыми находится 
							прослойка из теплоизоляционного материала.\n
							Такие панели обладают высокой прочностью, хорошими теплоизоляционными 
							свойствами и лёгкостью, что делает их идеальными для строительства 
							стен, крыш и перегородок в промышленных и гражданских зданиях.`}
						buttonText="Консультация"
						img={pic}
					/>
					<h2 className={styles.subtitle}>Преимущества сэндвич-панелей</h2>
					<BenefitsList data={data} />
					<ConsultationForm />
				</div>
			</div>
		</>
	);
};

export default Page;
