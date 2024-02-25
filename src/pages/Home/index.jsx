import React, { useEffect, useRef, useState } from "react";

import catalogCardMacbookAir15 from "./../../assets/images/catalog-card-macbook-air15.webp";
import catalogCardAirpodsMax from "./../../assets/images/catalog-card-airpods-max.webp";
import catalogCardWatchUltra2 from "./../../assets/images/catalog-card-watch-ultra-2.webp";
import catalogCardAppleTv4 from "./../../assets/images/catalog-card-apple-tv-4.webp";
import catalogCardHomepod from "./../../assets/images/catalog-card-homepod.webp";
import catalogCardAirtag from "./../../assets/images/catalog-card-airtag.webp";
import catalogCardPitakaCase from "./../../assets/images/catalog-card-pitaka-case.webp";

import catalogsSliderIphone15Pro from "./../../assets/images/catalogs-slider-iphone-15-pro.webp";
import catalogsSliderIphone15 from "./../../assets/images/catalog-slider-iphone-15.webp";
import catalogsSliderAsgardsWrath from "./../../assets/images/catalogs-slider-asgards-wrath.webp";
import catalogsSliderApplewatchUltra2 from "./../../assets/images/catalogs-slider-applewatch-ultra-2.webp";
import catalogsSliderMacBookM3 from "./../../assets/images/catalogs-slider-macbook-m3.webp";
import catalogsSliderVisionPro from "./../../assets/images/catalogs-slider-vision-pro.webp";

import PromoSlider from "../../components/promo-slider";
import CatalogsCard from "./catalogs-card";
import CatalogsSlider from "./catalogs-slider";

import clsx from "clsx";
import styles from "./styles.module.scss";

const CATALOGS_CARD_DATA = [
  {
    id: "0",
    title: 'MacBook Air 15.3"',
    description: "Поразительно тонкий и быстрый.",
    image: catalogCardMacbookAir15,
  },
  {
    id: "1",
    title: "Pitaka",
    description: "Скидки на чехлы Pitaka !",
    image: catalogCardPitakaCase,
  },
  {
    id: "2",
    title: "Watch Ultra 2",
    description: "Приключения ждут.",
    image: catalogCardWatchUltra2,
  },
  {
    id: "3",
    title: "Apple TV 4K",
    description: "Киношный во всех смыслах.",
    image: catalogCardAppleTv4,
  },
  {
    id: "4",
    title: "HomePod",
    description: "Глубокое звучание.",
    image: catalogCardHomepod,
  },
  {
    id: "5",
    title: "AirTag",
    description: "Находчивые штучки.",
    image: catalogCardAirtag,
  },
  {
    id: "6",
    title: "Airpods Max",
    description: "Высококачественный звук.",
    image: catalogCardAirpodsMax,
  },
];

const CATALOGS_SLIDER_CARDS_DATA = [
  {
    id: "0",
    title: "IPHONE 15 PRO",
    description: "Natural Titanium",
    image: catalogsSliderIphone15Pro,
    more: false,
  },
  {
    id: "1",
    title: "IPHONE 15",
    description: "Новая Эйфория",
    image: catalogsSliderIphone15,
    more: false,
  },
  {
    id: "2",
    title: "Asgard's Wrath 2 в комплекте",
    description: "Meta Quest 3",
    image: catalogsSliderAsgardsWrath,
    more: false,
  },
  {
    id: "3",
    title: "APPLE WATCH ULTRA 2",
    description: "Путешествие следующего уровня",
    image: catalogsSliderApplewatchUltra2,
    more: false,
  },
  {
    id: "4",
    title: "MacBook M3",
    description: "Новые возможности",
    image: catalogsSliderMacBookM3,
    more: false,
  },
  {
    id: "5",
    title: "Vision Pro",
    description: "Добро пожаловать в эпоху пространственных вычислений",
    image: catalogsSliderVisionPro,
    more: true,
  },
];

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const slidersListRef = useRef(null);

  const handleScrollRight = () => {
    if (slidersListRef.current) {
      slidersListRef.current.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    }
  };

  const handleScrollLeft = () => {
    if (slidersListRef.current) {
      slidersListRef.current.scrollBy({
        left: -400,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const newPosition = slidersListRef.current.scrollLeft;
      setScrollPosition(newPosition);
    };

    const updateMaxScroll = () => {
      setMaxScroll(
        slidersListRef.current.scrollWidth - slidersListRef.current.clientWidth
      );
    };

    if (slidersListRef.current) {
      slidersListRef.current.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", updateMaxScroll);
    }

    updateMaxScroll();

    return () => {
      if (slidersListRef.current) {
        slidersListRef.current.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("resize", updateMaxScroll);
    };
  }, []);

  const leftBtnClasses = clsx(styles["btn"], styles["left"], {
    [styles["inactive"]]: scrollPosition <= 0,
  });

  const rightBtnClasses = clsx(styles["btn"], styles["right"], {
    [styles["inactive"]]: scrollPosition >= maxScroll,
  });

  return (
    <section className={styles["home-page-wrap"]}>
      <PromoSlider />
      <section className={styles["catalogs-cards-list"]}>
        {CATALOGS_CARD_DATA.map((card, idx) => {
          return (
            <CatalogsCard
              key={card.id}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          );
        })}
      </section>
      <section className={styles["catalogs-sliders-wrap"]}>
        <div ref={slidersListRef} className={styles["catalogs-sliders"]}>
          <div className={styles["catalogs-sliders-list"]}>
            {CATALOGS_SLIDER_CARDS_DATA.map((slider, idx) => {
              return (
                <CatalogsSlider
                  key={slider.key}
                  title={slider.title}
                  description={slider.description}
                  image={slider.image}
                  more={slider.more}
                />
              );
            })}
          </div>
        </div>
        <button className={leftBtnClasses} onClick={handleScrollLeft}>
          <i className={clsx(styles["icon"], styles["left-icon"])}></i>
        </button>
        <button className={rightBtnClasses} onClick={handleScrollRight}>
          <i className={clsx(styles["icon"], styles["right-icon"])}></i>
        </button>
      </section>
    </section>
  );
};

export default Home;
