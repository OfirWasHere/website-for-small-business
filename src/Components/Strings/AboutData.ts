import AboutCardModel from "../Models/cardModel";
import customersImage from "../../Assets/Images/Card-images/image1.jpg"
import handShakeImage from "../../Assets/Images/Card-images/image2.jpg"
import clockImage from "../../Assets/Images/Card-images/image3.jpg"

export const AboutData:AboutCardModel[] = [
    {
      title: "AboutDataStrings.cardOne.cardTitle",
      description: "AboutDataStrings.cardOne.cardDescription",
      image: clockImage,
      imageDesc:customersImage
    },

    {
      title: "AboutDataStrings.cardTwo.cardTitle",
      description: "AboutDataStrings.cardTwo.cardDescription",
      image: customersImage,
      imageDesc:handShakeImage

    },

    {
      title: "AboutDataStrings.cardThree.cardTitle",
      description: "AboutDataStrings.cardThree.cardDescription",
      image: handShakeImage,
      imageDesc:clockImage
    },
  ];