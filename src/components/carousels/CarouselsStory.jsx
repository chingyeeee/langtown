import { useRef } from "react";
import { useContainerDimensions } from "../../helpers/useContainerDimension";
import CarouselsButtons from "./CarouselsButtons";
import SingleImage from "../card/SingleImage";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../helpers/breakpoints";
import { Content } from "../../helpers/typography";
import { colors } from "../../helpers/colors";

const StroyCard = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 300px;
  flex-direction: column;
  cursor: pointer;
  @media ${device.tablet} {
    width: 350px;
  }

  @media ${device.tabletH} {
    width: 380px;
  }

  &:hover {
    p {
      color: ${colors.primary};
      transition: 0.2s;
    }
  }
`;

const StoryName = styled(Content)`
  text-align: center;
  margin-top: 1rem;
`;

const CarouselList = styled.div`
  display: flex;
  gap: 16px;
  position: relative;
  transition: 0.5s;
  left: 0;
`;

const Carousel = styled.div`
  overflow-x: hidden;
  margin-top: 32px;
`;

const Carousels = (props) => {
  const { data } = props;

  const carouselsref = useRef();
  const cardref = useRef();
  const navigate = useNavigate();

  const { width } = useContainerDimensions(cardref);

  let currentSlide = 0;
  const slides = data.length;

  const plusSlide = () => {
    currentSlide += 1;
    carouselsref.current.style.left = `${currentSlide * (width + 16) * -1}px`;

    if (currentSlide >= slides - 2) {
      currentSlide = 0;
      carouselsref.current.style.left = `${currentSlide * (width + 16) * -1}px`;
    }
  };

  const minusSlide = () => {
    currentSlide -= 1;
    carouselsref.current.style.left = `${currentSlide * (width + 16) * -1}px`;

    if (currentSlide <= -1) {
      currentSlide = slides - 3;
      carouselsref.current.style.left = `${currentSlide * (width + 16) * -1}px`;
    }
  };

  const otherStories = (item) => {
    navigate(`/adoptedstories/${item.name}`);
  };

  return (
    <>
      <CarouselsButtons plusSlide={plusSlide} minusSlide={minusSlide} />
      <Carousel>
        <CarouselList ref={carouselsref}>
          {data.map((item, index) => {
            return (
              <StroyCard
                ref={cardref}
                key={index}
                onClick={() => otherStories(item)}
              >
                <SingleImage item={item} />
                <StoryName>{item.title}</StoryName>
              </StroyCard>
            );
          })}
        </CarouselList>
      </Carousel>
    </>
  );
};

export default Carousels;
