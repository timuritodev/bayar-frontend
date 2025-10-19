import Image from "next/image";
import Link from 'next/link';
import { useRouter } from "next/router";
import { FC } from "react";
import { useResize } from "../../hooks/useResize";
import email from "../../images/email.svg";
import logo from "../../images/logo_s.svg";
import phone from "../../images/phone.svg";
import whatsapp from "../../images/icons/whatsapp.svg";
import vk from "../../images/icons/vk.svg";
import avito from "../../images/icons/avito.svg";
import { useAppDispatch } from "../../services/typeHooks";
import { Contacts } from '../Contacts/Contacts';
import styles from "./style.module.scss";
import { IconButton } from '../IconButton/IconButton';

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
                <Link href="/" className={styles.text}>
                  Главная
                </Link>
                <Link href="/catalog/three-layer-panels" className={styles.text}>
                  Каталог
                </Link>
                <Link href="/contacts" className={styles.text}>
                  Контакты
                </Link>
                <Link href="/forms/feedback" className={styles.text}>
                  Рассчитать цену
                </Link>
              </div>
              <div className={styles.block}>
                <h5 className={styles.title}>Контакты</h5>
                <p className={styles.text}>По вопросам:</p>
                <Contacts src={email} text="market@tatbayar.ru" f_size="12px" i_size="13px" type="mail" />
                <Contacts src={phone} text="+7 800 550-31-90" f_size="12px" i_size="13px" type="phone" />
                <div className={styles.icons}>
                  <IconButton
                    icon={whatsapp}
                    href="https://wa.me/79272499942"
                    className={styles.whatsapp}
                    target="_blank"
                    size="medium"
                    alt="WhatsApp"
                  />
                  <IconButton
                    icon={vk}
                    href="https://vk.com/tatbayar"
                    className={styles.whatsapp}
                    target="_blank"
                    size="medium"
                    alt="VK"
                  />
                  <IconButton
                    icon={avito}
                    href="https://www.avito.ru/brands/5385ff2b1660104524b6c6278d874d95/all?sellerId=96eb1cebd575daac4645cf4371cd06cc"
                    className={styles.whatsapp}
                    target="_blank"
                    size="medium"
                    alt="Avito"
                  />
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className={styles.block}>
                <h5 className={styles.title}>Навигация</h5>
                <Link href="/" className={styles.text}>
                  Главная
                </Link>
                <Link href="/catalog" className={styles.text}>
                  Каталог
                </Link>
                {/* <Link href="/about" className={styles.text}>
                  О нас
                </Link> */}
                <Link href="/contacts" className={styles.text}>
                  Контакты
                </Link>
                <Link href="/forms/feedback" className={styles.text}>
                  Рассчитать цену
                </Link>
                {/* <Link href="/profile" className={styles.text}>
                  Профиль
                </Link> */}
              </div>
              <div className={styles.block}>
                <h5 className={styles.title}>Контакты</h5>
                <p className={styles.text}>По вопросам:</p>
                <Contacts src={email} text="market@tatbayar.ru" f_size="24px" i_size="26px" type="mail" />
                <Contacts src={phone} text="+7 800 550-31-90" f_size="24px" i_size="26px" type="phone" />
                <div className={styles.icons}>
                  <IconButton
                    icon={whatsapp}
                    href="https://wa.me/79272499942"
                    className={styles.whatsapp}
                    target="_blank"
                    size="medium"
                    alt="WhatsApp"
                  />
                  <IconButton
                    icon={vk}
                    href="https://vk.com/tatbayar"
                    className={styles.whatsapp}
                    target="_blank"
                    size="medium"
                    alt="VK"
                  />
                  <IconButton
                    icon={avito}
                    href="https://www.avito.ru/brands/5385ff2b1660104524b6c6278d874d95/all?sellerId=96eb1cebd575daac4645cf4371cd06cc"
                    className={styles.whatsapp}
                    target="_blank"
                    size="medium"
                    alt="Avito"
                  />
                </div>
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

