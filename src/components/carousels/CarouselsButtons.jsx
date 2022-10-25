import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import styled from "styled-components";
import { colors } from "../../helpers/colors";
import { device } from "../../helpers/breakpoints";

const CarouselButtons = styled.div`
  display: flex;
  gap: 16px;
  position: absolute;
  top: 0;
  right: 0;
  .carousel-direction {
    background-color: ${colors.background};
    padding: 0.5rem;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      background-color: ${colors.primary};
      transition: 0.5s;
    }
    svg {
      color: ${colors.primary};
      width: 25px;
      height: 25px;
      &:hover {
        color: ${colors.background};
        transition: 0.5s;
      }
    }
  }

  @media ${device.tabletH} {
    gap: 24px;
    .carousel-direction {
      svg {
        width: 30px;
        height: 30px;
      }
    }
  }
`;

const CarouselsButtons = (props) => {
  const { minusSlide, plusSlide } = props;
  return (
    <CarouselButtons>
      <div className="carousel-direction" onClick={minusSlide}>
        <FiArrowLeft />
      </div>
      <div className="carousel-direction" onClick={plusSlide}>
        <FiArrowRight />
      </div>
    </CarouselButtons>
  );
};

export default CarouselsButtons;
