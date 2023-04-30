import { Outlet, useOutlet } from "react-router-dom";
import RoutesNav from "../../Routes/RoutesNav";
import Navbar from "../Navbar/Navbar";
import HomePage from "../HomePage/HomePage";
import LanguagePicker from "../LanguagePicker/LanguagePicker";
import languages from "../../Strings/Languages";
import { useTranslation } from "react-i18next";
import Trademark from "../Trademark/Trademark";

export default function Root() {
  const { t } = useTranslation();
  const outlet = useOutlet();

  return (
    // Fragment to render 2 components or more
    <>
      <Navbar routes={RoutesNav} />
      <LanguagePicker languageList={languages}/>

      <div dir={t("SideOfScreen")}>
        { outlet ? <Outlet /> : <HomePage />}
      </div>
    </>
  );
}