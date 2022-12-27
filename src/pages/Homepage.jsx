import iconLangtown from "../images/icons/icon-langtown.svg";
import bgMountains from "../images/hompage/bg-mountains.svg";
import aboutDog from "../images/hompage/about-dog.svg";
import { Container, Row, Col } from "react-bootstrap";
import Carousels from "../components/carousels/Carousels";
import storiesArray from "../data/storiesArray";
import AdoptedStory from "../components/story/AdoptedStory";
import AdoptProcesses from "../components/AdoptProcesses";
import Button from "../components/Button";
import infoArray from "../data/infoArray";
import { SectionH2, Content } from "../helpers/typography";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { colors } from "../helpers/colors";
import { device } from "../helpers/breakpoints";
import { LittleSection, LastSection, Image } from "../helpers/layout";
import { CarouselExample } from "../components/carousels/CarouselExample";

const scrollDown = keyframes`
  from{
    top: 35px;
  }
  to{
    top: 55px;
    opacity: 0;
  }
`;

const ScrollDown = styled(Content)`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 50px;
    margin: auto;
    animation: ${scrollDown} infinite 1s;
  }

  @media screen and (max-width: 767px) {
    &::after {
      width: 15px;
      height: 10px;
      border-top: 10px solid ${colors.black};
      border-left: 8px solid ${colors.transparent};
      border-right: 8px solid ${colors.transparent};
    }
  }

  @media ${device.tablet} {
    &::after {
      width: 25px;
      height: 15px;
      border-top: 15px solid ${colors.black};
      border-left: 12px solid ${colors.transparent};
      border-right: 12px solid ${colors.transparent};
    }
  } ;
`;

const Introduction = styled.div`
  @media ${device.tablet} {
    width: 70%;
    margin: auto;
  }
  @media ${device.tabletH} {
    width: 100%;
  }
`;

const LangtownLogo = styled.div`
  @media ${device.tablet} {
    width: 70%;
    margin: auto;
  }
  @media ${device.tabletH} {
    width: 40%;
  }
`;

const DogImg = styled.div`
  margin: auto;
  @media screen and (max-width: 767px) {
    width: 50%;
    margin-bottom: 36px;
  }
  @media ${device.tablet} {
    width: 60%;
  }
`;

const BtnWrapper = styled.div`
  text-align: ${(props) => (props.center ? "center" : "right")};
  @media ${device.tablet} {
    text-align: right;
  }
  @media ${device.laptop} {
    padding-top: 30px;
  }
`;

const HomeSection = styled.section`
  padding-top: 120px;
`;

const HomeBg = styled(Image)`
  border-radius: 0px;
`;

const Homepage = () => {
  return (
    <>
      <HomeSection>
        <LangtownLogo className="text-center px-3">
          <Image src={iconLangtown} alt="icon-langtown" />
        </LangtownLogo>
        <Introduction>
          <Content className="mt-4 text-center px-3">
            歡迎來到 Langtown 流浪動物認養平臺！
            <br />
            在這裡你可以找尋有緣的毛小孩，牽手成為一輩子相互陪伴的家人。
          </Content>
          <ScrollDown className="mt-4 text-center">往下瀏覽</ScrollDown>
        </Introduction>
        <HomeBg className="mt-5" src={bgMountains} alt="bg-mountains" />
      </HomeSection>
      <LittleSection>
        <Container>
          <SectionH2>關於我們</SectionH2>
          <Row className="align-items-center justify-content-between mt-5">
            <Col xs={12} md={5}>
              <DogImg>
                <Image src={aboutDog} alt="about-dog" />
              </DogImg>
            </Col>
            <Col xs={12} md={7}>
              <Content className="my-4 text-justify">
                大家好，我們是浪浪工作坊！每位團隊成員都很喜歡小動物，十分關注臺灣流浪動物議題，也對社會設計抱有熱忱，因此在飛捷文教基金會
                Design for Taiwan 計畫相識，進行一連串臺灣流浪動物議題探索、架設
                Langtown
                認養平臺，並與「我家門口有隻貓——新竹市街貓絕育計畫執行小隊」合作進行送養。希望藉由我們的力量，優化認養體驗以提升認養狀況，最終願景希望能讓每隻浪浪都擁有安穩舒適的歸屬。
              </Content>
              <BtnWrapper center>
                <Button active="true" to={"/aboutus"}>
                  瞭解更多
                </Button>
              </BtnWrapper>
            </Col>
          </Row>
        </Container>
      </LittleSection>
      <LittleSection $mode="orange">
        <Container className="position-relative">
          <SectionH2>認養資訊</SectionH2>
          {/* <Carousels data={infoArray} /> */}
          <CarouselExample show={4} infiniteLoop>
            <div>
              <div style={{ padding: 8 }}>
                <img
                  src="https://picsum.photos/id/1/200/300"
                  alt="placeholder"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div>
              <div style={{ padding: 8 }}>
                <img
                  src="https://picsum.photos/id/1/200/300"
                  alt="placeholder"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div>
              <div style={{ padding: 8 }}>
                <img
                  src="https://picsum.photos/id/1/200/300"
                  alt="placeholder"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div>
              <div style={{ padding: 8 }}>
                <img
                  src="https://picsum.photos/id/1/200/300"
                  alt="placeholder"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div>
              <div style={{ padding: 8 }}>
                <img
                  src="https://picsum.photos/id/1/200/300"
                  alt="placeholder"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div>
              <div style={{ padding: 8 }}>
                <img
                  src="https://picsum.photos/id/1/200/300"
                  alt="placeholder"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div>
              <div style={{ padding: 8 }}>
                <img
                  src="https://picsum.photos/id/1/200/300"
                  alt="placeholder"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div>
              <div style={{ padding: 8 }}>
                <img
                  src="https://picsum.photos/id/1/200/300"
                  alt="placeholder"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </CarouselExample>
        </Container>
      </LittleSection>

      <LittleSection $mode="orange">
        <Container>
          <SectionH2>認養流程</SectionH2>
          <AdoptProcesses />
          <div className="process-button text-center mt-5">
            <Button active="true" to={"/reservation"}>
              預約認養
            </Button>
          </div>
        </Container>
      </LittleSection>
      <LastSection>
        <Container>
          <SectionH2>貓咪故事</SectionH2>
          {storiesArray.map((story, index) => {
            return <AdoptedStory story={story} key={index} />;
          })}
        </Container>
      </LastSection>
    </>
  );
};

export default Homepage;
