import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { useResize } from "../../hooks/useResize";
import logo from "../../images/logo.png";
import { useAppDispatch } from "../../services/typeHooks";
import styles from "./style.module.scss";

const Footer: FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { width } = useResize();

  return (
    <footer className={`${styles.footer} ${router.pathname === "/" ? styles.footer_dark : ""}`}>
      <div className={styles.footer__container}>
        <div className={styles.footer__blocks}>
          <div className={styles.subsribe__block}>
            <h2 className={styles.subscribe__title}>Подпишитесь на нас,</h2>
            <p className={styles.subscribe__text}>
              Чтобы узнавать о новинках и скидках
            </p>
          </div>
          <div className={styles.faq__block}>
            <h2 className={styles.faq__title}>FAQ</h2>
            <Link href="/delivery" className={styles.faq__link}>
              О доставке
            </Link>
            <Link href="/payment" className={styles.faq__link}>
              Об оплате
            </Link>
            {/* <Link href="/bonus" className={styles.faq__link}>
              Бонусная программа
            </Link> */}
            <Link href="/about" className={styles.faq__link}>
              О компании
            </Link>
          </div>
          <div className={styles.contacts__block}>
            <h2 className={styles.contacts__title}>Контакты</h2>
            <p className={styles.contacts__text}>По всем вопросам:</p>
            {/*<p className={styles.contacts__number}>+7911 910-33-29</p>
            <p className={styles.contacts__text}>Интернет-магазин</p>
            <p className={styles.contacts__number}>+921 912-00-95</p> */}
            <p className={styles.contacts__number}>+7 960 061-33-30</p>
            {width < 767 && (
              <h2 className={styles.footer__email}>coffee@beancode.ru</h2>
            )}
          </div>
        </div>
        <div className={styles.logo__block}>
          <Image className={styles.footer__logo} src={logo} alt="Логотип подвала" width={208} height={30} />
          {width > 767 && <h2 className={styles.footer__email}>coffee@beancode.ru</h2>}
        </div>
        <div className={styles.copyright__block}>
          <p className={styles.copyright__text}>© 2023. BEANCODE Все права защищены</p>
          {/* <p className={styles.copyright__text}>Дизайн - Гюзель Саберова</p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

