import React from "react";
import { Link } from "react-router-dom";

import footerLogoImg from "./../../assets/images/footer-logo.png";
import footerInstagram from "./../../assets/images/footer-instagram.svg";
import footerFacebook from "./../../assets/images/footer-facebook.svg";
import footerYoutube from "./../../assets/images/footer-youtube.svg";

import common from "./../../assets/styles/common.module.scss";
import styles from "./styles.module.scss";
import clsx from "clsx";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={clsx(common.container, styles["container"])}>
        <div className={styles["footer-wrap"]}>
          <div className={styles["content"]}>
            <div className={styles["logo-wrap"]}>
              <div className={styles["logo-img-wrap"]}>
                <img
                  className={styles["logo-img"]}
                  src={footerLogoImg}
                  alt="footer-logo"
                />
              </div>

              <p className={styles["description"]}>
                Магазин техники Apple в Бишкеке
              </p>
            </div>
            <div className={styles["links-wrap"]}>
              <Link className={styles["link"]} href="#">
                <img
                  className={styles["links-img"]}
                  src={footerInstagram}
                  alt=""
                />
              </Link>
              <Link className={styles["link"]} href="#">
                <img
                  className={styles["links-img"]}
                  src={footerFacebook}
                  alt=""
                />
              </Link>
              <Link className={styles["link"]} href="#">
                <img
                  className={styles["links-img"]}
                  src={footerYoutube}
                  alt=""
                />
              </Link>
            </div>
            <h6 className={styles["title"]}>Режим работы</h6>
            <span className={styles["text"]}>Пн - Вс 10:00 - 20:00</span>
          </div>
          <nav className={styles["navbar"]}>
            <div
              className={clsx(styles["products"], styles["general-padding"])}
            >
              <h6 className={clsx(styles["main-title"], styles["title"])}>
                Продукция
              </h6>
              <ul className={styles["nav-list"]}>
                <li className={styles["nav-list__item"]}>
                  <Link
                    className={clsx(styles["main-link"], styles["link"])}
                    href="#"
                  >
                    Mac
                  </Link>
                </li>
                <li className={styles["nav-list__item"]}>
                  <Link
                    className={clsx(styles["main-link"], styles["link"])}
                    href="#"
                  >
                    iPad
                  </Link>
                </li>
                <li className={styles["nav-list__item"]}>
                  <Link
                    className={clsx(styles["main-link"], styles["link"])}
                    href="#"
                  >
                    iPhone
                  </Link>
                </li>
                <li className={styles["nav-list__item"]}>
                  <Link
                    className={clsx(styles["main-link"], styles["link"])}
                    href="#"
                  >
                    Watch
                  </Link>
                </li>
                <li className={styles["nav-list__item"]}>
                  <Link
                    className={clsx(styles["main-link"], styles["link"])}
                    href="#"
                  >
                    Гаджеты
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className={clsx(styles["about-us"], styles["general-padding"])}
            >
              <h6 className={clsx(styles["main-title"], styles["title"])}>
                10 лет с Вами!
              </h6>
              <ul className={styles["nav-list"]}>
                <li className={styles["nav-list__item"]}>
                  <Link
                    className={clsx(styles["main-link"], styles["link"])}
                    href="#"
                  >
                    О нас
                  </Link>
                </li>
                <li className={styles["nav-list__item"]}>
                  <Link
                    className={clsx(styles["main-link"], styles["link"])}
                    href="#"
                  >
                    Обратная связь
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className={clsx(styles["contacts"], styles["general-padding"])}
            >
              <h6 className={clsx(styles["main-title"], styles["title"])}>
                Контакты
              </h6>
              <ul className={styles["nav-list"]}>
                <li className={styles["nav-list__item"]}>
                  <i
                    className={clsx(styles["icon"], styles["location-icon"])}
                  ></i>
                  <a
                    className={clsx(styles["main-link"], styles["link"])}
                    href="#"
                  >
                    пр. Манаса, 40
                    <p>(пер. ул. Киевская)</p>
                  </a>
                </li>
                <li className={styles["nav-list__item"]}>
                  <i className={clsx(styles["icon"], styles["phone-icon"])}></i>
                  <div className={styles["main-links-wrap"]}>
                    <a
                      className={clsx(
                        styles["main-link"],
                        styles["first-link"]
                      )}
                      href="#"
                    >
                      +996 (555) 802 000
                    </a>
                    <a
                      className={clsx(
                        styles["main-link"],
                        styles["second-list"]
                      )}
                      href="#"
                    >
                      +996 (505) 802 000
                    </a>
                  </div>
                </li>
                <li className={styles["nav-list__item"]}>
                  <i className={clsx(styles["icon"], styles["email-icon"])}></i>
                  <a
                    className={clsx(styles["main-link"], styles["link"])}
                    href="#"
                  >
                    office@istore.kg
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
