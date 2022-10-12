import { Container, Row, Col } from "react-bootstrap";
import Card from "./card/Card";
import infoArray from "../data/infoArray";

const AdoptionInformations = () => {
  return (
    <section className="adoption-info">
      <Container>
        <h1 className="info-title">開放認養資訊</h1>
        <p className="info-intro">來看看有沒有喜歡的貓咪吧！</p>
        <Row>
          {infoArray.map((item, index) => {
            return (
              <Col xs={12} md={6} key={index}>
                <Card item={item} carouselCard={"infoCard"} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default AdoptionInformations;
