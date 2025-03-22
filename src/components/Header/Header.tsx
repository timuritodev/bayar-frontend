import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { useResize } from "../../hooks/useResize";
import logo from "../../images/logo_s.svg";
import profile from "../../images/profile.svg";
import {
  selectUser
} from "../../services/redux/slices/user/user";
import { useAppSelector } from "../../services/typeHooks";
import { BurgerButton } from "../BurgerButton/BurgerButton";
// import Search from "../Search/Search";
import styles from "./style.module.scss";

const Header: FC = () => { // TODO хедер съехал из-за того что я убрад поиск
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
        {width < 767 && (
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
          <Link href="/about" className={`${styles.header__link} ${is_active("/about") ? styles.active : ""}`}>
            О нас
          </Link>
          <Link href="/calculator" className={`${styles.header__link} ${is_active("/calculator") ? styles.active : ""}`}>
            Калькулятор
          </Link>
          {/* <Link href="/profile" className={`${styles.header__link} ${is_active("/profile") ? styles.active : ""}`}>
            Профиль
          </Link> */}
        </div>

        <div className={styles.header__search__container}>
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
          {/*TODO Разобраться с поиском, потому что сейчас ссылки в хедере съехали без него */}
        </div>
      </div>
    </header>
  );
};

export default Header;

