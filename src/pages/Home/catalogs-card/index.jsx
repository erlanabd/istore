import React from "react";
import BtnArrow from "./../../../components/arrow-btn/index";
import BoxLayout from "../../../components/box-layout";

import styles from "./styles.module.scss";

const CatalogsCard = (props) => {
  const { title, description, image } = props;
  return (
    <BoxLayout className={styles["catalog-card-wrap"]}>
      <div className={styles["card-text"]}>
        <h5 className={styles["card-title"]}>{title}</h5>
        <p className={styles["card-description"]}>{description}</p>
      </div>
      <div className={styles["card-content"]}>
        <div className={styles["card-image-wrap"]}>
          <img className={styles["card-image"]} src={image} alt={title} />
        </div>
        <BtnArrow title={"выбрать"} />
      </div>
    </BoxLayout>
  );
};

export default CatalogsCard;
