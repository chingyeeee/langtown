import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import TabCarousel from "../TabCarousels";
import styled from "styled-components";
import { device } from "../../helpers/breakpoints";
import { colors } from "../../helpers/colors";
import { Content, H2 } from "../../helpers/typography";
import { fontSize } from "../../helpers/fontSize";

const NoticeList = styled.div`
  margin-top: 30px;
  @media ${device.tabletH} {
    margin-top: 50px;
  }
`;

const WebListCate = styled(Row)`
  display: none;
  @media ${device.tablet} {
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin-top: 32px;
  }
`;

const ListCate = styled(Link)`
  padding: 1rem 0;
  margin: 0 0.75rem;
  text-decoration: none;
  background-color: ${(props) =>
    props.active ? colors.background : colors.secondary};
  color: ${(props) => (props.active ? colors.primary : colors.black)};
  border-radius: 30px 30px 0 0;
  width: 100%;
  display: block;
  &:hover {
    background-color: ${colors.background};
    color: ${colors.primary};
  }
`;

const PhoneListCate = styled.div`
  @media ${device.tablet} {
    display: none;
  }
`;

const ListContent = styled.div`
  padding: 40px 20px;
  background-color: ${colors.background};
  @media ${device.tablet} {
    padding: 60px;
  }
`;

const ListContentList = styled.ul`
  list-style: initial;
  li {
    font-family: "Noto Sans TC";
    font-weight: 500;
    font-size: ${fontSize.p2};
    line-height: 23px;
    letter-spacing: 0.05em;
    color: ${colors.black};

    @media ${device.tabletH} {
      font-size: ${fontSize.p1};
      line-height: 26px;
    }
  }
`;

const AdoptNoticeTime = () => {
  return (
    <NoticeList>
      <ul>
        <WebListCate>
          <Col md={3}>
            <li>
              <ListCate to="/adoptionnotices/attitude">心態</ListCate>
            </li>
          </Col>
          <Col md={3}>
            <li>
              <ListCate to="/adoptionnotices/wealth">經濟</ListCate>
            </li>
          </Col>
          <Col md={3}>
            <li>
              <ListCate active="true" to="/adoptionnotices/time">
                時間
              </ListCate>
            </li>
          </Col>
          <Col md={3}>
            <li>
              <ListCate to="/adoptionnotices/knowledge">知識</ListCate>
            </li>
          </Col>
        </WebListCate>
        <PhoneListCate>
          <TabCarousel />
        </PhoneListCate>
      </ul>
      <ListContent>
        <H2>喜歡，就多陪陪貓咪</H2>
        <Content className="mt-3">
          貓咪其實比想像中更需要飼主的陪伴，但因每隻貓咪的生長環境、個性特點不太相同，因此沒辦法劃分一個精準數字來涵蓋所有貓咪所需的陪伴時間。不過每隻貓咪需要的時間，可以從這三點做衡量與分配：
        </Content>
        <ListContentList>
          <li className="mt-5">
            重視飲食規劃
            <Content className="mt-3">
              對幼貓來說，少量多餐是最好的份量，好比一天 4~5 餐、甚至 6~7
              餐都可以，因為幼貓腸胃比較敏感，藉由少量的餵食方式，可以讓牠的腸胃有更多的時間吸收與處理。另外一方面，不論任何年紀的貓咪，基本上不太愛喝水，但水又是必須品，所以提供「濕食」是不錯的選擇。
            </Content>
            <Content>
              因此在準備餐食的方面，飼主必須先好好觀察自家貓咪的習慣、偏好，用心規劃並選擇對貓咪最好的用餐考量。
            </Content>
          </li>
          <li className="mt-5">
            消耗體力與陪伴
            <Content className="mt-3">
              每天下班之後，是不是已經精疲力盡？或是一到家就充斥著各種家事要處理，還有家人的晚餐要張羅？當我們每天處在混亂的狀態時，能否撥空陪伴家裡的貓咪，拿著剛買的逗貓棒，讓牠在沙發上開心地跑上跑下；稱職地擔任日復一日的鏟屎官，細膩的守護貓咪的安全與健康；又或是每天預留一點時間，溫柔地抱貓咪，跟牠說話、幫牠梳毛、拍屁屁，好好享受屬於你們的溫馨時光。
            </Content>
          </li>
          <li className="mt-5">
            減敏訓練
            <Content className="mt-3">
              什麼是貓咪的「減敏訓練」？簡單來說，就是減低對事物的敏感度（Desensitization）。瞭解某項行為或動作（例如剪指甲、剃毛）所需的訓練時間、切割所需的階段，一步一步降低貓咪對於事情的敏感度，強調循序漸進、不用勉強，並確保貓咪的情緒穩定。每當一個階段達標成功的同時，毫不吝嗇地給予獎勵，好比說喜歡的食物、抱抱等，讓貓咪獲得鼓勵與支持。
            </Content>
          </li>
        </ListContentList>
      </ListContent>
    </NoticeList>
  );
};

export default AdoptNoticeTime;
