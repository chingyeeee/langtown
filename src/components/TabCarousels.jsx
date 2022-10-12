import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import iconAttitude from "../images/icons/icon-attitude.svg";
import iconMoney from "../images/icons/icon-wealth.svg";
import iconTime from "../images/icons/icon-time.svg";
import iconKnowledge from "../images/icons/icon-book.svg";
import { Link } from "react-router-dom";

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
        <Link
          to="/adoptionnotices/attitude"
          className="tab-header text-center d-block w-50 mx-auto"
        >
          <img className="tab-img" src={iconAttitude} alt="attitude" />
          <p className="tab-title">心態</p>
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link
          to="/adoptionnotices/wealth"
          className="tab-header text-center d-block w-50 mx-auto"
        >
          <img className="tab-img" src={iconMoney} alt="money" />
          <p className="tab-title text-center">經濟</p>
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link
          to="/adoptionnotices/time"
          className="tab-header text-center d-block w-50 mx-auto"
        >
          <img className="tab-img" src={iconTime} alt="time" />
          <p className="tab-title text-center">時間</p>
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link
          to="/adoptionnotices/knowledge"
          className="tab-header text-center d-block w-50 mx-auto"
        >
          <img className="tab-img" src={iconKnowledge} alt="knowledge" />
          <p className="tab-title text-center">知識</p>
        </Link>
      </Carousel.Item>
    </Carousel>
  );
}

export default TabCarousel;
