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

const Homepage = () => {
  return (
    <>
      <div className="introduction">
        <div className="icon-langtown text-center px-3">
          <img src={iconLangtown} alt="icon-langtown" />
        </div>
        <div className="langtown-intro text-center px-3">
          <p className="mt-4">
            歡迎來到 Langtown 流浪動物認養平臺！
            <br />
            我們是浪浪工作坊，團隊的每位成員都很喜歡小動物，也十分關注臺灣流浪動物議題
          </p>
          <p className="mt-4 scroll-down">往下瀏覽</p>
        </div>
        <div className="bg-mountain">
          <img src={bgMountains} alt="bg-mountains" />
        </div>
      </div>
      <section className="about">
        <Container>
          <h3>關於我們</h3>
          <Row className="align-items-center justify-content-between mt-5">
            <Col xs={12} md={5}>
              <div className="about-dog">
                <img src={aboutDog} alt="about-dog" />
              </div>
            </Col>
            <Col xs={12} md={7}>
              <p>大家好，這裡是 Langtown 流浪動物認養平臺！</p>
              <p className="my-4 about-intro">
                我們是浪浪工作坊團隊，是一群來自臺灣不同地區的大學生，因為每位團隊成員都很喜歡小動物，也十分關注臺灣流浪動物議題，因此在飛捷基金會廈的設計思考活動相識，並開始進行流浪動物的資料搜尋、實地訪查、線上訪談的事項，希望能藉由我們的力量，改善收容中心等地方，因為認養人與機構之間長期缺乏信任、理念衝突的問題，從而提升認養率，讓良好的風氣生生不息，讓每隻浪浪有安全舒適的歸屬。
              </p>
              <div className="about-button">
                <Button text={"瞭解更多"} to={"/aboutus"} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Carousels header={"認養資訊"} data={infoArray} />
      <section className="adopt-process">
        <Container>
          <h3>認養流程</h3>
          <AdoptProcesses />
          <div className="process-button">
            <Button text={" 預約認養"} to={"/reservation"} />
          </div>
        </Container>
      </section>
      <section className="adopt-stories">
        <Container>
          <h3>貓咪故事</h3>
          {storiesArray.map((story, index) => {
            return <AdoptedStory story={story} key={index} />;
          })}
        </Container>
      </section>
    </>
  );
};

export default Homepage;
