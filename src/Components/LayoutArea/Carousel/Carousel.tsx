import ImageCarousel from "react-material-ui-carousel";
import "./Carousel.css";
interface CarouselProps {
  images: string[];
}

function Carousel(props: CarouselProps) {
  return (
    <div className="Carousel">
      <ImageCarousel
        className="CarouselComponent"
        autoPlay
        stopAutoPlayOnHover
        animation="slide"
        duration={1200}
        interval={15000}
        height={"50vh"}
        swipe
        navButtonsProps={{
          style: {
            color: "black",
            backgroundColor: "white",
            borderRadius: 10,
            padding: 20,
          },
        }}
      >
        {/* Images inside the carosel: */}
        {props.images.map((image, index) => (
          <img className="CarouselImages" src={image} key={index} />
        ))}
        
      </ImageCarousel>
    </div>
  );
}

export default Carousel;

// {props.images.map((e, index) =>
//     <img src={e} key={index}/>
// )}
