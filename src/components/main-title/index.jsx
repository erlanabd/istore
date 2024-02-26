import React from "react";
import BtnArrow from "../arrow-btn";

import styles from "./styles.module.scss";
import clsx from "clsx";

const MainTitle = (props) => {
  const { title, subTitle, btnTitle, className } = props;
  const mainTitleClasses = clsx(styles["main-title-wrap"], {
    [className]: className,
  });
  return (
    <div className={mainTitleClasses}>
      <h2 className={styles["title"]}>{title}</h2>
      <span className={styles["sub-title"]}>{subTitle}</span>
      <BtnArrow title={btnTitle} className={styles["btn"]} />
    </div>
  );
};

export default MainTitle;
