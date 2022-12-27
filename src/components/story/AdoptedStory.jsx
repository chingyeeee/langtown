import { Col, Row } from "react-bootstrap";
import Button from "../Button";
import styled from "styled-components";
import { device } from "../../helpers/breakpoints";
import { Content } from "../../helpers/typography";
import { Image } from "../../helpers/layout";

const AdoptStory = styled(Row)`
  margin-top: 20px;
  align-items: center;

  @media ${device.tabletH} {
    margin-top: 30px;
  }
`;

const StoryArticle = styled.div`
  @media ${device.tabletH} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const StoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const StoryContent = styled.div`
  text-align: justify;
  margin-top: 16px;
  @media ${device.tabletH} {
    margin: 30px 0;
  }
`;

const StoryBtn = styled.div`
  margin-top: 20px;
  text-align: center;
  @media ${device.tabletH} {
    text-align: right;
  }
`;

const AdoptedStory = (props) => {
  const { story } = props;

  return (
    <AdoptStory>
      <Col xs={12} lg={5}>
        <Image src={story.image[0].image} alt={story.title} />
      </Col>
      <Col xs={12} lg={7}>
        <StoryArticle>
          <StoryHeader>
            <Content>{story.title}</Content>
            <Content content="true">{story.date}</Content>
          </StoryHeader>
          <StoryContent>
            <Content content="true">{story.content[0]}</Content>
          </StoryContent>
          <StoryBtn>
            <Button active="true" to={`/adoptedstories/${story.name}`}>
              閱讀更多
            </Button>
          </StoryBtn>
        </StoryArticle>
      </Col>
    </AdoptStory>
  );
};

export default AdoptedStory;
