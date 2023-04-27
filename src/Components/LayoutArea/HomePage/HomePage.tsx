import "./HomePage.css";
import Carousel from "../Carousel/Carousel";
import { useTranslation } from "react-i18next";
import image1 from "../../../Assets/Images/Carousel-Images/image1.jpg";
import image2 from "../../../Assets/Images/Carousel-Images/image2.jpg";
import image3 from "../../../Assets/Images/Carousel-Images/image3.jpg";
import image4 from "../../../Assets/Images/Carousel-Images/image4.jpg";
import image5 from "../../../Assets/Images/Carousel-Images/image5.jpg";
import image6 from "../../../Assets/Images/Carousel-Images/image6.jpg";
import About from "../About/About";
import { AboutData } from "../../Strings/AboutData";
import Clients from "../Clients/Clients";

// TEMP!! // ADD BACKEND!!
const tempImages = [image1, image2, image3, image4, image5, image6];
// add backend soon

function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="HomePage">
      <div className="CarouselEffect">
        <Carousel images={tempImages} />
      </div>
      <div className="HeroText">
        <h1>{t("HomePageStrings.welcomeTitle")}</h1>
        <h3>{t("HomePageStrings.welcomeGoal")}</h3>
        <h3>{t("HomePageStrings.welcomeInfo")}</h3>
      </div>
      {/* About Component showcase: */}
      <About about={AboutData}/>
      {/* Client Component showcase: */}
      <Clients/>
    </div>
  );
}

export default HomePage;
