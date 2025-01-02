import Head from 'next/head';
import { useAppDispatch, useAppSelector } from "@/services/typeHooks";
import { useEffect } from "react";
import styles from "./index.module.scss";

const MainPage = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <Head>
        <title>Кофе в зернах - Beancode</title>
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
        <div className={styles.main__container}>
          <p className={styles.main__text}>тест</p>
        </div>
      </div>
    </>
  );
};

export default MainPage;
