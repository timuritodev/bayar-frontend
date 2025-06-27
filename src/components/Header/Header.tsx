import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { useResize } from "../../hooks/useResize";
import email from "../../images/email.svg";
import logo from "../../images/logo_s.svg";
import phone from "../../images/phone.svg";
import profile from "../../images/profile.svg";
import { BurgerButton } from "../BurgerButton/BurgerButton";
// import Search from "../Search/Search";
import { Contacts } from '../Contacts/Contacts';
import styles from "./style.module.scss";

const Header: FC = () => {
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
        {width < 1023 && (
          <BurgerButton isPopupOpen={isPopupOpen} switchPopup={switchPopup} />
        )}
        <Link href="/">
          <Image className={styles.header__logo} alt="Логотип BAYAR" src={logo} />
        </Link>
        <div className={styles.header__links}>
          <Link href="/" className={`${styles.header__link} ${is_active("/") ? styles.active : ""}`}>
            Главная
          </Link>
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
          <Link href="/contacts" className={`${styles.header__link} ${is_active("/contacts") ? styles.active : ""}`}>
            Контакты
          </Link>
          <Link href="/calculator" className={`${styles.header__link} ${is_active("/calculator") ? styles.active : ""}`}>
            Калькулятор
          </Link>
          {/* <Link href="/profile" className={`${styles.header__link} ${is_active("/profile") ? styles.active : ""}`}>
            Профиль
          </Link> */}
        </div>

        <div className={styles.header__search__container}>
          {width > 1023 && (
            <div className={styles.info}>
              <Contacts src={email} text="info@tatbayar.ru" f_size="16px" i_size="23px" />
              <Contacts src={phone} text="+7 800 550-31-90" f_size="16px" i_size="23px" />
            </div>
          )}
          <Link href="/profile">
            <Image className={styles.header__profile_icon} alt="Иконка профиля" src={profile} />
          </Link>
          {/*<form className={styles.header__search}>
            <Image
              className={styles.header__search_button_search}
              src={loop}
              alt="Кнопка поиска"
            />
            <input
              className={styles.header__search_input}
              id="name"
              name="name"
              type="text"
              placeholder="Поиск"
              onChange={handleChange}
              value={values}
              autoComplete="off"
            />
            <Search
                isOpenSearch={isOpenSearch}
                isClose={setSearchClose}
                values={values}
              />
          </form>*/}
        </div>
      </div>
    </header>
  );
};

export default Header;

