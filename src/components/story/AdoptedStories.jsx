import storiesArray from "../../data/storiesArray";
import AdoptedStory from "./AdoptedStory";
import { Container } from "react-bootstrap";
import { ImageSection, LittleSection } from "../../helpers/layout";
import StoriesBg from "../../images/adoptStories/bg-adoptStories.jpg";
import styled from "styled-components";
import { H1, Content, SectionH2 } from "../../helpers/typography";
import { device } from "../../helpers/breakpoints";

const Title = styled(H1)`
  padding-top: 30vh;
`;

const Subtitle = styled(Content)`
  color: white;
  text-align: center;
  margin-top: 16px;
  @media ${device.tabletH} {
    max-width: 500px;
    margin: 16px auto 0;
  }
`;

const AdoptedStories = () => {
  return (
    <>
      <ImageSection src={StoriesBg}>
        <Container>
          <Title title="true">貓咪故事</Title>
          <Subtitle>
            這裡收錄了「我家門口有隻貓小隊」每位毛小孩的成長過程，在預約認養前不妨來閱讀這些暖心又有趣的故事吧！
          </Subtitle>
        </Container>
      </ImageSection>
      <LittleSection>
        <Container>
          <SectionH2>貓咪故事</SectionH2>
          {storiesArray.map((story, index) => {
            return <AdoptedStory story={story} key={index} />;
          })}
        </Container>
      </LittleSection>
    </>
  );
};

export default AdoptedStories;
