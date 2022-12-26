import { useRef } from "react";
import { useContainerDimensions } from "../../helpers/useContainerDimension";
import CarouselsButtons from "./CarouselsButtons";
import styled from "styled-components";
import { device } from "../../helpers/breakpoints";
import SingleImage from "../card/SingleImage";
import Button from "../Button";
import { Content } from "../../helpers/typography";

const InfoCard = styled.div`
  width: 320px;
  height: 220px;
  padding: 1.5rem;
  flex-shrink: 0;
  display: flex;
  gap: 16px;
  background-color: #fffef5;
  border-radius: 20px;

  @media ${device.tablet} {
    width: 380px;
    height: 280px;
  }

  @media ${device.tabletH} {
    width: 430px;
    height: 300px;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    width: 40%;
    .content-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
      flex-grow: 1;
      .list-item {
        display: flex;
        gap: 8px;
      }
    }
  }
`;

const ImageWrapper = styled.div`
  width: 60%;
  border-radius: 20px;
  overflow: hidden;
`;

//卡片裡面右邊的內容
const ContentList = ({ item }) => {
  const { name, age, gender, type, id } = item;

  return (
    <div className="card-content">
      <ul className="content-list">
        <li className="list-item">
          <Content>名字</Content>
          <Content content="true">{name}</Content>
        </li>
        <li className="list-item">
          <Content>年齡</Content>
          <Content content="true">{age}</Content>
        </li>
        <li className="list-item">
          <Content>性別</Content>
          <Content content="true">{gender}</Content>
        </li>
        <li className="list-item">
          <Content>品種</Content>
          <Content content="true">{type}</Content>
        </li>
      </ul>
      <div className="text-end">
        <Button active="true" to={`/adoptioninformations/${id}`}>
          瞭解更多
        </Button>
      </div>
    </div>
  );
};

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

  return (
    <>
      <CarouselsButtons plusSlide={plusSlide} minusSlide={minusSlide} />
      <Carousel>
        <CarouselList ref={carouselsref}>
          {data.map((item, index) => {
            return (
              <InfoCard ref={cardref} key={index}>
                <ImageWrapper>
                  <SingleImage item={item} />
                </ImageWrapper>
                <ContentList item={item} />
              </InfoCard>
            );
          })}
        </CarouselList>
      </Carousel>
    </>
  );
};

export default Carousels;
