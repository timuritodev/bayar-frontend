import SEO from '@/components/SEO/SEO';
import { Details } from '@/feauters/main-block/Details/Details';
import { Features } from '@/feauters/main-block/Features/Features';
import { Gifts } from '@/feauters/main-block/Gifts/Gifts';
import { MainWrapper } from '@/feauters/main-block/MainWrapper/MainWrapper';
import { ExamplesSlider } from '@/feauters/sliders/ExamplesSlider/ExamplesSlider';
import { useAppDispatch } from "@/services/typeHooks";
import styles from "./index.module.scss";

const MainPage = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <SEO title="Сэндвич-панели - BAYAR" description="Завод изготовитель сэндвич-панелей по лучшим ценам в РФ" keywords="сэндвич-панели, сэндвич панели купить, панели для строительства, строительные материалы, утепленные панели, Челны, Россия" />

      <div className={styles.main}>
        <div className={styles.container}>
          <MainWrapper />
          <Features />
          <Details />
          <ExamplesSlider />
          <Gifts />
          {/*<Compound />
          <FAQAccordion items={faqItems} />
          <ContactsBlock /> */}
          {/* <MainSlider />
          <h3 className={styles.title}>Наши партнёры</h3>
          <PartnersSlider />
          <h3 className={styles.title} style={{ backgroundColor: '#f4f6ff' }}>Примеры реализованных объектов</h3>
          <ExampleList data={examples} />
          <h3 className={styles.title}>Месторасположение</h3>
          <Map /> */}
        </div>
      </div>
    </>
  );
};

export default MainPage;