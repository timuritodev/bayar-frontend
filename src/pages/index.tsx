import { MainSlider } from '@/components/MainSlider/MainSlider';
import { useAppDispatch } from "@/services/typeHooks";
import Head from 'next/head';
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
          <MainSlider />
        </div>
      </div>
    </>
  );
};

export default MainPage;
