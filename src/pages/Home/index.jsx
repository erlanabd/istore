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

import iphoneCardIphone15ProMax from "./../../assets/images/iphone-card-iphone-15-pro-max.webp";
import iphoneCardIphone15Pro from "./../../assets/images/iphone-card-iphone-15-pro.webp";
import iphoneCardIphone15Plus from "./../../assets/images/iphone-card-iphone-15-plus.webp";
import iphoneCardIphone15 from "./../../assets/images/iphone-card-iphone-15.webp";
import iphoneCardIphone14Plus from "./../../assets/images/iphone-card-iphone-14-plus.webp";
import iphoneCardIphone14 from "./../../assets/images/iphone-card-iphone-14.webp";
import iphoneCardIphone13 from "./../../assets/images/iphone-card-iphone-13.webp";
import iphoneCardIphone12 from "./../../assets/images/iphone-card-iphone-12.webp";

import garminCardMarqAviatorGen2 from "./../../assets/images/garmin-card-marq-aviator-gen2.webp";
import garminCardMarqAthleteCarbonGen2 from "./../../assets/images/garmin-card-marq-athlete-carbon-gen2.webp";
import garminCardMarqGolferCarbonGen2 from "./../../assets/images/garmin-card-marq-golfer-carbon-gen2.webp";

import macCardIpadPro from "./../../assets/images/mac-card-ipad-pro.webp";
import macCardMacBookAir15 from "./../../assets/images/mac-card-macbook-air-15.webp";
import macCardIstoreCard from "./../../assets/images/mac-card-istore-card.webp";
import macCardAirpodsPro from "./../../assets/images/mac-card-airpods-pro.webp";

import articleCardFastStart from "./../../assets/images/article-card-fast-start.webp";

import PromoSlider from "../../components/promo-slider";
import CatalogsCard from "./catalogs-card";
import CatalogsSlider from "./catalogs-slider";
import MainTitle from "../../components/main-title";
import IphoneCard from "./iphone-card";
import GarminCard from "./garmin-card";
import MacCard from "./mac-card";

import clsx from "clsx";
import common from "./../../assets/styles/common.module.scss";
import styles from "./styles.module.scss";
import ArticleCard from "./article-card";

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

const IPHONE_CARDS_DATA = [
  {
    id: "0",
    title: "iPhone 15 Pro Max",
    image: iphoneCardIphone15ProMax,
  },
  {
    id: "1",
    title: "iPhone 15 Pro",
    image: iphoneCardIphone15Pro,
  },
  {
    id: "2",
    title: "iPhone 15 Plus",
    image: iphoneCardIphone15Plus,
  },
  {
    id: "3",
    title: "iPhone 15",
    image: iphoneCardIphone15,
  },
  {
    id: "4",
    title: "iPhone 14 Plus",
    image: iphoneCardIphone14Plus,
  },
  {
    id: "5",
    title: "iPhone 14",
    image: iphoneCardIphone14,
  },
  {
    id: "6",
    title: "iPhone 13",
    image: iphoneCardIphone13,
  },
  {
    id: "7",
    title: "iPhone 12",
    image: iphoneCardIphone12,
  },
];

const GARMINS_CARD_DATA = [
  {
    id: "0",
    title: "MARQ® Golfer Carbon (Gen 2)",
    image: garminCardMarqGolferCarbonGen2,
  },
  {
    id: "1",
    title: "MARQ® Athlete Carbon (Gen 2)",
    image: garminCardMarqAthleteCarbonGen2,
  },
  {
    id: "2",
    title: "MARQ® Aviator (Gen 2)",
    image: garminCardMarqAviatorGen2,
  },
];

const MACS_CARD_DATA = [
  {
    id: "0",
    title: "iPad Pro",
    subTitle: "Суперсила чипа М2",
    mainBg: macCardIpadPro,
    bgDark: true,
  },
  {
    id: "1",
    title: "MacBook Air 15”",
    subTitle: "Впечатляюще большой. Невероятно тонкий",
    mainBg: macCardMacBookAir15,
    bgDark: false,
  },
  {
    id: "2",
    title: "iStore Card",
    subTitle: "Получите до 2% кэшбека с каждой покупки",
    mainBg: macCardIstoreCard,
    bgDark: false,
  },
  {
    id: "3",
    title: "Airpods Pro",
    subTitle: "Адаптивный звук",
    mainBg: macCardAirpodsPro,
    bgDark: true,
  },
];

const ARTICLES_AND_NEWS_CARD_DATA = [
  {
    id: "0",
    date: "15.12.20",
    title: "Функция «Быстрое начало»",
    image: articleCardFastStart,
    description:
      "Использование функции «Быстрое начало» для переноса данных на новое устройство iPhone, iPad или iPod touch",
  },
  {
    id: "0",
    date: "15.12.20",
    title: "Функция «Быстрое начало»",
    image: articleCardFastStart,
    description:
      "Использование функции «Быстрое начало» для переноса данных на новое устройство iPhone, iPad или iPod touch",
  },
  {
    id: "0",
    date: "15.12.20",
    title: "Функция «Быстрое начало»",
    image: articleCardFastStart,
    description:
      "Использование функции «Быстрое начало» для переноса данных на новое устройство iPhone, iPad или iPod touch",
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
      <section className={styles["iphone-cards"]}>
        <div
          className={clsx(common.container, styles["iphone-cards__container"])}
        >
          <MainTitle
            title={"Выберите свой iPhone"}
            subTitle={"Сравните все модели iPhone"}
            btnTitle={"больше моделей"}
          />
          <div className={styles["iphone-cards__list"]}>
            {IPHONE_CARDS_DATA.map((item, idx) => {
              return (
                <IphoneCard
                  key={item.id}
                  title={item.title}
                  image={item.image}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className={styles["garmins-cards"]}>
        <div
          className={clsx(common.container, styles["garmin-cards__container"])}
        >
          <MainTitle
            title={"Garmin"}
            subTitle={"MARQ™ COLLECTION"}
            btnTitle={"все гаджеты"}
          />
          <div className={styles["garmin-cards__list"]}>
            {GARMINS_CARD_DATA.map((item, idx) => {
              return (
                <GarminCard
                  key={item.id}
                  title={item.title}
                  image={item.image}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className={styles["mac-cards"]}>
        <div className={styles["mac-cards__container"]}>
          <MainTitle
            title={"Выберите свой Mac"}
            subTitle={"Суперсила Проффесионалов"}
            btnTitle={"подробнее"}
          />
          <div className={styles["mac-cards__list"]}>
            {MACS_CARD_DATA.map((item, idx) => {
              return (
                <MacCard
                  key={item.id}
                  title={item.title}
                  subtitle={item.subTitle}
                  mainBg={item.mainBg}
                  bgDark={item.bgDark}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className={styles["articles-and-news"]}>
        <div
          className={clsx(
            common.container,
            styles["articles-and-news-container"]
          )}
        >
          <MainTitle
            title={"Статьи и новости"}
            subTitle={"Оставайтесь всегда в курсе событий"}
            btnTitle={"подробнее"}
          />
          <div className={styles["articles-and-news-card__list"]}>
            {ARTICLES_AND_NEWS_CARD_DATA.map((item) => {
              return (
                <ArticleCard
                  key={item.id}
                  date={item.date}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
