import Image from "next/image";
import Link from 'next/link';
import { useRouter } from "next/router";
import { FC } from "react";
import { useResize } from "../../hooks/useResize";
import logo from "../../images/logo_s.svg";
import { useAppDispatch } from "../../services/typeHooks";
import styles from "./style.module.scss";

const Footer: FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { width } = useResize();

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.blocks}>
          <div className={styles.block}>
            <h5 className={styles.title}>Адрес</h5>
            <p className={styles.text}>Елабуга, промышленная площадка АЛАБУГА, ул.20, 1</p>
            {width > 767 && (
              <Image className={styles.footer__logo} alt="Логотип BAYAR" src={logo} />
            )}
          </div>
          {width < 767 ? (
            <div className={styles.block_add}>
              <div className={styles.block}>
                <h5 className={styles.title}>Навигация</h5>
                <Link href="/main" className={styles.text}>
                  Главная
                </Link>
                <Link href="/catalog" className={styles.text}>
                  Каталог
                </Link>
                <Link href="/about" className={styles.text}>
                  О нас
                </Link>
                <Link href="/contacts" className={styles.text}>
                  Контакты
                </Link>
                <Link href="/profile" className={styles.text}>
                  Профиль
                </Link>
              </div>
              <div className={styles.block}>
                <h5 className={styles.title}>Контакты</h5>
                <p className={styles.text}>По вопросам:</p>
                <p className={styles.text}>+7 800 550-31-90</p>
                <p className={styles.text}>info@tatbayar.ru</p>
              </div>
            </div>
          ) : (
            <>
              <div className={styles.block}>
                <h5 className={styles.title}>Навигация</h5>
                <Link href="/main" className={styles.text}>
                  Главная
                </Link>
                <Link href="/catalog" className={styles.text}>
                  Каталог
                </Link>
                <Link href="/about" className={styles.text}>
                  О нас
                </Link>
                <Link href="/contacts" className={styles.text}>
                  Контакты
                </Link>
                <Link href="/profile" className={styles.text}>
                  Профиль
                </Link>
              </div>
              <div className={styles.block}>
                <h5 className={styles.title}>Контакты</h5>
                <p className={styles.text}>По вопросам:</p>
                <p className={styles.text}>+7 800 550-31-90</p>
                <p className={styles.text}>info@tatbayar.ru</p>
              </div>
            </>
          )}
        </div>
        {width < 767 && (
          <Image className={styles.footer__logo} alt="Логотип BAYAR" src={logo} />
        )}
        <p className={styles.copyright}>@{currentYear} Bayar Все права защищены</p>
      </div>
    </footer>
  );
};

export default Footer;

