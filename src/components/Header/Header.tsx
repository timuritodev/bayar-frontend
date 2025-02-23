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

  // const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  // // Обработчик клика по каталогу
  // const toggleCatalogMenu = () => {
  //   setIsCatalogOpen(!isCatalogOpen);
  // };

  // // Закрытие меню при клике вне области
  // const catalogRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const handleClickOutside = (e: MouseEvent) => {
  //     if (catalogRef.current && !catalogRef.current.contains(e.target as Node)) {
  //       setIsCatalogOpen(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);

  // useEffect(() => {
  //   setIsCatalogOpen(false);
  // }, [router.pathname]); // Закрывает меню при смене маршрута

  // // В компоненте меню
  // const isCatalogActive = router.pathname.startsWith('/catalog');

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
          <Link href="/" className={styles.header__link}>
            Главная
          </Link>
          <ul className={styles.header__links_container}>
            <li className={styles.header__link}>
              Каталог
              <ul className={styles.header__sub_menu}>
                <div className={styles.header__sub_menu__container}>
                  <li>
                    <Link href="/catalog/three-layer-panels" className={styles.header__sub_link}>
                      Трёхслойные сэндвич-панели
                    </Link>
                  </li>
                  <li>
                    <Link href="/catalog/roof-panels" className={styles.header__sub_link}>
                      Кровельные сэндвич-панели
                    </Link>
                  </li>
                  <li>
                    <Link href="/catalog/wall-panels" className={styles.header__sub_link}>
                      Стеновые сэндвич-панели
                    </Link>
                  </li>
                </div>
              </ul>
            </li>
          </ul>
          <Link href="/about" className={styles.header__link}>
            О нас
          </Link>
          <Link href="/calculator" className={styles.header__link}>
            Калькулятор
          </Link>
          <Link href="/profile" className={styles.header__link}>
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

