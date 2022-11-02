import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import iconAttitude from "../images/icons/icon-attitude.svg";
import iconMoney from "../images/icons/icon-wealth.svg";
import iconTime from "../images/icons/icon-time.svg";
import iconBook from "../images/icons/icon-book.svg";
import styled from "styled-components";
import { device } from "../helpers/breakpoints";
import { Content, H2 } from "../helpers/typography";
import { Image } from "../helpers/layout";
import { colors } from "../helpers/colors";

const Introduction = styled.div`
  text-align: justify;
  @media ${device.tablet} {
    width: 70%;
    margin: auto;
  }
`;
const Category = styled(Link)`
  display: block;
  width: 60%;
  margin: 20px auto;
  background-color: ${colors.background};
  padding: 2.5rem;
  box-sizing: border-box;
  border-radius: 50%;
  text-align: center;
  text-decoration: none;
  @media ${device.tablet} {
    width: 80%;
    padding: 1.8rem 2.5rem;
  }
  &:hover {
    box-shadow: 0px 0px 20px #fee4c8f6;
    transition: 0.5s;
    background-color: ${colors.secondary};
  }
`;

const AdoptNotice = (props) => {
  return (
    <>
      <Introduction className="mt-4 px-3">
        <Content>
          在展開認養的程序之前，不知道你對於養貓咪做了哪些準備？知道有那些注意事項嗎？是否有堅強的心理，足以面對接下來的各種挑戰？是否有足夠的金錢來源，能夠負擔貓咪成長中的每一個蛻變？能不能每天預留一些時間，享受與貓咪的相處時光？或是呀，有沒有努力查詢更多的認養知識，守護未來飼養的甜蜜負擔？沒關係，現在有我們的出現～我們將帶領你備足心靈上的需求與實質上的裝備，讓你快樂地成為合格飼主！
        </Content>
      </Introduction>
      <Row className="mt-5 justify-content-around">
        <Col xs={12} md={6} lg={3}>
          <Category to="/adoptionnotices/attitude">
            <Image src={iconAttitude} alt="心態" />
            <H2>心態</H2>
          </Category>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <Category to="/adoptionnotices/wealth">
            <Image src={iconMoney} alt="經濟" />
            <H2>經濟</H2>
          </Category>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <Category to="/adoptionnotices/time">
            <Image src={iconTime} alt="時間" />
            <H2>時間</H2>
          </Category>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <Category to="/adoptionnotices/knowledge">
            <Image src={iconBook} alt="知識" />
            <H2>知識</H2>
          </Category>
        </Col>
      </Row>
    </>
  );
};

export default AdoptNotice;
