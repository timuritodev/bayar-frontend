import { BenefitsList } from '@/components/Benefits/BenefitsList';
import Head from 'next/head';
import { data } from './constants';
import styles from "./style.module.scss";

const CatalogPage = () => {
	return (
		<>
			<Head>
				<title>Смена пароля - Beancode</title>
				<meta name="description" content="Измените свой пароль для безопасного доступа к вашей учетной записи Beancode." />
				<meta name="keywords" content="смена пароля, безопасность, учетная запись, Beancode" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://beancode.ru/change-password" />
				<meta property="og:title" content="Смена пароля - Beancode" />
				<meta property="og:description" content="Измените свой пароль для безопасного доступа к вашей учетной записи Beancode." />
				<meta property="og:image" content="https://beancode.ru/api/images/open_graph.jpeg" />
			</Head>
			<div className={styles.catalog}>
				<div className={styles.container}>
					<h3 className={styles.subtitle}>Преимущества сэндвич-панелей</h3>
					<BenefitsList data={data} />
				</div>
			</div>
		</>
	);
};

export default CatalogPage;
