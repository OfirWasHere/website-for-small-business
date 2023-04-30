import "./HomePage.css";
import Carousel from "../Carousel/Carousel";
import { useTranslation } from "react-i18next";
import image1 from "../../../Assets/Images/Carousel-Images/image1.jpg";
import image2 from "../../../Assets/Images/Carousel-Images/image2.jpg";
import image3 from "../../../Assets/Images/Carousel-Images/image3.jpg";
import image4 from "../../../Assets/Images/Carousel-Images/image4.jpg";
import image5 from "../../../Assets/Images/Carousel-Images/image5.jpg";
import image6 from "../../../Assets/Images/Carousel-Images/image6.jpg";
import About from "../Goals/Goals";
import { AboutData } from "../../Strings/AboutData";
import { clientData } from "../../Strings/ClientData";
import Clients from "../Clients/Clients";
import GetInContactSection from "../GetInContact/GetInContactSection";
import { Box } from "@mui/material";
import Trademark from "../Trademark/Trademark";

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
      <hr />
      <div className="aboutUsText">
        <Box>{t("HomePageStrings.aBitAboutUS")}</Box>
      </div>

      <About about={AboutData} />
      {/* Client Component showcase: */}

      <Clients client={clientData} />
      <hr />

      {/* Intrested?, not sure? contact us for any questions we'll be happy to provide you with an answer */}
      <GetInContactSection />
      {/* testimonials add rating per person */}
      
      {/* Footer here*/}
      <Trademark />
    </div>
  );
}

export default HomePage;

// אז למה אתם מחכים צרו קשר עכשיו ונשמח לעמוד לשירותים
