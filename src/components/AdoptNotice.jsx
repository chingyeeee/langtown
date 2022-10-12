import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import iconAttitude from "../images/icons/icon-attitude.svg";
import iconMoney from "../images/icons/icon-wealth.svg";
import iconTime from "../images/icons/icon-time.svg";
import iconBook from "../images/icons/icon-book.svg";

const AdoptNotice = (props) => {
  return (
    <>
      <p className="notice-intro">
        在展開認養的程序之前，不知道你對於養貓咪做了哪些準備？知道有那些注意事項嗎？是否有堅強的心理，足以面對接下來的各種挑戰？是否有足夠的金錢來源，能夠負擔貓咪成長中的每一個蛻變？能不能每天預留一些時間，享受與貓咪的相處時光？或是呀，有沒有努力查詢更多的認養知識，守護未來飼養的甜蜜負擔？沒關係，現在有我們的出現～我們將帶領你備足心靈上的需求與實質上的裝備，讓你快樂地成為合格飼主！
      </p>
      <Row>
        <Col xs={12} md={6} lg={3}>
          <Link className="category" to="/adoptionnotices/attitude">
            <img src={iconAttitude} alt="心態" />
            <h2 className="category-title">心態</h2>
          </Link>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <Link className="category" to="/adoptionnotices/wealth">
            <img src={iconMoney} alt="經濟" />
            <h2 className="category-title">經濟</h2>
          </Link>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <Link className="category" to="/adoptionnotices/time">
            <img src={iconTime} alt="時間" />
            <h2 className="category-title">時間</h2>
          </Link>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <Link className="category" to="/adoptionnotices/knowledge">
            <img src={iconBook} alt="知識" />
            <h2 className="category-title">知識</h2>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default AdoptNotice;
