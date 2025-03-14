import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import logo from "../../images/logo_s.svg";
import icon from "../../images/profile.svg";
import { selectUser } from "../../services/redux/slices/user/user";
import { useAppSelector } from "../../services/typeHooks";
// import Search from "../Search/Search";
import styles from "./style.module.scss";

interface BurgerProps {
  isPopupOpen: boolean;
  switchPopup: () => void;
}

export const Burger: FC<BurgerProps> = ({ isPopupOpen, switchPopup }) => {
  const user = useAppSelector(selectUser);

  const [values, setValues] = useState("");
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.value;
    setValues(value);
  };

  const setSearchClose = () => {
    setIsOpenSearch(false);
  };

  const handleLinkClick = () => {
    switchPopup();
  };

  useEffect(() => {
    if (values.length > 0) {
      setIsOpenSearch(true);
    }
    if (values.length < 1) {
      setIsOpenSearch(false);
    }
  }, [values]);
  return (
    <div className={`${styles.burger} ${isPopupOpen ? styles.burger_opened : ""}`}>
      <div className={styles.burger__content}>
        <div className={styles.burger__container}>
          <div className={styles.burger_header__container}>
            <button
              className={styles.burger__close}
              type="button"
              onClick={switchPopup}
            />
            <Link href="/">
              <Image
                className={styles.header__logo}
                alt="Логотип"
                src={logo}
                onClick={switchPopup}
              />
            </Link>
            <div className={styles.burger_links__wrapper}>
              {/* <Image
                className={styles.header__search_button_search}
                src={loop_small}
                alt="Кнопка поиска"
                onClick={switchPopup}
              /> */}
              <Link href="/profile">
                <Image
                  className={styles.header__profile_icon}
                  alt="Иконка с профилем"
                  src={icon}
                  onClick={switchPopup}
                />
              </Link>
            </div>
          </div>
          {/*<form className={styles.burger__search}>
            <Image
              className={styles.burger__search_button_search}
              src={loop}
              alt="Кнопка поиска"
            />
            <input
              className={styles.burger__search_input}
              id="name"
              name="name"
              type="text"
              placeholder="Поиск"
              onChange={handleChange}
              //   onBlur={setSearchClose}
              value={values}
              autoComplete="off"
            />
             <Search
              isOpenSearch={isOpenSearch}
              isClose={setSearchClose}
              values={values}
              switchPopup={switchPopup}
            /> 
          </form>*/}
          <div className={styles.burger__links_container}>
            {user.token === "" && (
              <>
                <Link
                  href="/sign-up"
                  className={styles.burger__link}
                  onClick={handleLinkClick}
                >
                  Регистрация
                </Link>
                <Link
                  href="/sign-in"
                  className={styles.burger__link}
                  onClick={handleLinkClick}
                >
                  Вход в учетную запись
                </Link>
              </>
            )}
            <li className={styles.hover__link}>
              Каталог
              <ul className={styles.hover__menu}>
                <div className={styles.hover__menu_container}>
                  <Link
                    href="/catalog/three-layer-panels"
                    className={styles.burger__link}
                    onClick={handleLinkClick}>
                    Трёхслойные сэндвич-панели
                  </Link>
                  <Link
                    href="/catalog/roof-panels"
                    className={styles.burger__link}
                    onClick={handleLinkClick}>
                    Кровельные сэндвич-панели
                  </Link>
                  <Link
                    href="/catalog/wall-panels"
                    className={styles.burger__link}
                    onClick={handleLinkClick}>
                    Стеновые сэндвич-панели
                  </Link>
                  <Link
                    href="/catalog/accessories"
                    className={styles.burger__link}> {/*TODO тут все съезжает при открытии, пофиксить и еще надо залочить прокрутку страницы при открытом бургере */}
                    Комплектующие для сэндвич-панелей
                  </Link>
                </div>
              </ul>
            </li>
            <Link
              href="/calculator"
              className={styles.burger__link}
              onClick={handleLinkClick}
            >
              Калькулятор
            </Link>
            <Link
              href="/about"
              className={styles.burger__link}
              onClick={handleLinkClick}
            >
              О нас
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
