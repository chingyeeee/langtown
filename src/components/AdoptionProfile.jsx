import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import infoArray from "../data/infoArray";
import ThumbnailsImages from "./card/ThumbnailsImages";
import { H1, Content } from "../helpers/typography";
import Button from "./Button";
import styled from "styled-components";
import { device } from "../helpers/breakpoints";
import { colors } from "../helpers/colors";
import { OnePageSection } from "../helpers/layout";

const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  .content-list {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-top: 30px;
    .list-item {
      display: flex;
      gap: 8px;
    }
    .item-title {
      width: 20%;
    }
  }
  .item-button {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    gap: 16px;
  }
  @media ${device.tablet} {
    .content-list {
      gap: 8px;
      .item-title {
        width: 15%;
      }
    }
  }
  @media ${device.tabletH} {
    .content-list {
      margin-top: 0px;
      gap: 12px;
      .list-item {
        gap: 16px;
      }
      .item-title {
        width: 20%;
      }
    }
    .item-button {
      justify-content: flex-end;
    }
  }
`;

const ContentList = ({ item }) => {
  const { name, age, gender, type, ligation, medical, notes } = item;

  return (
    <ProfileCard>
      <ul className="content-list">
        <li className="list-item">
          <Content className="item-title">名字</Content>
          <Content content="true">{name}</Content>
        </li>
        <li className="list-item">
          <Content className="item-title">性別</Content>
          <Content content="true">{gender}</Content>
        </li>
        <li className="list-item">
          <Content className="item-title">年齡</Content>
          <Content content="true">{age}</Content>
        </li>
        <li className="list-item">
          <Content className="item-title">品種</Content>
          <Content content="true">{type}</Content>
        </li>
        <li className="list-item">
          <Content className="item-title">結紮狀況</Content>
          <Content content="true">
            {ligation === true ? "已結紮" : "未結紮"}
          </Content>
        </li>
        <li className="list-item">
          <Content className="item-title">醫療狀況</Content>
          <Content content="true">{medical}</Content>
        </li>
        <li className="list-item">
          <Content className="item-title">備註</Content>
          <Content content="true">{notes}</Content>
        </li>
      </ul>
      <div className="item-button">
        <Button active="true" to={"/adoptioninformations"}>
          查看其他
        </Button>
        <Button active="true" to={"/reservation"}>
          預約認養
        </Button>
      </div>
    </ProfileCard>
  );
};

const ThumbnailsWrapper = styled.div`
  a {
    text-decoration: none;
  }
  .box {
    max-height: auto !important;
    .thumbnails {
      img {
        width: 150px;
        height: 100px;
        border-radius: 10px;
        object-fit: cover;
      }
    }
    .active-thumbnail {
      border: ${colors.primary} solid 2px;
    }
    .fade:not(.show) {
      opacity: 1;
    }
  }
`;

const ProfileContent = styled.div`
  margin-top: 24px;
  background-color: $background;
  @include rounded-radius;
  padding: 24px;
`;

const AdoptionProfile = () => {
  const { Id } = useParams();
  const newInfo = infoArray.filter((info) => info.id === Id);
  const info = newInfo[0];

  return (
    <>
      <Container>
        <OnePageSection>
          <H1>檔案資料夾</H1>
          <ProfileContent>
            <Row>
              <Col xs={12} lg={7}>
                <ThumbnailsWrapper>
                  <ThumbnailsImages image={info.image} />
                </ThumbnailsWrapper>
              </Col>
              <Col xs={12} lg={5}>
                <ContentList item={info} />
              </Col>
            </Row>
          </ProfileContent>
        </OnePageSection>
      </Container>
    </>
  );
};

export default AdoptionProfile;
