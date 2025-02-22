import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { useResize } from "../../hooks/useResize";
import logo from "../../images/logo_s.svg";
import loop from "../../images/loop.svg";
import {
  selectUser
} from "../../services/redux/slices/user/user";
import { useAppSelector } from "../../services/typeHooks";
import { BurgerButton } from "../BurgerButton/BurgerButton";
// import Search from "../Search/Search";
import styles from "./style.module.scss";

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

  const isActive = (path: string) => {
    return router.pathname === path;
  };

  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        {width < 767 && (
          <BurgerButton isPopupOpen={isPopupOpen} switchPopup={switchPopup} />
        )}
        <Link href="/">
          <Image className={styles.header__logo} alt="Логотип BAYAR" src={logo} width={214} height={90} />
        </Link>
        <div className={styles.header__links}>
          <Link href="/" className={`${styles.header__link} ${isActive("/") ? styles.active : ""}`}>
            Главная
          </Link>
          <div
            className={`${styles.catalog_container} ${isCatalogOpen ? styles.active : ""}`}
            onMouseEnter={() => setIsCatalogOpen(true)}
            onMouseLeave={() => setIsCatalogOpen(false)}
          >
            <div className={`${styles.header__link} ${isActive("/") ? styles.active : ""}`}>
              Каталог
              {isCatalogOpen && (
                <div
                  className={styles.dropdown}
                  onMouseEnter={() => setIsCatalogOpen(true)}
                  onMouseLeave={() => setIsCatalogOpen(false)}
                >
                  <Link href="/catalog/option1" className={styles.dropdown__item}>
                    Вариант 1
                  </Link>
                  <Link href="/catalog/option2" className={styles.dropdown__item}>
                    Вариант 2
                  </Link>
                  <Link href="/catalog/option3" className={styles.dropdown__item}>
                    Вариант 3
                  </Link>
                </div>
              )}
            </div>
          </div>
          {/* <div
            className={styles.header__link}
            onClick={toggleCatalogMenu}
            ref={catalogRef}
            style={{ position: 'relative', cursor: 'pointer' }}
          >
            Каталог
            {isCatalogOpen && (
              <div className={styles.dropdown}>
                <Link href="/catalog/option1" className={styles.dropdown__item}>
                  Вариант 1
                </Link>
                <Link href="/catalog/option2" className={styles.dropdown__item}>
                  Вариант 2
                </Link>
                <Link href="/catalog/option3" className={styles.dropdown__item}>
                  Вариант 3
                </Link>
              </div>
            )}
          </div> */}
          <Link href="/about" className={`${styles.header__link} ${isActive("/about") ? styles.active : ""}`}>
            О нас
          </Link>
          <Link href="/calculator" className={`${styles.header__link} ${isActive("/calculator") ? styles.active : ""}`}>
            Калькулятор
          </Link>
          <Link href="/profile" className={`${styles.header__link} ${isActive("/profile") ? styles.active : ""}`}>
            Профиль
          </Link>
        </div>

        <div className={styles.header__search__container}>
          <form className={styles.header__search}>
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
            {/* <Search
                isOpenSearch={isOpenSearch}
                isClose={setSearchClose}
                values={values}
              /> */}
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;

