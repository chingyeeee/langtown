import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import TabCarousel from "../TabCarousels";

const AdoptNoticeTime = () => {
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
              <Link
                className="list-category active-cate"
                to="/adoptionnotices/time"
              >
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
        <h2 className="list-content-title">喜歡，就多陪陪貓咪</h2>
        <p className="list-content-detail">
          貓咪其實比想像中更需要飼主的陪伴，但因每隻貓咪的生長環境、個性特點不太相同，因此沒辦法劃分一個精準數字來涵蓋所有貓咪所需的陪伴時間。不過每隻貓咪需要的時間，可以從這三點做衡量與分配：
        </p>
        <ul className="list-content-list">
          <li className="list-item">
            重視飲食規劃
            <p>
              對幼貓來說，少量多餐是最好的份量，好比一天 4~5 餐、甚至 6~7
              餐都可以，因為幼貓腸胃比較敏感，藉由少量的餵食方式，可以讓牠的腸胃有更多的時間吸收與處理。另外一方面，不論任何年紀的貓咪，基本上不太愛喝水，但水又是必須品，所以提供「濕食」是不錯的選擇。
            </p>
            <p>
              因此在準備餐食的方面，飼主必須先好好觀察自家貓咪的習慣、偏好，用心規劃並選擇對貓咪最好的用餐考量。
            </p>
          </li>
          <li className="list-item">
            消耗體力與陪伴
            <p>
              每天下班之後，是不是已經精疲力盡？或是一到家就充斥著各種家事要處理，還有家人的晚餐要張羅？當我們每天處在混亂的狀態時，能否撥空陪伴家裡的貓咪，拿著剛買的逗貓棒，讓牠在沙發上開心地跑上跑下；稱職地擔任日復一日的鏟屎官，細膩的守護貓咪的安全與健康；又或是每天預留一點時間，溫柔地抱貓咪，跟牠說話、幫牠梳毛、拍屁屁，好好享受屬於你們的溫馨時光。
            </p>
          </li>
          <li className="list-item">
            減敏訓練
            <p>
              什麼是貓咪的「減敏訓練」？簡單來說，就是減低對事物的敏感度（Desensitization）。瞭解某項行為或動作（例如剪指甲、剃毛）所需的訓練時間、切割所需的階段，一步一步降低貓咪對於事情的敏感度，強調循序漸進、不用勉強，並確保貓咪的情緒穩定。每當一個階段達標成功的同時，毫不吝嗇地給予獎勵，好比說喜歡的食物、抱抱等，讓貓咪獲得鼓勵與支持。
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdoptNoticeTime;
