import React from "react";
import clsx from "clsx";

import styles from "./styles.module.scss";

const BtnArrow = (props) => {
  const { className, title } = props;
  const btnClasses = clsx(styles["btn-arrow"], {
    [className]: className,
  });
  return <button className={btnClasses}>{title}</button>;
};

export default BtnArrow;
