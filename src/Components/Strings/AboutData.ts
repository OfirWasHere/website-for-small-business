import AboutCardModel from "../Models/cardModel";
import customersImage from "../../Assets/Images/Card-images/image1.jpg"
import handShakeImage from "../../Assets/Images/Card-images/image2.jpg"
import clockImage from "../../Assets/Images/Card-images/image3.jpg"
import { AboutDataStrings } from "./English";

export const AboutData:AboutCardModel[] = [
    {
      title: AboutDataStrings.cardTitleOne,
      description: `Lizards are a widespread group of squamate reptiles,
         with over 6,000 species, ranging across all continents except Antarctica`,
      image: clockImage,
      imageDesc:customersImage
    },

    {
      title: AboutDataStrings.cardTitleTwo,
      description: `Lizards are a widespread group of squamate reptiles,
         with over 6,000 species, ranging across all continents except Antarctica`,
      image: customersImage,
      imageDesc:handShakeImage

    },

    {
      title: AboutDataStrings.cardTitleThree,
      description: `Lizards are a widespread group of squamate reptiles,
         with over 6,000 species, ranging across all continents except Antarctica`,
      image: handShakeImage,
      imageDesc:clockImage
    },
  ];