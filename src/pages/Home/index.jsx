import React from "react";
import macBookAir15 from "./../../assets/images/macbook-air-15.webp";
import PromoSlider from "../../components/promo-slider";
import CatalogsCard from "./catalogs-card";

import styles from "./styles.module.scss";

const Home = () => {
  return (
    <section className={styles["home-page-wrap"]}>
      <PromoSlider />
      <section className={styles["catalogs-cards-list"]}>
        <CatalogsCard
          title={'MacBook Air 15.3"'}
          description={"Поразительно тонкий и быстрый"}
          image={macBookAir15}
        />
        <CatalogsCard
          title={'MacBook Air 15.3"'}
          description={"Поразительно тонкий и быстрый"}
          image={macBookAir15}
        />
        <CatalogsCard
          title={'MacBook Air 15.3"'}
          description={"Поразительно тонкий и быстрый"}
          image={macBookAir15}
        />
        <CatalogsCard
          title={'MacBook Air 15.3"'}
          description={"Поразительно тонкий и быстрый"}
          image={macBookAir15}
        />
        <CatalogsCard
          title={'MacBook Air 15.3"'}
          description={"Поразительно тонкий и быстрый"}
          image={macBookAir15}
        />
        <CatalogsCard
          title={'MacBook Air 15.3"'}
          description={"Поразительно тонкий и быстрый"}
          image={macBookAir15}
        />
      </section>
    </section>
  );
};

export default Home;
