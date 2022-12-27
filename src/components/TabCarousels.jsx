import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import iconAttitude from "../images/icons/icon-attitude.svg";
import iconMoney from "../images/icons/icon-wealth.svg";
import iconTime from "../images/icons/icon-time.svg";
import iconKnowledge from "../images/icons/icon-book.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../helpers/colors";
import { Image } from "../helpers/layout";
import { Content } from "../helpers/typography";

const TabHeader = styled(Link)`
  background-color: ${colors.background};
  border-radius: 50%;
  padding: 20px;
  margin: 0 auto 50px;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  display: block;
  width: 50%;
  text-decoration: none;
`;

//BUG
function TabCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      interval={null}
      indicators={false}
    >
      <Carousel.Item>
        <TabHeader to="/adoptionnotices/attitude">
          <Image src={iconAttitude} alt="attitude" />
          <Content>心態</Content>
        </TabHeader>
      </Carousel.Item>
      <Carousel.Item>
        <TabHeader to="/adoptionnotices/wealth">
          <Image src={iconMoney} alt="money" />
          <Content>經濟</Content>
        </TabHeader>
      </Carousel.Item>
      <Carousel.Item>
        <TabHeader to="/adoptionnotices/time">
          <Image src={iconTime} alt="time" />
          <Content>時間</Content>
        </TabHeader>
      </Carousel.Item>
      <Carousel.Item>
        <TabHeader to="/adoptionnotices/knowledge">
          <Image src={iconKnowledge} alt="knowledge" />
          <Content>知識</Content>
        </TabHeader>
      </Carousel.Item>
    </Carousel>
  );
}

export default TabCarousel;
