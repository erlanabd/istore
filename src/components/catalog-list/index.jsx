import React from "react";
import iphoneImg from "./../../assets/images/catalog-iphone.svg";
import ipadImg from "./../../assets/images/catalog-ipad.svg";
import macImg from "./../../assets/images/catalog-mac.svg";
import imacImg from "./../../assets/images/catalog-imac.svg";
import watchImg from "./../../assets/images/catalog-watch.svg";
import airpodsImg from "./../../assets/images/catalog-airpods.svg";
import gadgetsImg from "./../../assets/images/catalog-gadgets.svg";
import accessoriesImg from "./../../assets/images/catalog-accessories.svg";
import compareImg from "./../../assets/images/catalog-compare.svg";
import tradeinImg from "./../../assets/images/catalog-trade-in.svg";
import CatalogItem from "../catalog-item";
import clsx from "clsx";

import common from "./../../assets/styles/common.module.scss";
import styles from "./styles.module.scss";

const DATA = [
  {
    id: 0,
    image: iphoneImg,
    title: "iPhone",
    width: "34",
  },
  {
    id: 1,
    image: ipadImg,
    title: "iPad",
    width: "26",
  },
  {
    id: 2,
    image: macImg,
    title: "Mac",
    width: "55",
  },
  {
    id: 3,
    image: imacImg,
    title: "iMac",
    width: "32",
  },
  {
    id: 4,
    image: watchImg,
    title: "Watch",
    width: "32",
  },
  {
    id: 5,
    image: airpodsImg,
    title: "AirPods",
    width: "39",
    height: "35",
  },
  {
    id: 6,
    image: gadgetsImg,
    title: "Гаджеты",
    width: "46",
  },
  {
    id: 7,
    image: accessoriesImg,
    title: "Аксессуары",
    width: "64",
  },
  {
    id: 8,
    image: compareImg,
    title: "Сравнение",
    width: "59",
  },
  {
    id: 9,
    image: tradeinImg,
    title: "Trade in",
    width: "39",
  },
];

const CatalogList = () => {
  return (
    <nav className={styles["catalog-list-wrap"]}>
      <div className={clsx(common["container"], styles["catalog-list"])}>
        {DATA.map((item, idx) => {
          return (
            <CatalogItem
              key={item.id}
              image={item.image}
              title={item.title}
              width={item.width}
              color={"red"}
            />
          );
        })}
      </div>
    </nav>
  );
};

export default CatalogList;
