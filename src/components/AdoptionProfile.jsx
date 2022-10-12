import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import infoArray from "../data/infoArray";
import ProfileContentList from "../components/card/ProfileContentList";
import ThumbnailsImages from "./card/ThumbnailsImages";

const AdoptionProfile = () => {
  const { Id } = useParams();
  const newInfo = infoArray.filter((info) => info.id === Id);
  const info = newInfo[0];

  return (
    <>
      <Container>
        <div className="adoption-profile">
          <h1 className="text-center profile-title">檔案資料夾</h1>
          <div className="profile-content">
            <Row>
              <Col xs={12} lg={7}>
                <div className="item-img">
                  <ThumbnailsImages image={info.image} />
                </div>
              </Col>
              <Col xs={12} lg={5}>
                <ProfileContentList item={info} />
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AdoptionProfile;
