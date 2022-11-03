import { Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import storiesArray from "../../data/storiesArray";
import CarouselsStory from "../carousels/CarouselsStory";
import { LastSection, PageSection, Image } from "../../helpers/layout";
import { Content, H1, SectionH2 } from "../../helpers/typography";

const AdoptedStoryDetail = () => {
  const { catName } = useParams();

  const story = storiesArray.filter((story) => story.name === catName);
  const otherStories = storiesArray.filter((story) => story.name !== catName);

  const { title, author, content, image, date } = story[0];

  return (
    <>
      <PageSection className="mb-5">
        <Container>
          <H1 className="text-center">{title}</H1>
          <Content className="text-center my-3">
            {date} {author} 撰寫
          </Content>
          <Content className="detail-story-content">{content[1]}</Content>
          <Row className="my-4">
            <Col xs={12} md={6}>
              <Image src={image[0].image} alt={title} />
            </Col>
            <Col xs={12} md={6}>
              <Image src={image[1].image} alt={title} />
            </Col>
          </Row>
          <Content>{content[2]}</Content>
        </Container>
      </PageSection>

      <LastSection $mode="yellow">
        <Container className="position-relative">
          <SectionH2>貓咪故事</SectionH2>
          <CarouselsStory data={otherStories}></CarouselsStory>
        </Container>
      </LastSection>
    </>
  );
};

export default AdoptedStoryDetail;
