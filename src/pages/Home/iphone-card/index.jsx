import React from "react";
import BtnArrow from "../../../components/arrow-btn";
import BoxLayout from "../../../components/box-layout";

import styles from "./styles.module.scss";

const IphoneCard = (props) => {
  const { title, image } = props;
  return (
    <BoxLayout className={styles["iphone-card-wrap"]}>
      <div className={styles["title-box-wrap"]}>
        <h4 className={styles["title"]}>{title}</h4>
        <BtnArrow title={"выбрать"} className={styles["btn"]} />
      </div>
      <div className={styles["image-wrap"]}>
        <img className={styles["image"]} src={image} alt={title} />
      </div>
    </BoxLayout>
  );
};

export default IphoneCard;
