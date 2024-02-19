import React from "react";

import styles from "./styles.module.scss";
import BoxLayout from "../../../components/box-layout";

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
        <button className={styles["card-btn"]}>выбрать</button>
      </div>
    </BoxLayout>
  );
};

export default CatalogsCard;
