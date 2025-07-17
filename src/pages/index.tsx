import { ExampleList } from '@/components/Examples/ExampleList';
import { MainWrapper } from '@/components/MainWrapper/MainWrapper';
import { Map } from '@/components/Map/Map';
import { PartnersSlider } from '@/components/PartnersSlider/PartnersSlider';
import SEO from '@/components/SEO/SEO';
import { examples } from '@/constants/example';
import { useAppDispatch } from "@/services/typeHooks";
import styles from "./index.module.scss";
import { Features } from '@/components/Features/Features';
import { Details } from '@/components/Details/Details';
import { ExamplesSlider } from '@/components/ExamplesSlider/ExamplesSlider';
import { Gifts } from '@/components/Gifts/Gifts';
import { Compound } from '@/components/Compound/Compound';

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
          <Compound />
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