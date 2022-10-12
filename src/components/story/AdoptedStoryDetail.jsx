import { Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import storiesArray from "../../data/storiesArray";
import CarouselsStory from "../carousels/CarouselsStory";

const AdoptedStoryDetail = () => {
  const { catName } = useParams();

  const story = storiesArray.filter((story) => story.name === catName);
  const otherStories = storiesArray.filter((story) => story.name !== catName);

  const { title, author, content, image, date } = story[0];

  return (
    <>
      <Container>
        <div className="detail-story">
          <h1 className="detail-story-title text-center">{title}</h1>
          <p className="detail-story-date text-center">
            {date} {author} 撰寫
          </p>
          <p className="detail-story-content">{content[0]}</p>
          <div className="cat-img">
            <Row>
              <Col xs={12} md={6}>
                <img
                  className="detail-story-image"
                  src={image[1].image}
                  alt={title}
                />
              </Col>
              <Col xs={12} md={6}>
                <img
                  className="detail-story-image"
                  src={image[2].image}
                  alt={title}
                />
              </Col>
            </Row>
          </div>
          <p className="detail-story-content">{content[1]}</p>
        </div>
      </Container>
      <CarouselsStory header={"貓咪故事"} data={otherStories} />
    </>
  );
};

export default AdoptedStoryDetail;
