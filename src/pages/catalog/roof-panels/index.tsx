import { BenefitsList } from '@/components/Benefits/BenefitsList';
import { CatalogIntro } from '@/components/CatalogIntro/CatalogIntro';
import { ConsultationForm } from '@/components/ConsultationForm/ConsultationForm';
import { RalColorSlider } from '@/components/RalColorSlider/RalColorSlider';
import { RoofTable } from '@/components/Table/RoofTable';
import { UniCardsList } from '@/components/UniCard/UniCardList';
import { useResize } from '@/hooks/useResize';
import { useRef } from 'react';
import pic from '../../../images/catalog/roof.jpg';
import { benefits, roof } from '../constants';
import styles from "./style.module.scss";

const Page = () => {
	const formRef = useRef<HTMLDivElement | null>(null);
	const { width } = useResize();

	const scrollToForm = () => {
		formRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<>
			<div className={styles.page}>
				<div className={styles.container}>
					<CatalogIntro
						title="Кровельные сэндвич-панели"
						subtitle={`Кровельные сэндвич-панели обладают высокой устойчивостью к воздействию атмосферных условий, коррозии и механическим повреждениям. Они легко монтируются, что сокращает время строительства. Такие панели могут быть выполнены в различных цветах и текстурах, что позволяет им гармонично вписываться в архитектурный стиль здания.`}
						buttonText="Консультация"
						img={pic}
						onButtonClick={scrollToForm}
					/>
					<h2 className={styles.subtitle}>Преимущества сэндвич-панелей</h2>
					<BenefitsList data={benefits} />
					<h2 className={styles.subtitle}>Возможные сердечники для сэндвич-панелей</h2>
					<UniCardsList data={roof} />
					<h2 className={styles.subtitle}>Цветовое решение</h2>
					<RalColorSlider />
					{width > 767 &&
						<>
							<h2 className={styles.subtitle}>Профили</h2>
							<RoofTable />
						</>
					}
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
