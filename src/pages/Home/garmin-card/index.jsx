import React from "react";
import BoxLayout from "../../../components/box-layout";
import BtnArrow from "../../../components/arrow-btn";

import styles from "./styles.module.scss";

const GarminCard = (props) => {
  const { title, image } = props;
  return (
    <BoxLayout className={styles["garmin-card-wrap"]}>
      <div className={styles["content"]}>
        <h5 className={styles["title"]}>{title}</h5>
        <div className={styles["image-wrap"]}>
          <img className={styles["image"]} src={image} alt={title} />
        </div>
        <div className={styles["btn-wrap"]}>
          <BtnArrow className={styles["btn"]} title={"выбрать"} />
        </div>
      </div>
    </BoxLayout>
  );
};

export default GarminCard;
