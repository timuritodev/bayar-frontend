import SEO from '@/components/SEO/SEO';
import styles from "./style.module.scss";

const Page = () => {
	return (
		<>
			<SEO title="О компании - BAYAR" description="Завод изготовитель сэндвич-панелей по лучшим ценам в РФ" keywords="сэндвич-панели, сэндвич панели купить, панели для строительства, строительные материалы, утепленные панели" />

			<div className={styles.about}>
				<div className={styles.container}>
					<h1 className={styles.title}>О компании</h1>
					<p className={styles.text}>
						Наименование организации - Общество с ограниченной ответственностью «Баяр»
					</p>
					<p className={styles.text}>
						Юридический адрес - 422629, Россия, Республика Татарстан, Лаишевский район, с.п.Орловское, д.Орёл, ул.Мира, д. 15
					</p>
					<p className={styles.text}>
						Фактический адрес - Россия, РТ, муниципальное образование Елабуга, промышленная площадка АЛАБУГА, ул.20, 1
					</p>
					<p className={styles.text}>ИНН - 1684022989</p>
					<p className={styles.text}>Телефон - +78005503190; +79272499942</p>
					<p className={styles.text}>Почта - info@tatbayar.ru</p>
				</div>
			</div>
		</>
	);
};

export default Page;