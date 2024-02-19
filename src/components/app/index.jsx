import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../header";
import AboutUs from "../../pages/AboutUs";
import Catalog from "../../pages/Catalog";
import Accessories from "../../pages/Accessories";
import Guaratnee from "../../pages/Guarantee";
import LoanMenu from "../../pages/LoanMenu";
import Articles from "../../pages/Articles";
import Contacts from "../../pages/Contacts";
import Login from "../../pages/Login";
import Introduction from "../introduction";
import CatalogList from "../catalog-list";
import Home from "../../pages/Home";

import styles from "./styles.module.scss";

function App() {
  return (
    <div className={styles["main-layout"]}>
      <Header />
      <Introduction />
      <CatalogList />
      <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path={"/"} element={<Home />} />
        <Route path={"/about-us"} element={<AboutUs />} />
        <Route path={"/catalog"} element={<Catalog />} />
        <Route path={"/catalog/accessories"} element={<Accessories />} />
        <Route path={"/guarantee"} element={<Guaratnee />} />
        <Route path={"/guarantee"} element={<Guaratnee />} />
        <Route path={"/loan-menu"} element={<LoanMenu />} />
        <Route path={"/articles"} element={<Articles />} />
        <Route path={"/contacts"} element={<Contacts />} />
        <Route path={"/accounts/login"} element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
