import React from "react";
import logo from "./../../assets/images/iStore-logo.svg";
import { Link } from "react-router-dom";
import clsx from "clsx";

import common from "./../../assets/styles/common.module.scss";
import styles from "./styles.module.scss";

const Introduction = () => {
  return (
    <nav className={styles["navbar-introduction"]}>
      <div
        className={clsx(
          common["container"],
          styles["navbar-introduction__container"]
        )}
      >
        <ul className={styles["nav-list"]}>
          <li className={styles["nav-list__item"]}>
            <Link className={styles["logo-wrap"]}>
              <img className={styles["logo-img"]} src={logo} alt="logo" />
            </Link>
          </li>
          <li className={styles["nav-list__item"]}>
            <Link>
              <span>Магазин техники</span>
              <span>Apple в Бишкеке</span>
            </Link>
          </li>
          <li className={styles["nav-list__item"]}>
            <Link>
              <span>пр. Манаса (пер. ул.Киевская)</span>
              <span>Пн - Вс 10:00 - 20:00</span>
            </Link>
          </li>
          <li className={styles["nav-list__item"]}>
            <Link>
              <span>+996 (555) 802 000</span>
              <span>+996 (505) 802 000</span>
            </Link>
          </li>
        </ul>
        <div className={styles["search-input-wrap"]}>
          <i className={styles["search-icon"]}></i>
          <input type="text" placeholder="Поиск по всем категориям" />
        </div>
        <div className={styles["cart-wrap"]}>
          <i className={styles["cart-icon"]}></i>
        </div>
      </div>
    </nav>
  );
};

export default Introduction;
