import { Container } from "react-bootstrap";
import { useRef } from "react";
import { useContainerDimensions } from "../../helpers/useContainerDimension";
import CarouselsButtons from "./CarouselsButtons";
import SingleImage from "../card/SingleImage";
import { useNavigate } from "react-router-dom";

const Carousels = (props) => {
  const { header, data } = props;

  const carouselsref = useRef();
  const cardref = useRef();
  const navigate = useNavigate();

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

  const otherStories = (item) => {
    navigate(`/adoptedstories/${item.name}`);
  };

  return (
    <section className="carousels-story">
      <Container>
        <div className="story-header d-flex justify-content-between align-items-center">
          <h3>{header}</h3>
          <CarouselsButtons plusSlide={plusSlide} minusSlide={minusSlide} />
        </div>
        <div className="carousels">
          <div className="carousel-list" ref={carouselsref}>
            {data.map((item, index) => {
              return (
                <div
                  className="carousel-story-card"
                  ref={cardref}
                  key={index}
                  onClick={() => otherStories(item)}
                >
                  <SingleImage item={item} />
                  <div className="story-card-name">{item.title}</div>
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
