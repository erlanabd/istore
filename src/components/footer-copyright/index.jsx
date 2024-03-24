import React from "react";

import clsx from "clsx";
import common from "./../../assets/styles/common.module.scss";
import styles from "./styles.module.scss";

const FooterCopyright = () => {
  return (
    <section className={styles["footer-copyright"]}>
      <div className={clsx(common.container, styles["container"])}>
        <div className={styles["links-wrap"]}>
          <p className={styles["text"]}>
            Copyright 2013-2023 istore.kg все права защищены
          </p>
          <a className={styles["link"]} href="#">
            made in
            <span className={styles["white-text"]}>MOORE STUDIO</span>
          </a>
          <a className={styles["link"]} href="#">
            Политика конфиденциальности
          </a>
          <a className={styles["link"]} href="#">
            Пользовательское соглашение
          </a>
        </div>
      </div>
    </section>
  );
};

export default FooterCopyright;
