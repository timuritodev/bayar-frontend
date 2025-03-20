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
        <title>Сэндвич-панели - BAYAR</title>
        <meta name="description" content="Сэндвич-панели по лучшим ценам в РФ" />
        <meta name="keywords" content="сэндвич-панели, сэндвич панели купить, панели для строительства, строительные материалы, утепленные панели, Челны, Россия" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />

        <link rel="canonical" href="https://tatbayar.ru" />

        <meta property="og:site_name" content="BAYAR" />
        <meta property="og:locale" content="ru" />
        <meta property="og:title" content="Сэндвич-панели - BAYAR" />
        <meta property="og:description" content="Сэндвич-панели по лучшим ценам в РФ" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tatbayar.ru" />
        <meta property="og:image" content="https://tatbayar.ru/api/images/open_graph.jpeg" />
        <meta property="og:image:alt" content="Сэндвич-панели" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1100" />
        <meta property="og:image:height" content="600" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tiwithblood" />
        <meta name="twitter:creator" content="@tiwithblood" />
        <meta name="twitter:title" content="Сэндвич-панели - BAYAR" />
        <meta name="twitter:description" content="Сэндвич-панели по лучшим ценам в РФ" />
        <meta name="twitter:image" content="https://tatbayar.ru/api/images/open_graph.jpeg" />
      </Head>
      <div className={styles.main}>
        <div className={styles.container}>
          {/* <h1 className={styles.title}>BAYAR</h1> */}
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
