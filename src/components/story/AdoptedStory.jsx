import { Col, Row } from "react-bootstrap";
import Button from "../Button";

const AdoptedStory = (props) => {
  const { story } = props;

  return (
    <Row className="adopt-story align-items-center">
      <Col xs={12} lg={5}>
        <div className="story-img">
          <img src={story.image[0].image} alt={story.title} />
        </div>
      </Col>
      <Col xs={12} lg={7}>
        <div className="story-detail">
          <div className="story-header d-flex justify-content-between">
            <div className="story-title">{story.title}</div>
            <div className="story-date">{story.date}</div>
          </div>
          <div className="story-content">{story.content[0]} </div>
          <div className="story-button">
            <Button active to={`/adoptedstories/${story.name}`}>
              閱讀更多
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default AdoptedStory;
