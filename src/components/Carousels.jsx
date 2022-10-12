import { Container } from "react-bootstrap";
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import { useRef } from "react";
import { useContainerDimensions } from "../helpers/useContainerDimension";
import InfoCard from "./InfoCard";
import infoArray from "../data/infoArray";

const Carousels = () => {
  const carouselsref = useRef();
  const cardref = useRef();

  //BUG
  const { width } = useContainerDimensions(cardref);

  let currentSlide = 1;
  const slides = infoArray.length;

  //BUG
  const plusSlide = () => {
    carouselsref.current.style.left = `${currentSlide * (width + 16) * -1}px`;
    currentSlide += 1;

    if (currentSlide === slides) {
      currentSlide = 1;
    }
    console.log(currentSlide);
  };

  //BUG
  const minusSlide = () => {
    carouselsref.current.style.left = `${currentSlide * (width + 16) * -1}px`;
    currentSlide -= 1;

    if (currentSlide === -1) {
      currentSlide = slides - 2;
    }
    console.log(currentSlide);
  };

  return (
    <section className="adopt-info">
      <Container>
        <div className="info-header d-flex justify-content-between align-items-center">
          <h3>認養資訊</h3>
          <div className="button-control d-flex">
            <div className="btn-direction" onClick={minusSlide}>
              <FiArrowLeft />
            </div>
            <div className="btn-direction" onClick={plusSlide}>
              <FiArrowRight />
            </div>
          </div>
        </div>
        <div className="carousels">
          <div className="carousel-content" ref={carouselsref}>
            {infoArray.map((item, index) => {
              return <InfoCard item={item} key={index} card={cardref} />;
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Carousels;
