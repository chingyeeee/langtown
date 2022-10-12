import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";

const CarouselsButtons = (props) => {
  const { minusSlide, plusSlide } = props;
  return (
    <div className="carousel-button">
      <div className="carousel-direction" onClick={minusSlide}>
        <FiArrowLeft />
      </div>
      <div className="carousel-direction" onClick={plusSlide}>
        <FiArrowRight />
      </div>
    </div>
  );
};

export default CarouselsButtons;
