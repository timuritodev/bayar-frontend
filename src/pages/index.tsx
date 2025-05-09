import { MainSlider } from '@/components/MainSlider/MainSlider';
import { PartnersSlider } from '@/components/PartnersSlider/PartnersSlider';
import SEO from '@/components/SEO/SEO';
import { useAppDispatch } from "@/services/typeHooks";
import styles from "./index.module.scss";

const MainPage = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <SEO title="Сэндвич-панели - BAYAR" description="Завод изготовитель сэндвич-панелей по лучшим ценам в РФ" keywords="сэндвич-панели, сэндвич панели купить, панели для строительства, строительные материалы, утепленные панели, Челны, Россия" />

      <div className={styles.main}>
        <div className={styles.container}>
          <MainSlider />
          <PartnersSlider />
        </div>
      </div>
    </>
  );
};

export default MainPage;