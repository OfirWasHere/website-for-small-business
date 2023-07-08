import { Outlet, useOutlet } from "react-router-dom";
import RoutesNav from "../../../Routes/RoutesNav";
import Navbar from "../../Navbar/Navbar";
import HomePage from "../HomePage/HomePage";
import LanguagePicker from "../../LanguagePicker/LanguagePicker";
import languages from "../../../Strings/Languages";
import { useTranslation } from "react-i18next";
import Trademark from "../../Trademark/Trademark";
import { ToastContainer } from "react-toastify";
import { toastContainerConfig } from "../../ToastNotify/ToastNotify";
import { ThemeProvider } from "@mui/material";
import customMuiTheme from "./CustomMui";

export default function Root() {
  const { t } = useTranslation();
  const outlet = useOutlet();

  return (
    // Fragment to render 2 components or more
    <>
      <ThemeProvider theme={customMuiTheme}>
        <Navbar routes={RoutesNav} />
        <LanguagePicker languageList={languages} />
        <ToastContainer {...toastContainerConfig} />
        <div dir={t("SideOfScreen")}>{outlet ? <Outlet /> : <HomePage />}</div>
        {/* Footer here*/}
        <Trademark />
      </ThemeProvider>
    </>
  );
}
