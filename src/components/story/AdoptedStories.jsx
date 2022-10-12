import storiesArray from "../../data/storiesArray";
import AdoptedStory from "./AdoptedStory";
import { Container } from "react-bootstrap";

const AdoptedStories = () => {
  return (
    <>
      <section className="stories-header">
        <Container>
          <h1 className="adopt-title">貓咪故事</h1>
          <p className="adopt-intro mt-4">
            這裡收錄了「我家門口有隻貓小隊」每位毛小孩的成長過程，在預約認養前不妨來閱讀這些暖心又有趣的故事吧！
          </p>
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

export default AdoptedStories;
