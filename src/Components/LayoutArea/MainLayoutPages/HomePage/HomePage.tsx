import "./HomePage.css";
import Carousel from "../../Carousel/Carousel";
import { useTranslation } from "react-i18next";
import image1 from "../../../../Assets/Images/Carousel-Images/image1.jpeg";
import image2 from "../../../../Assets/Images/Carousel-Images/image2.jpeg";
import image3 from "../../../../Assets/Images/Carousel-Images/image3.jpeg";
import image4 from "../../../../Assets/Images/Carousel-Images/image4.jpeg";
import image5 from "../../../../Assets/Images/Carousel-Images/image5.jpeg";
import image6 from "../../../../Assets/Images/Carousel-Images/image6.jpeg";
import About from "../../Goals/Goals";
import { AboutData } from "../../../Strings/AboutData";
import { clientData } from "../../../Strings/ClientData";
import CompanyClients from "../../CompanyClients/CompanyClients";
import GetInContactSection from "../../GetInContact/GetInContactSection";
import { Box } from "@mui/material";

const tempImages = [image1, image2, image3, image4, image5, image6];

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
        <h1>{t("HomePageStrings.welcomeInfo")}</h1>
      </div>

      {/* About Component showcase: */}
      <hr />
      <div className="aboutUsText">
        <Box>{t("HomePageStrings.aBitAboutUS")}</Box>
      </div>

      <About about={AboutData} />
      {/* Client Component showcase: */}

      <CompanyClients client={clientData} />
      <hr />

      {/* Intrested?, not sure? contact us for any questions we'll be happy to provide you with an answer */}
      <GetInContactSection />
      {/* testimonials add rating per person */}
    </div>
  );
}

export default HomePage;
