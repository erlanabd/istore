import React from "react";
import BtnArrow from "../../../components/arrow-btn";

import styles from "./styles.module.scss";

const ArticleCard = (props) => {
  const { image, title, date, description } = props;
  return (
    <div className={styles["article-card"]}>
      <div className={styles["img-wrap"]}>
        <img className={styles["img"]} src={image} alt={title} />
      </div>
      <div className={styles["body"]}>
        <span className={styles["body__date"]}>{date}</span>
        <h6 className={styles["body__title"]}>{title}</h6>
        <p className={styles["body__description"]}>{description}</p>
        <BtnArrow className={styles["btn"]} title={"подробнее"} />
      </div>
    </div>
  );
};

export default ArticleCard;
