import React, { useRef, useState } from "react";
import macbookProImg from "./../../assets/images/promo-macbook-pro.png";
import iphone15ProImg from "./../../assets/images/promo-iphone-15pro.webp";
import watchImg from "./../../assets/images/promo-watch.webp";
import apleWatchUltraImg from "./../../assets/images/promo-watch-ultra.webp";
import visionProImg from "./../../assets/images/promo-vision-pro.jpeg";
import spirngSurprises from "./../../assets/images/promo-spring-suprises.png";
import { Swiper, SwiperSlide } from "swiper/react";
import clsx from "clsx";

import "swiper/css";
import { Autoplay } from "swiper/modules";
import styles from "./styles.module.scss";

const PromoSlider = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const swiperRef = useRef(null);

  return (
    <section
      className={styles["swiper-wrap"]}
      onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
      onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
    >
      <button
        onClick={() => swiperInstance.slidePrev()}
        className={clsx(styles["btn"], styles["prev-btn"])}
      >
        <i></i>
      </button>
      <Swiper
        ref={swiperRef}
        className={styles["swiper"]}
        modules={[Autoplay]}
        speed={480}
        autoplay={{ delay: 4000, disableOnInteraction: true }}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
      >
        <SwiperSlide>
          <img
            className={styles["swiper-slide-img"]}
            src={macbookProImg}
            alt="iphone-15-pro"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={styles["swiper-slide-img"]}
            src={iphone15ProImg}
            alt="iphone-15-pro"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={styles["swiper-slide-img"]}
            src={watchImg}
            alt="iphone-15-pro"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={styles["swiper-slide-img"]}
            src={apleWatchUltraImg}
            alt="iphone-15-pro"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={styles["swiper-slide-img"]}
            src={spirngSurprises}
            alt="iphone-15-pro"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={styles["swiper-slide-img"]}
            src={visionProImg}
            alt="iphone-15-pro"
          />
        </SwiperSlide>
      </Swiper>
      <button
        onClick={() => swiperInstance.slideNext()}
        className={clsx(styles["btn"], styles["next-btn"])}
      >
        <i></i>
      </button>
    </section>
  );
};

export default PromoSlider;
