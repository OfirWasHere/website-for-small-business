import React from "react";
import "./PageNotFound.css";
import Navbar from "../../Navbar/Navbar";
import RoutesNav from "../../../Routes/RoutesNav";
import { t } from "i18next";
import Trademark from "../../Trademark/Trademark";

function PageNotFound() {
  return (
    <div className="PageNotFound">
      <Navbar routes={RoutesNav} />

      <h1>{t("PageNotFoundStrings.lostWarning")}</h1>
      <p>{t("PageNotFoundStrings.lostMessage")}</p>

      <Trademark/>
    </div>
  );
}

export default PageNotFound;
