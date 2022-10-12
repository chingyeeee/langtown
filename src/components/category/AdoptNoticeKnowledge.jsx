import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import TabCarousel from "../TabCarousels";

const AdoptNoticeKnowledge = () => {
  return (
    <div className="notice-list">
      <ul>
        <Row className="web-list-category justify-content-around text-center mt-5">
          <Col md={3}>
            <li>
              <Link className="list-category" to="/adoptionnotices/time">
                心態
              </Link>
            </li>
          </Col>
          <Col md={3}>
            <li>
              <Link className="list-category" to="/adoptionnotices/wealth">
                經濟
              </Link>
            </li>
          </Col>
          <Col md={3}>
            <li>
              <Link className="list-category" to="/adoptionnotices/time">
                時間
              </Link>
            </li>
          </Col>
          <Col md={3}>
            <li>
              <Link
                className="list-category active-cate"
                to="/adoptionnotices/knowledge"
              >
                知識
              </Link>
            </li>
          </Col>
        </Row>
        <div className="phone-list-category">
          <TabCarousel />
        </div>
      </ul>
      <div className="list-content">
        <h2 className="list-content-title">貓奴必備知識寶庫</h2>
        <p className="list-content-detail">
          要成為一個稱職的貓奴，希望貓咪可以陪你久一點、少生病，那必須多方更新飼養貓咪的知識，除了可以和其他貓奴相互交流、請教有經驗的組織或團體之外，也推薦閱讀養貓的六本聖經，如下：
        </p>
        <ul className="list-content-list">
          <li className="list-item">
            《 為什麼你的好意害了貓？ 》
            <p>
              Amazon
              網站上最暢銷貓咪飼養聖經，內容提到第一隻貓到人生各種節慶、生命歷程，以及該如何養貓過程中應該注意的事情。
            </p>
          </li>
          <li className="list-item">
            《 貓咪家庭醫學大百科 》
            <p>
              本書由貓博士林政毅與 101
              貓醫院前院長、來地喵喵貓診所院長陳千雯共同撰寫，不論是幼幼貓、小貓、成貓到老貓都值得參考的一本書，舉凡日常照顧、意外與傷病症狀判斷處置，或是慢性病居家照護，都詳細說明在書本中。
            </p>
          </li>
          <li className="list-item">
            《 你的貓 》
            <p>
              作者為美國加州諮商獸醫師 Elizabeth M. Hodgkins
              所撰寫的書籍，並由謝凱特（貓奴們稱「酒鬼」）所譯。
            </p>
          </li>
          <li className="list-item">
            《 貓咪健康按握術 》
            <p>
              這本書介紹如何透過幫貓咪按摩，藉此促進人貓關係，有時候還能盡早發現到貓咪身上的病狀或異常。
            </p>
          </li>
          <li className="list-item">
            《 貓邏輯 》
            <p>由亞洲第一位國際認證貓行為諮詢師─林子軒醫師所撰寫的書籍。</p>
          </li>
          <li className="list-item">
            《
            動物醫生：讓毛孩陪你更久：結合中、西醫的觀點，為你解答動物常見疾病如何預防與治療
            》
            <p>
              透過真實故事與問答，分析最常見的毛孩疾病，並且隨書附贈貓、狗常見穴道圖片，提供給貓奴做學習與參考。
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdoptNoticeKnowledge;
