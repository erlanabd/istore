import React from "react";
import BtnArrow from "../../../components/arrow-btn";

import styles from "./styles.module.scss";

const MacCard = (props) => {
  const { title, subtitle, mainBg, bgDark } = props;
  return (
    <div className={styles["mac-card-wrap"]}>
      <div className={styles["title-wrap"]}>
        <h2 className={bgDark ? styles["title"] : styles["title-light"]}>
          {title}
        </h2>
          <span
            className={bgDark ? styles["sub-title"] : styles["sub-title-light"]}
          >
            {subtitle}
          </span>
        <div className={styles["btn-wrap"]}>
          <BtnArrow title={"Подробнее"} className={styles["btn"]} />
          <BtnArrow title={"Купить"} className={styles["btn"]} />
        </div>
      </div>
      <div className={styles["image-wrap"]}>
        <img className={styles["image"]} src={mainBg} alt={title} />
      </div>
    </div>
  );
};

export default MacCard;
