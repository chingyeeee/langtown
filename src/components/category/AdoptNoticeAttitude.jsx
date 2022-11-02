import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import TabCarousel from "../TabCarousels";
import { device } from "../../helpers/breakpoints";
import { colors } from "../../helpers/colors";
import { Content, H2 } from "../../helpers/typography";
import styled from "styled-components";
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
  list-style: ${(props) => (props.special ? "none" : "initial")};
  li {
    font-family: "Noto Sans TC";
    font-weight: 500;
    font-size: ${fontSize.p2};
    line-height: 23px;
    letter-spacing: 0.05em;
    color: ${(props) => (props.special ? colors.primary : colors.black)};

    @media ${device.tabletH} {
      font-size: ${fontSize.p1};
      line-height: 26px;
    }
  }
`;

const AdoptNoticeAttitude = () => {
  return (
    <NoticeList>
      <ul>
        <WebListCate>
          <Col md={3}>
            <li>
              <ListCate active="true" to="/adoptionnotices/attitude">
                心態
              </ListCate>
            </li>
          </Col>
          <Col md={3}>
            <li>
              <ListCate to="/adoptionnotices/wealth">經濟</ListCate>
            </li>
          </Col>
          <Col md={3}>
            <li>
              <ListCate to="/adoptionnotices/time">時間</ListCate>
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
        <H2>認養不只是愛心展現，更是對一條生命的責任</H2>
        <Content className="mt-3">
          瞭解自己想飼養貓咪的原因嗎？真的準備好負責貓咪的一生了嗎？來瞭解更多關於飼主心態的注意事項吧！
          <br />
          在飼養期間，有可能會發生以下的情況：
        </Content>
        <ListContentList>
          <li className="mt-5">
            貓咪破壞家中物品
            <Content className="mt-3">
              牠們有時候會因為想磨牙、磨爪或其他原因導致物品損壞，你可以包容牠們的錯誤並好好教導，防止再次破壞嗎？
            </Content>
          </li>
          <li className="mt-5">
            決定認養並把貓咪帶回家之後，如何讓牠建立安全感？
            <Content className="mt-3">
              牠們有時候會因為想磨牙、磨爪或其他原因導致物品損壞，你可以包容牠們的錯誤並好好教導，防止再次破壞嗎？
            </Content>
            <ListContentList special="true">
              <li special="true" className="mt-3">
                ＊ 哈氣
                <Content>
                  「恐懼」是貓咪最常見的哈氣原因，通常是貓咪已經被攻擊或是飼主的某些行為讓貓咪想起過往的事情，產生了陰影，進而啟動的保護機制。
                </Content>
              </li>
              <li special="true" className="mt-3">
                ＊ 低鳴
                <Content>
                  貓咪遇到不想分享資源時，通常會透過低鳴的方式警告周遭的其他貓咪不要靠近，那個音量較低吼來得小，並不是十分顯著。
                </Content>
              </li>
              <li special="true" className="mt-3">
                ＊ 不吃不喝
                <Content>
                  貓咪是「環境依賴型」的動物，當他們到新地方的時候，會需要比較多的時間適應環境，這時候可能就會出現「不吃不喝」的行為。不過飼主們不用太擔心，可以把食物放在貓咪便於取得的地方，讓他們慢慢感受並提升安全感。
                </Content>
              </li>
              <li special="true" className="mt-3">
                ＊ 其他行為
                <Content>攻擊人類、嚎叫、躲藏、憋尿或亂尿等。</Content>
              </li>
              <p className="list-item-conclude">
                整體而言，如何增加貓咪的信任、安全感？其實就是循序漸進的縮短貓咪與人類之間的距離，讓貓咪有自己的空間、熟悉環境的設置。因此，不妨將飼養籠蓋上一層布、增加隱密感，佈置成貓咪專屬的房間，並放好砂盆、食物碗、水碗、舒適的小貓床、貓抓板、玩具等，讓牠們盡可能加速適應新環境。
              </p>
            </ListContentList>
          </li>
          <li className="mt-5">
            貓咪生病或年紀大了需要更多照顧
            <Content className="mt-3">
              貓咪會生病，也會隨著時間慢慢變老、甚至離世，根據美國動物醫院協會（American
              Animal Hospital Association, AAHA）貓咪約從 6、7
              歲時身體會開始退化，10 歲以後就正式進入成熟階段，15
              歲以上邁入老年期，而高齡的貓咪常見的退化情下如活動力降低、關節炎、口腔疾病、體重增加、走路出現搖搖晃晃等。
            </Content>
          </li>
        </ListContentList>
      </ListContent>
    </NoticeList>
  );
};

export default AdoptNoticeAttitude;
