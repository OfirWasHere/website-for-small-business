import React from "react";
import "./PageNotFound.css";
import Navbar from "../Navbar/Navbar";
import RoutesNav from "../../Routes/RoutesNav";
import { t } from "i18next";

function PageNotFound() {
  return (
    <div className="PageNotFound">
      <Navbar routes={RoutesNav} />

      <h1>{t("PageNotFoundStrings.lostWarning")}</h1>
      <p>{t("PageNotFoundStrings.lostMessage")}</p>
    </div>
  );
}

export default PageNotFound;
