import Carousel from "react-bootstrap/Carousel";
import { carouselData } from "../utils/helper";

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <Carousel>
        {carouselData.map((carousel, index) => (
          <Carousel.Item key={carousel.id + index}>
            <div className="carousel-img-container">
              <img
                src={carousel.imagePath + carousel.id + ".jpeg"}
                alt="carousel-img"
              />
            </div>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
