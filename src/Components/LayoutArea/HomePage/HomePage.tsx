import "./HomePage.css";
import Carousel from "../Carousel/Carousel";
import { useTranslation } from "react-i18next";
import image1 from "../../../Assets/Images/image1.jpg";
import image2 from "../../../Assets/Images/image2.jpg";
import image3 from "../../../Assets/Images/image3.jpg";
import image4 from "../../../Assets/Images/image4.jpg";
import image5 from "../../../Assets/Images/image5.jpg";
import image6 from "../../../Assets/Images/image6.jpg";

// TEMP!! // ADD BACKEND!!
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
        <h3>Our Biggest Goal!</h3>
        <h3>
          It is very important to us to satisfy our customers in our best way
          and to provide the best service.
        </h3>
      </div>
      {/* add about us */}
    </div>
  );
}

export default HomePage;