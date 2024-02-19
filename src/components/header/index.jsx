import React from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

import common from "./../../assets/styles/common.module.scss";
import styles from "./styles.module.scss";

const Header = (props) => {
  let location = useLocation();

  return (
    <header className={styles["header"]}>
      <div className={common.container}>
        <nav className={styles["header__navbar"]}>
          <ul className={styles["header__nav-list"]}>
            <li
              className={clsx(styles["header__nav-list__item"], {
                [styles["active-item"]]: location.pathname === "/",
              })}
            >
              <Link to={"/"}>Главная</Link>
            </li>
            <li
              className={clsx(styles["header__nav-list__item"], {
                [styles["active-item"]]: location.pathname === "/about-us",
              })}
            >
              <Link to={"/about-us"}>О нас</Link>
            </li>
            <li
              className={clsx(styles["header__nav-list__item"], {
                [styles["active-item"]]: location.pathname === "/catalog",
              })}
            >
              <Link to={"/catalog"}>Продукция</Link>
            </li>
            <li
              className={clsx(styles["header__nav-list__item"], {
                [styles["active-item"]]:
                  location.pathname === "/catalog/accessories",
              })}
            >
              <Link to={"/catalog/accessories"}>Аксессуары</Link>
            </li>
            <li
              className={clsx(styles["header__nav-list__item"], {
                [styles["active-item"]]: location.pathname === "/guarantee",
              })}
            >
              <Link to={"/guarantee"}>Гарантия</Link>
            </li>
            <li
              className={clsx(styles["header__nav-list__item"], {
                [styles["active-item"]]: location.pathname === "/loan-menu",
              })}
            >
              <Link to={"/loan-menu"}>В кредит</Link>
            </li>
            <li
              className={clsx(styles["header__nav-list__item"], {
                [styles["active-item"]]: location.pathname === "/articles",
              })}
            >
              <Link to={"/articles"}>Статьи</Link>
            </li>
            <li
              className={clsx(styles["header__nav-list__item"], {
                [styles["active-item"]]: location.pathname === "/contacts",
              })}
            >
              <Link to={"/contacts"}>Контакты</Link>
            </li>
          </ul>
          <div className={styles["header__authorization"]}>
            <i className={styles["header__login-icon"]}></i>
            <Link to={"/accounts/login"}>
              <span>Авторизация</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
