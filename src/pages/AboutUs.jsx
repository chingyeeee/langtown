import { Container, Row, Col } from "react-bootstrap";
import langOrg from "../images/aboutUs/langOrg.jpg";
import hccp from "../images/aboutUs/hccp.jpg";
import iconRemind from "../images/icons/icon-remind.svg";
import iconProcess from "../images/icons/icon-process.svg";
import iconGame from "../images/icons/icon-game.svg";

const AboutUs = () => {
  return (
    <>
      <section className="about-us">
        <Container>
          <h1 className="about-title">關於我們</h1>
          <p className="about-intro mt-4">
            浪浪工作坊團隊於飛捷文教基金會 Design for Taiwan
            計畫相識，每位成員皆十分關注臺灣流浪動物議題。我們殷切期望凝聚各方力量，因此與「我家門口有隻貓小隊」合作，希望讓每隻浪浪都能擁有安穩舒適的歸屬。
          </p>
        </Container>
      </section>
      <section className="about-history about-section">
        <Container>
          <h3>組織源起</h3>
          <Row className="align-items-center">
            <Col xs={12} lg={4}>
              <div className="org-img img-section">
                <img src={langOrg} alt="浪浪工作坊" />
              </div>
            </Col>
            <Col xs={12} lg={8}>
              <div className="org-detail">
                <p>
                  2017
                  年零安樂死政策上路後，全台一半以上收容所出現超量收容問題，擁擠的空間讓動物生活品質下降，出現心理壓力、更容易打架、群體感染等問題⋯⋯。
                </p>
                <p>
                  我們是浪浪工作坊，一群因飛捷文教基金會 Design for Taiwan
                  計畫而相聚的大學生，每位團隊成員都很喜歡小動物，也十分關注臺灣流浪動物議題，因而決定以設計思考來減緩問題。
                </p>
                <p>
                  我們希望透過設計 Langtown
                  平臺來優化認養人的認養體驗，並改善認養人與中途機構缺乏信任和理念衝突的認養洽談過程，以提高中途機構認養率，最終讓每隻浪浪能找到一個溫暖的家！
                </p>
                <p className="contact-email">
                  若有平臺相關疑問請聯絡浪浪工作坊｜
                  <a href="mailto:langlangdog@gmail.com">
                    langlangdog@gmail.com
                  </a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about-partner about-section">
        <Container>
          <h3>合作夥伴</h3>
          <Row className="align-items-center">
            <Col xs={12} lg={4}>
              <div className="org-img img-section">
                <img src={hccp} alt="我家門口有隻貓" />
              </div>
            </Col>
            <Col xs={12} lg={8}>
              <div className="org-detail">
                <p>
                  我家門口有隻貓——新竹市街貓絕育計畫執行小隊由四位志同道合的志工組成。志工來自各行各業，因為愛護動物，秉持著「想多為他們做些什麼」這樣簡單的理想，無償利用自己的零碎空閒時間，投入動保工作。
                </p>
                <p>
                  團隊的主要任務是 TNVR（誘捕 Trap、絕育 Neuter、注射疫苗
                  Vaccinate、回置
                  Return），透過高強度的區域絕育，有效且人道地控制地區浪貓繁衍。我們相信，減少浪貓的數量，也能降低人貓衝突與種種社會問題。同時，當貓不再俯首即是，才能減輕各收容場域的負擔，並提升照護品質。
                </p>
                <p>
                  在執行 TNVR
                  的過程中，經常遇到不適合原放的貓，如：傷貓、病貓、幼貓。若志工家的空間許可，會將這些貓帶回中途，並在給予必要的醫療照護和親訓後，透過問卷、訪談、與貓互動等程序，謹慎篩選最適合的家庭送養，並於送養後進行追蹤，確保貓適應良好、獲得妥善的照顧。
                </p>
                <p>
                  除了 TNVR
                  和中途送養，我們也重視教育輔導的任務。從宣傳正確觀念開始，使民眾了解「以結紮代替撲殺」、「動物安葬」、「乾淨餵食」的重要性。我們也希望能前進到校園，舉辦公益講座，因為唯有使動保教育向下紮根，才能使下一代更懂得尊重生命、維護動物權益。
                </p>
                <p className="contact-email">
                  若有認養相關疑問請聯絡貓小隊｜
                  <a
                    href="https://www.facebook.com/profile.php?id=100037388006208&ref=page_internal"
                    target="_blank"
                    rel="noreferrer"
                  >
                    我家門口有隻貓臉書粉專
                  </a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about-features about-section">
        <Container>
          <h3>認養平臺特色</h3>
          <Row className="align-items-center">
            <Col xs={12} md={4}>
              <div className="feature">
                <div className="feature-img">
                  <img src={iconRemind} alt="認養前須知的大小事叮嚀" />
                </div>
                <div className="feature-title">認養前須知的大小事叮嚀</div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="feature">
                <div className="feature-img">
                  <img src={iconProcess} alt="寵物飼養知識檢核小遊戲" />
                </div>
                <div className="feature-title">資訊清楚透明的認養流程</div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="feature">
                <div className="feature-img">
                  <img src={iconGame} alt="寵物飼養知識檢核小遊戲" />
                </div>
                <div className="feature-title">寵物飼養知識檢核小遊戲</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutUs;
