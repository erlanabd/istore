import React from "react";
import BtnArrow from "../../../components/arrow-btn/index";

import clsx from "clsx";
import styles from "./styles.module.scss";

const CatalogsSlider = (props) => {
  const { title, description, image, more, className } = props;
  const itemClasses = clsx(styles["catalogs-item"], {
    [className]: className,
  });
  return (
    <div className={styles["catalogs-item-wrap"]}>
      <div className={styles["catalog-item-box"]}>
        <div className={itemClasses}>
          <div className={styles["catalogs-item__content"]}>
            <h6 className={styles["catalogs-item__title"]}>{title}</h6>
            <p className={styles["catalogs-item__description"]}>
              {description}
            </p>
            {more === true && <BtnArrow className={styles["btn"]} title={"Подробнее"} />}
          </div>
          <div className={styles["catalogs-item__img-wrap"]}>
            <img
              className={styles["catalogs-item__img"]}
              src={image}
              alt={title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogsSlider;
