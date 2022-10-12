import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import TabCarousel from "../TabCarousels";

const AdoptNoticeAttitude = () => {
  return (
    <div className="notice-list">
      <ul>
        <Row className="web-list-category justify-content-around text-center mt-5">
          <Col md={3}>
            <li>
              <Link
                className="list-category active-cate"
                to="/adoptionnotices/attitude"
              >
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
              <Link className="list-category" to="/adoptionnotices/knowledge">
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
        <h2 className="list-content-title">
          認養不只是愛心展現，更是對一條生命的責任
        </h2>
        <p className="list-content-detail">
          瞭解自己想飼養貓咪的原因嗎？真的準備好負責貓咪的一生了嗎？來瞭解更多關於飼主心態的注意事項吧！
          <br />
          在飼養期間，有可能會發生以下的情況：
        </p>
        <ul className="list-content-list">
          <li className="list-item">
            貓咪破壞家中物品
            <p>
              牠們有時候會因為想磨牙、磨爪或其他原因導致物品損壞，你可以包容牠們的錯誤並好好教導，防止再次破壞嗎？
            </p>
          </li>
          <li className="list-item">
            決定認養並把貓咪帶回家之後，如何讓牠建立安全感？
            <p>
              牠們有時候會因為想磨牙、磨爪或其他原因導致物品損壞，你可以包容牠們的錯誤並好好教導，防止再次破壞嗎？
            </p>
            <ul>
              <li className="list-item-title">
                ＊ 哈氣
                <p className="list-item-detail">
                  「恐懼」是貓咪最常見的哈氣原因，通常是貓咪已經被攻擊或是飼主的某些行為讓貓咪想起過往的事情，產生了陰影，進而啟動的保護機制。
                </p>
              </li>
              <li className="list-item-title">
                ＊ 低鳴
                <p className="list-item-detail">
                  貓咪遇到不想分享資源時，通常會透過低鳴的方式警告周遭的其他貓咪不要靠近，那個音量較低吼來得小，並不是十分顯著。
                </p>
              </li>
              <li className="list-item-title">
                ＊ 不吃不喝
                <p className="list-item-detail">
                  貓咪是「環境依賴型」的動物，當他們到新地方的時候，會需要比較多的時間適應環境，這時候可能就會出現「不吃不喝」的行為。不過飼主們不用太擔心，可以把食物放在貓咪便於取得的地方，讓他們慢慢感受並提升安全感。
                </p>
              </li>
              <li className="list-item-title">
                ＊ 其他行為
                <p>攻擊人類、嚎叫、躲藏、憋尿或亂尿等。</p>
              </li>
              <p className="list-item-conclude">
                整體而言，如何增加貓咪的信任、安全感？其實就是循序漸進的縮短貓咪與人類之間的距離，讓貓咪有自己的空間、熟悉環境的設置。因此，不妨將飼養籠蓋上一層布、增加隱密感，佈置成貓咪專屬的房間，並放好砂盆、食物碗、水碗、舒適的小貓床、貓抓板、玩具等，讓牠們盡可能加速適應新環境。
              </p>
            </ul>
          </li>
          <li className="list-item">
            貓咪生病或年紀大了需要更多照顧
            <p>
              貓咪會生病，也會隨著時間慢慢變老、甚至離世，根據美國動物醫院協會（American
              Animal Hospital Association, AAHA）貓咪約從 6、7
              歲時身體會開始退化，10 歲以後就正式進入成熟階段，15
              歲以上邁入老年期，而高齡的貓咪常見的退化情下如活動力降低、關節炎、口腔疾病、體重增加、走路出現搖搖晃晃等。
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdoptNoticeAttitude;
