import React from "react";
import "./Trademark.css";
import { useTranslation } from "react-i18next";



function Trademark() {
  const { t } = useTranslation();
  
  return <div className="Trademark">{t("TradeMarkString")}</div>;
}

export default Trademark;
