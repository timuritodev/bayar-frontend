import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { useResize } from "../../hooks/useResize";
import email from "../../images/email.svg";
import logo from "../../images/logo_b.png";
import phone from "../../images/phone.svg";
import profile from "../../images/profile.svg";
import whatsapp from "../../images/icons/whatsapp.svg";
import avito from "../../images/icons/avito.svg";
import vk from "../../images/icons/vk.svg";
import {
  selectUser
} from "../../services/redux/slices/user/user";
import { useAppSelector } from "../../services/typeHooks";
import { BurgerButton } from "../BurgerButton/BurgerButton";
// import Search from "../Search/Search";
import { Contacts } from '../Contacts/Contacts';
import styles from "./style.module.scss";
import { IconButton } from '../IconButton/IconButton';

const Header: FC = () => {
  const user = useAppSelector(selectUser);
  const router = useRouter();

  const [values, setValues] = useState("");
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.value;
    setValues(value);
  };

  const { width } = useResize();

  const setSearchClose = () => {
    setIsOpenSearch(false);
  };

  useEffect(() => {
    if (values.length > 0) {
      setIsOpenSearch(true);
    }
    if (values.length < 1) {
      setIsOpenSearch(false);
    }
  }, [values]);

  const [isPopupOpen, setIsPopupOpen] = useState(false); // Burger

  const switchPopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const is_active = (path: string) => {
    return router.pathname === path;
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link href="/">
          <Image className={styles.header__logo} alt="Логотип BAYAR" src={logo} />
        </Link>
        {width < 1023 && (
          <div className={styles.header__burger__container}>
            <div className={styles.icons}>
              <IconButton
                icon={whatsapp}
                href="https://wa.me/79272499942"
                className={styles.whatsapp}
                target="_blank"
                size="small"
                alt="WhatsApp"
              />
              <IconButton
                icon={vk}
                href="https://vk.com/tatbayar"
                className={styles.whatsapp}
                target="_blank"
                size="small"
                alt="VK"
              />
              <IconButton
                icon={avito}
                href="https://www.avito.ru/brands/5385ff2b1660104524b6c6278d874d95/all?sellerId=96eb1cebd575daac4645cf4371cd06cc"
                className={styles.whatsapp}
                target="_blank"
                size="small"
                alt="Avito"
              />
            </div>
            <BurgerButton isPopupOpen={isPopupOpen} switchPopup={switchPopup} />
          </div>
        )}
        {width > 1023 && (
          <div className={styles.header__links}>
            <ul className={styles.header__links_container}>
              <li className={`${styles.header__link} ${is_active("/catalog") ? styles.active : ""}`}>
                Каталог
                <ul className={styles.header__sub_menu}>
                  <div className={styles.header__sub_menu__container}>
                    <Link href="/catalog/three-layer-panels" className={styles.header__sub_link}>
                      Трёхслойные сэндвич-панели
                    </Link>
                    <Link href="/catalog/roof-panels" className={styles.header__sub_link}>
                      Кровельные сэндвич-панели
                    </Link>
                    <Link href="/catalog/wall-panels" className={styles.header__sub_link}>
                      Стеновые сэндвич-панели
                    </Link>
                    <Link href="/catalog/components" className={styles.header__sub_link}>
                      Комплектующие для сэндвич-панелей
                    </Link>
                  </div>
                </ul>
              </li>
            </ul>
            <Link
              href="/#contacts"
              className={`${styles.header__link} ${is_active("/") ? styles.active : ""}`}
              onClick={(e) => {
                // Если мы не на главной странице, переходим на неё с якорем
                if (router.pathname !== "/") {
                  router.push("/#contacts");
                  return;
                }

                // Если мы на главной странице, прокручиваем к контактам
                e.preventDefault();

                // Устанавливаем флаг программной прокрутки ДО выполнения прокрутки
                window.isProgrammaticScroll = true;
                window.contactsClickTime = Date.now(); // Запоминаем время клика

                // Небольшая задержка перед прокруткой, чтобы флаг успел установиться
                setTimeout(() => {
                  const element = document.getElementById('contacts');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 50);

                // Сбрасываем флаг через более длительное время анимации прокрутки
                setTimeout(() => {
                  window.isProgrammaticScroll = false;
                }, 3000);
              }}
            >
              Контакты
            </Link>
            <Link href="/forms/feedback" className={`${styles.header__link} ${styles.header__link_orange} ${is_active("/forms/feedback") ? styles.active : ""}`}>
              Рассчитать цену
            </Link>
            <Link
              href="/#gift"
              className={`${styles.header__link} ${is_active("/") ? styles.active : ""}`}
              onClick={(e) => {
                // Если мы не на главной странице, переходим на неё с якорем
                if (router.pathname !== "/") {
                  router.push("/#gift");
                  return;
                }

                // Если мы на главной странице, прокручиваем к подарку
                e.preventDefault();

                // Устанавливаем флаг программной прокрутки ДО выполнения прокрутки
                (window as any).isProgrammaticScroll = true;
                (window as any).giftClickTime = Date.now(); // Запоминаем время клика

                // Небольшая задержка перед прокруткой, чтобы флаг успел установиться
                setTimeout(() => {
                  const element = document.getElementById('gift');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 50);

                // Сбрасываем флаг через более длительное время анимации прокрутки
                setTimeout(() => {
                  (window as any).isProgrammaticScroll = false;
                }, 3000);
              }}
            >
              Получить подарок
            </Link>
          </div>
        )}
        {width > 1023 && (
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
        )}
        {width > 1023 && (
          <div className={styles.header__search__container}>
            {width > 1023 && (
              <div className={styles.info}>
                {/* <Contacts src={email} text="info@tatbayar.ru" f_size="16px" i_size="23px" /> */}
                <Contacts src={phone} text="+7 800 550-31-90" f_size="16px" i_size="23px" />
              </div>
            )}
            {/* <Link href="/profile">
            <Image className={styles.header__profile_icon} alt="Иконка профиля" src={profile} />
          </Link> */}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

