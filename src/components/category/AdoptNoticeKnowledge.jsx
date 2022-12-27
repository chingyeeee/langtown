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

const AdoptNoticeKnowledge = () => {
  return (
    <NoticeList>
      <ul>
        <WebListCate>
          <Col md={3}>
            <li>
              <ListCate to="/adoptionnotices/time">心態</ListCate>
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
              <ListCate active="true" to="/adoptionnotices/knowledge">
                知識
              </ListCate>
            </li>
          </Col>
        </WebListCate>
        <PhoneListCate>
          <TabCarousel />
        </PhoneListCate>
      </ul>
      <ListContent>
        <H2>貓奴必備知識寶庫</H2>
        <Content className="mt-3">
          要成為一個稱職的貓奴，希望貓咪可以陪你久一點、少生病，那必須多方更新飼養貓咪的知識，除了可以和其他貓奴相互交流、請教有經驗的組織或團體之外，也推薦閱讀養貓的六本聖經，如下：
        </Content>
        <ListContentList>
          <li className="mt-5">
            《 為什麼你的好意害了貓？ 》
            <Content className="mt-3">
              Amazon
              網站上最暢銷貓咪飼養聖經，內容提到第一隻貓到人生各種節慶、生命歷程，以及該如何養貓過程中應該注意的事情。
            </Content>
          </li>
          <li className="mt-5">
            《 貓咪家庭醫學大百科 》
            <Content className="mt-3">
              本書由貓博士林政毅與 101
              貓醫院前院長、來地喵喵貓診所院長陳千雯共同撰寫，不論是幼幼貓、小貓、成貓到老貓都值得參考的一本書，舉凡日常照顧、意外與傷病症狀判斷處置，或是慢性病居家照護，都詳細說明在書本中。
            </Content>
          </li>
          <li className="mt-5">
            《 你的貓 》
            <Content className="mt-3">
              作者為美國加州諮商獸醫師 Elizabeth M. Hodgkins
              所撰寫的書籍，並由謝凱特（貓奴們稱「酒鬼」）所譯。
            </Content>
          </li>
          <li className="mt-5">
            《 貓咪健康按握術 》
            <Content className="mt-3">
              這本書介紹如何透過幫貓咪按摩，藉此促進人貓關係，有時候還能盡早發現到貓咪身上的病狀或異常。
            </Content>
          </li>
          <li className="mt-5">
            《 貓邏輯 》
            <Content className="mt-3">
              由亞洲第一位國際認證貓行為諮詢師─林子軒醫師所撰寫的書籍。
            </Content>
          </li>
          <li className="mt-5">
            《
            動物醫生：讓毛孩陪你更久：結合中、西醫的觀點，為你解答動物常見疾病如何預防與治療
            》
            <Content className="mt-3">
              透過真實故事與問答，分析最常見的毛孩疾病，並且隨書附贈貓、狗常見穴道圖片，提供給貓奴做學習與參考。
            </Content>
          </li>
        </ListContentList>
      </ListContent>
    </NoticeList>
  );
};

export default AdoptNoticeKnowledge;
