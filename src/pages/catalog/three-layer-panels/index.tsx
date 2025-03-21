import { BenefitsList } from '@/components/Benefits/BenefitsList';
import { CatalogIntro } from '@/components/CatalogIntro/CatalogIntro';
import { ConsultationForm } from '@/components/ConsultationForm/ConsultationForm';
import { UniCardsList } from '@/components/UniCard/UniCardList';
import { useRef } from 'react';
import pic from '../../../images/catalog/three_layer.jpg';
import { benefits, panels } from '../constants';
import styles from "./style.module.scss";

const Page = () => {
	const formRef = useRef<HTMLDivElement | null>(null);

	const scrollToForm = () => {
		formRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<>
			<SEO title=" - BAYAR" description="" keywords="" />

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
						onButtonClick={scrollToForm}
					/>
					<h2 className={styles.subtitle}>Преимущества сэндвич-панелей</h2>
					<BenefitsList data={benefits} />
					<h2 className={styles.subtitle}>Виды сэндвич-панелей</h2>
					<UniCardsList data={panels} />
					<h2 className={styles.subtitle}>Заказать консультацию</h2>
					<div ref={formRef}>
						<ConsultationForm />
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
