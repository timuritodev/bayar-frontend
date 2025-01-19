import { useAppDispatch } from "@/services/typeHooks";
import Head from 'next/head';
import Image from "next/image";
import Countdown from "react-countdown";
import logo from '../images/logo_2.png';
import styles from "./index.module.scss";

const MainPage = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <Head>
        <title>Сэндвич панели - BAYAR</title>
        <meta name="description" content="Кофе в зернах с бесплатной доставкой до двери" />
        <meta name="keywords" content="кофе челны, кофе купить набережные челны, кофе купить челны, кофе в зернах, кофе на заказ, кофе доставка, кофе в Набережных Челнах" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://beancode.ru" />
        <meta property="og:title" content="Кофе в зернах с бесплатной доставкой" />
        <meta property="og:description"
          content="В Набережных Челнах открылось производство кофейного зерна. Прямые поставки сырья из Бразилии, Колумбии, Африки, Азии. Голландская линия обжарки. Международные стандарты качества" />
        <meta property="og:image" content="https://beancode.ru/api/images/open_graph.jpeg" />
      </Head>
      <div className={styles.main}>
        <div className={styles.container}>
          {/* <h1 className={styles.title}>BAYAR</h1> */}
          <Image className={styles.img} src={logo} alt="Логотип" width={600} height={300} />
          <p className={styles.subtitle}>До открытия сайта производителя сэндвич панелей осталось:</p>
          <Countdown date="2025-02-02" className={styles.timer} />
          <p className={styles.subtitle_2}>По всем вопросам обращайтесь по номеру: +7 800 550-31-90</p>
          <p className={styles.subtitle_2}>info@tatbayar.ru</p>
        </div>
      </div>
    </>
  );
};

export default MainPage;
