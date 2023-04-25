import { Outlet, useOutlet } from "react-router-dom";
import RoutesNav from "../../Routes/RoutesNav";
import Navbar from "../Navbar/Navbar";
import HomePage from "../HomePage/HomePage";
import { t } from "i18next";
import LanguageSettings from "../LanguageSettings/LanguageSettings";
import languages from "../../Strings/Languages";

export default function Root() {
  const outlet = useOutlet();

  return (
    // Fragment to render 2 components or more
    <>
      <Navbar routes={RoutesNav} />
      <LanguageSettings languageList={languages}/>

      <div dir={t("SideOfScreen")}>
        { outlet ? <Outlet /> : <HomePage />}
      </div>
    </>
  );
}