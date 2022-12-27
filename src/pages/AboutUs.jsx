import { Container, Row, Col } from "react-bootstrap";
import langOrg from "../images/aboutUs/langOrg.jpg";
import hccp from "../images/aboutUs/hccp.jpg";
import iconRemind from "../images/icons/icon-remind.svg";
import iconProcess from "../images/icons/icon-process.svg";
import iconGame from "../images/icons/icon-game.svg";
import {
  Image,
  ImageSection,
  LastSection,
  LittleSection,
} from "../helpers/layout";
import AboutBg from "../images/aboutUs/bg-aboutus.jpg";
import styled from "styled-components";
import {
  Ahref,
  Content,
  ContentTitle,
  H1,
  SectionH2,
} from "../helpers/typography";
import { device } from "../helpers/breakpoints";

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

const ContentContainer = styled.div`
  display: grid;
  gap: 16px;
  margin-top: 24px;
  @media ${device.tabletH} {
    gap: 20px;
    margin-top: 0;
  }
`;

const Important = styled.span`
  font-weight: 700;
`;

const Feature = styled.div`
  width: 75%;
  margin: 20px auto 0;
  text-align: center;

  @media ${device.tabletH} {
    margin-top: 30px;
  }
`;

const AboutUs = () => {
  return (
    <>
      <ImageSection src={AboutBg}>
        <Container>
          <Title title="true">關於我們</Title>
          <Subtitle>
            浪浪工作坊團隊於飛捷文教基金會 Design for Taiwan
            計畫相識，每位成員皆十分關注臺灣流浪動物議題。我們殷切期望凝聚各方力量，因此與「我家門口有隻貓小隊」合作，希望讓每隻浪浪都能擁有安穩舒適的歸屬。
          </Subtitle>
        </Container>
      </ImageSection>
      <LittleSection>
        <Container>
          <SectionH2>組織源起</SectionH2>
          <Row className="align-items-center mt-4">
            <Col xs={12} lg={4}>
              <Image src={langOrg} alt="浪浪工作坊" />
            </Col>
            <Col xs={12} lg={8}>
              <ContentContainer>
                <Content>
                  2017
                  年零安樂死政策上路後，全台一半以上收容所出現超量收容問題，擁擠的空間讓動物生活品質下降，出現心理壓力、更容易打架、群體感染等問題⋯⋯。
                </Content>
                <Content>
                  我們是浪浪工作坊，一群因飛捷文教基金會 Design for Taiwan
                  計畫而相聚的大學生，每位團隊成員都很喜歡小動物，也十分關注臺灣流浪動物議題，因而決定以設計思考來減緩問題。
                </Content>
                <Content>
                  我們希望透過設計 Langtown
                  平臺來優化認養人的認養體驗，並改善認養人與中途機構缺乏信任和理念衝突的認養洽談過程，以提高中途機構認養率，最終讓每隻浪浪能找到一個溫暖的家！
                </Content>
                <Content>
                  <Important>若有平臺相關疑問請聯絡浪浪工作坊｜</Important>
                  <Ahref href="mailto:langlangdog@gmail.com">
                    langlangdog@gmail.com
                  </Ahref>
                </Content>
              </ContentContainer>
            </Col>
          </Row>
        </Container>
      </LittleSection>
      <LittleSection>
        <Container>
          <SectionH2>合作夥伴</SectionH2>
          <Row className="align-items-center mt-4">
            <Col xs={12} lg={4}>
              <Image src={hccp} alt="我家門口有隻貓" />
            </Col>
            <Col xs={12} lg={8}>
              <ContentContainer>
                <Content>
                  我家門口有隻貓——新竹市街貓絕育計畫執行小隊由四位志同道合的志工組成。志工來自各行各業，因為愛護動物，秉持著「想多為他們做些什麼」這樣簡單的理想，無償利用自己的零碎空閒時間，投入動保工作。
                </Content>
                <Content>
                  團隊的主要任務是 TNVR（誘捕 Trap、絕育 Neuter、注射疫苗
                  Vaccinate、回置
                  Return），透過高強度的區域絕育，有效且人道地控制地區浪貓繁衍。我們相信，減少浪貓的數量，也能降低人貓衝突與種種社會問題。同時，當貓不再俯首即是，才能減輕各收容場域的負擔，並提升照護品質。
                </Content>
                <Content>
                  在執行 TNVR
                  的過程中，經常遇到不適合原放的貓，如：傷貓、病貓、幼貓。若志工家的空間許可，會將這些貓帶回中途，並在給予必要的醫療照護和親訓後，透過問卷、訪談、與貓互動等程序，謹慎篩選最適合的家庭送養，並於送養後進行追蹤，確保貓適應良好、獲得妥善的照顧。
                </Content>
                <Content>
                  除了 TNVR
                  和中途送養，我們也重視教育輔導的任務。從宣傳正確觀念開始，使民眾了解「以結紮代替撲殺」、「動物安葬」、「乾淨餵食」的重要性。我們也希望能前進到校園，舉辦公益講座，因為唯有使動保教育向下紮根，才能使下一代更懂得尊重生命、維護動物權益。
                </Content>
                <Content>
                  <Important>若有認養相關疑問請聯絡貓小隊｜</Important>
                  <Ahref
                    href="https://www.facebook.com/profile.php?id=100037388006208&ref=page_internal"
                    target="_blank"
                    rel="noreferrer"
                  >
                    我家門口有隻貓臉書粉專
                  </Ahref>
                </Content>
              </ContentContainer>
            </Col>
          </Row>
        </Container>
      </LittleSection>
      <LastSection>
        <Container>
          <SectionH2>認養平臺特色</SectionH2>
          <Row className="align-items-center">
            <Col xs={12} md={4}>
              <Feature>
                <div className="feature-img">
                  <Image src={iconRemind} alt="認養前須知的大小事叮嚀" />
                </div>
                <ContentTitle className="mt-3">
                  認養前須知的大小事叮嚀
                </ContentTitle>
              </Feature>
              <div className="feature"></div>
            </Col>
            <Col xs={12} md={4}>
              <Feature>
                <div className="feature-img">
                  <Image src={iconProcess} alt="寵物飼養知識檢核小遊戲" />
                </div>
                <ContentTitle className="mt-3">
                  資訊清楚透明的認養流程
                </ContentTitle>
              </Feature>
            </Col>
            <Col xs={12} md={4}>
              <Feature>
                <div className="feature-img">
                  <Image src={iconGame} alt="寵物飼養知識檢核小遊戲" />
                </div>
                <ContentTitle className="mt-3">
                  寵物飼養知識檢核小遊戲
                </ContentTitle>
              </Feature>
            </Col>
          </Row>
        </Container>
      </LastSection>
    </>
  );
};

export default AboutUs;
