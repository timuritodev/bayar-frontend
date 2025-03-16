import { MainSlider } from '@/components/MainSlider/MainSlider';
import { useAppDispatch } from "@/services/typeHooks";
import Head from 'next/head';
import styles from "./index.module.scss";

const MainPage = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <Head>
        <title>Сэндвич панели - BAYAR</title>
        <meta name="description" content="Сайт производителя сэндвич панелей" />
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
          <MainSlider />
        </div>
      </div>
    </>
  );
};

export default MainPage;
