import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { colors } from "../helpers/colors";
import { device } from "../helpers/breakpoints";
import { Content, H1, H2 } from "../helpers/typography";
import { OnePageSection } from "../helpers/layout";
import SingleImage from "./card/SingleImage";
import Button from "./Button";
import infoArray from "../data/infoArray";

const InfoCard = styled.div`
  display: flex;
  gap: 16px;
  border-radius: 20px;
  padding: 1rem;
  height: 250px;
  margin: 16px 0;
  background-color: ${colors.background};

  @media ${device.tablet} {
    height: 280px;
  }

  @media ${device.tabletH} {
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
  .carouselCard-image {
    width: 60%;
    border-radius: 20px;
    overflow: hidden;
  }
`;

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
      <div className="item-button text-end">
        <Button active="true" to={`/adoptioninformations/${id}`}>
          瞭解更多
        </Button>
      </div>
    </div>
  );
};

const AdoptionInformations = () => {
  return (
    <OnePageSection>
      <Container>
        <H1>開放認養資訊</H1>
        <H2 className="text-center my-3">來看看有沒有喜歡的貓咪吧！</H2>
        <Row>
          {infoArray.map((item, index) => {
            return (
              <Col xs={12} md={6} key={index}>
                <InfoCard>
                  <div className="carouselCard-image">
                    <SingleImage item={item} />
                  </div>
                  <ContentList item={item} />
                </InfoCard>
              </Col>
            );
          })}
        </Row>
      </Container>
    </OnePageSection>
  );
};

export default AdoptionInformations;
