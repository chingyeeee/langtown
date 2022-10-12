import { Container } from "react-bootstrap";
import { useRef } from "react";
import { useContainerDimensions } from "../../helpers/useContainerDimension";
import CarouselsButtons from "./CarouselsButtons";
import SingleImage from "../card/SingleImage";
import CardContentList from "../card/CardContentList";

const Carousels = (props) => {
  const { header, data } = props;

  const carouselsref = useRef();
  const cardref = useRef();

  const { width } = useContainerDimensions(cardref);

  let currentSlide = 0;
  const slides = data.length;

  const plusSlide = () => {
    currentSlide += 1;
    carouselsref.current.style.left = `${currentSlide * (width + 16) * -1}px`;

    if (currentSlide >= slides - 1) {
      currentSlide = 0;
      carouselsref.current.style.left = `${currentSlide * (width + 16) * -1}px`;
    }
  };

  const minusSlide = () => {
    currentSlide -= 1;
    carouselsref.current.style.left = `${currentSlide * (width + 16) * -1}px`;

    if (currentSlide <= -1) {
      currentSlide = slides - 2;
      carouselsref.current.style.left = `${currentSlide * (width + 16) * -1}px`;
    }
  };

  return (
    <section className="adopt-info">
      <Container>
        <div className="info-header d-flex justify-content-between align-items-center">
          <h3>{header}</h3>
          <CarouselsButtons plusSlide={plusSlide} minusSlide={minusSlide} />
        </div>
        <div className="carousels">
          <div className="carousel-list" ref={carouselsref}>
            {data.map((item, index) => {
              return (
                <div className="carousel-card" ref={cardref} key={index}>
                  <div className="carouselCard-image">
                    <SingleImage item={item} />
                  </div>
                  <CardContentList item={item} />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Carousels;
