import React from "react";
import "./GetInContactSection.css";
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function GetInContactSection() {
  const { t } = useTranslation();

  return (
    <div className="GetInContactSection">
      <Box sx={{ p: 4, border: "3px dashed" }}>
        <div className="HighlightText">
          <h1>{t("GetInContactHomePage.interested")}</h1>
          <br />
          <p>{t("GetInContactHomePage.contactUsForQuestions")}</p>
          <br />
          <p>
            {t("GetInContactHomePage.phone") + ": "}
            <a className="LinkButton" href="tel:+972-54200000">
              +972-54200000
            </a>
          </p>
          <br />
          <p>{t("GetInContactHomePage.email") + ": "} example@gmail.com</p>
          <br />
          <p>
            {t("GetInContactHomePage.leaveYourDetails")}
            <NavLink className="LinkButton" to={"/contact-us"}>
              {" " + t("GetInContactHomePage.here") + " "}
            </NavLink>
            {t("GetInContactHomePage.contactAsSoonAsPossible")}
          </p>
        </div>
      </Box>
    </div>
  );
}

export default GetInContactSection;
