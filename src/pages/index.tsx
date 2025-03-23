import SEO from '@/components/SEO/SEO';
import { useAppDispatch } from "@/services/typeHooks";
import Image from "next/image";
import Countdown from 'react-countdown';
import logo from '../images/logo_main.png';
import styles from "./index.module.scss";

const MainPage = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <SEO title="Сэндвич-панели - BAYAR" description="Завод изготовитель сэндвич-панелей по лучшим ценам в РФ" keywords="сэндвич-панели, сэндвич панели купить, панели для строительства, строительные материалы, утепленные панели, Челны, Россия" />

      <div className={styles.main}>
        <div className={styles.container}>
          {/* <MainSlider /> */}
          <Image className={styles.img} src={logo} alt="Логотип" width={600} height={300} />
          <p className={styles.subtitle}>До открытия сайта производителя сэндвич панелей осталось:</p>
          <Countdown date="2025-04-18" className={styles.timer} />
          <p className={styles.subtitle_2}>По всем вопросам обращайтесь по номеру: +7 800 550-31-90</p>
          <p className={styles.subtitle_2}>info@tatbayar.ru</p>
        </div>
      </div>
    </>
  );
};

export default MainPage;
