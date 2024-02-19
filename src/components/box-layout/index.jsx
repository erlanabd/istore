import React from "react";
import clsx from "clsx";

import styles from "./styles.module.scss";

const BoxLayout = (props) => {
  const { children, className } = props;
  const boxClasses = clsx(styles["box-layout"], {
    [className]: className,
  });

  return <div className={boxClasses}>{children}</div>;
};

export default BoxLayout;
