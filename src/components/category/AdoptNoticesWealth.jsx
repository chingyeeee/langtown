import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import TabCarousel from "../TabCarousels";

const AdoptNoticeWealth = () => {
  return (
    <div className="notice-list">
      <ul>
        <Row className="web-list-category justify-content-around text-center mt-5">
          <Col md={3}>
            <li>
              <Link className="list-category" to="/adoptionnotices/attitude">
                心態
              </Link>
            </li>
          </Col>
          <Col md={3}>
            <li>
              <Link
                className="list-category active-cate"
                to="/adoptionnotices/wealth"
              >
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
        <h2 className="list-content-title">你也需要想想飼養寵物的花費所需</h2>
        <p className="list-content-detail">
          飼養貓咪每個月的基本支出大約落在
          $1000～5000，主要可以分為幾個部分：伙食費、健康檢查費用、醫療預備金與其他支出等，近年來飼主們越來越重視貓咪的生活品質與健康保險，因此，保單額度也成為熱門的規劃項目。
        </p>
        <p className="list-content-detail">
          另外一方面，假如寵物不慎患病，醫療費用更是基本支出的好幾倍，所以必須確保有足夠的金錢去面對及解決飼養後遇到的醫療問題。貓咪跟人一樣會生病、會需要關懷，所以說必須有一定的經濟能力，才能隨時有一筆資金，足夠應付未來的各種緊急情況。
        </p>
        <div className="table-data">
          <Row className="row-column">
            <Col xs={3}>
              <div className="data-title">費用類型</div>
            </Col>
            <Col xs={3}>
              <div className="data-title">細項</div>
            </Col>
            <Col xs={3}>
              <div className="data-title">花費金額</div>
            </Col>
            <Col xs={3}>
              <div className="data-title">備註</div>
            </Col>
          </Row>
          <Row className="row-column">
            <Col xs={3}>
              <div className="row-title text-center">伙食費</div>
            </Col>
            <Col xs={9} className="title-row-column">
              <Row>
                <Col xs={4}>
                  <div className="detail detail-title">乾食</div>
                </Col>
                <Col xs={4}>
                  <div className="detail">$150 – 1000 / 公斤</div>
                </Col>
                <Col xs={4}>
                  <div className="detail">
                    價格依照品牌、性質（無穀、有穀）、成分（蛋白質含量）、製作方式（烘烤、冷凍乾燥）不同
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <div className="detail detail-title">副食罐</div>
                </Col>
                <Col xs={4}>
                  <div className="detail">$20 – 50 / 罐</div>
                </Col>
                <Col xs={4}>
                  <div className="detail">補充水分用，不可作為主食</div>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <div className="detail detail-title">主食罐</div>
                </Col>
                <Col xs={4}>
                  <div className="detail">$40 – 100 / 罐</div>
                </Col>
                <Col xs={4}>
                  <div className="detail">
                    依照規格（85g / 170g / 200g）和產地（臺製 / 德製 /
                    紐製）有所不同
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <div className="detail detail-title">生食</div>
                </Col>
                <Col xs={4}>
                  <div className="detail">$40 – 70 / 100 公克</div>
                </Col>
                <Col xs={4}>
                  <div className="detail">依照肉種和飼養方式而有不同</div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="row-column">
            <Col xs={3}>
              <div className="row-title text-center">伙食費</div>
            </Col>
            <Col xs={9} className="title-row-column">
              <Row>
                <Col xs={4}>
                  <div className="detail detail-title">
                    礦砂、豆腐砂、松木砂
                  </div>
                </Col>
                <Col xs={4}>
                  <div className="detail">$80 – 250 / 包</div>
                </Col>
                <Col xs={4}>
                  <div className="detail">以常見的 5 – 7L 規格計</div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="row-column">
            <Col xs={3}>
              <div className="row-title text-center">一次性醫療費用</div>
            </Col>
            <Col xs={9} className="title-row-column">
              <Row>
                <Col xs={4}>
                  <div className="detail detail-title">
                    一次性醫療費用 貓愛滋、貓白血檢驗
                  </div>
                </Col>
                <Col xs={4}>
                  <div className="detail">$600 – 1000</div>
                </Col>
                <Col xs={4}>
                  <div className="detail"></div>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <div className="detail detail-title">pro BNP 心臟快篩</div>
                </Col>
                <Col xs={4}>
                  <div className="detail">$800 – 1000</div>
                </Col>
                <Col xs={4}>
                  <div className="detail"></div>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <div className="detail detail-title">
                    貓腸炎三合一檢驗（貓瘟、貓冠狀、梨形鞭毛蟲）
                  </div>
                </Col>
                <Col xs={4}>
                  <div className="detail">$700 – 1000</div>
                </Col>
                <Col xs={4}>
                  <div className="detail"></div>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <div className="detail detail-title">絕育</div>
                </Col>
                <Col xs={4}>
                  <div className="detail">$1500 – 4000</div>
                </Col>
                <Col xs={4}>
                  <div className="detail">公貓母貓手術費不同</div>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <div className="detail detail-title">血檢</div>
                </Col>
                <Col xs={4}>
                  <div className="detail">$1500 – 3000</div>
                </Col>
                <Col xs={4}>
                  <div className="detail">
                    依照檢驗項目（生化 10、15 項）不同，收費不同
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="row-column">
            <Col xs={3}>
              <div className="row-title text-center">檢康檢查費用</div>
            </Col>
            <Col xs={9} className="title-row-column">
              <Row>
                <Col xs={4}>
                  <div className="detail detail-title">腹腔超音波</div>
                </Col>
                <Col xs={4}>
                  <div className="detail">$2000</div>
                </Col>
                <Col xs={4}>
                  <div className="detail"></div>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <div className="detail detail-title">胸腔超音波</div>
                </Col>
                <Col xs={4}>
                  <div className="detail">$3000</div>
                </Col>
                <Col xs={4}>
                  <div className="detail"></div>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <div className="detail detail-title">尿檢</div>
                </Col>
                <Col xs={4}>
                  <div className="detail">$1000</div>
                </Col>
                <Col xs={4}>
                  <div className="detail"></div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="row-column">
            <Col xs={3}>
              <div className="row-title text-center">固定醫療支出</div>
            </Col>
            <Col xs={9} className="title-row-column">
              <Row>
                <Col xs={4}>
                  <div className="detail detail-title">體內外驅蟲</div>
                </Col>
                <Col xs={4}>
                  <div className="detail">$200 – 400 / 次</div>
                </Col>
                <Col xs={4}>
                  <div className="detail">每月需點滴劑或服用口服藥</div>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <div className="detail detail-title">
                    三合一 / 四合一 / 五合一疫苗
                  </div>
                </Col>
                <Col xs={4}>
                  <div className="detail">$600 – 1000 / 劑</div>
                </Col>
                <Col xs={4}>
                  <div className="detail">依照類型區分</div>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <div className="detail detail-title">狂犬病疫苗</div>
                </Col>
                <Col xs={4}>
                  <div className="detail">$350 – 1200 / 劑</div>
                </Col>
                <Col xs={4}>
                  <div className="detail">依照是否有佐劑區分</div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="row-column">
            <Col xs={3}>
              <div className="row-title text-center">其他醫療支出</div>
            </Col>
            <Col xs={9} className="title-row-column">
              <Row>
                <Col xs={4}>
                  <div className="detail detail-title">口服藥</div>
                </Col>
                <Col xs={4}>
                  <div className="detail">$400 – 800 / 週</div>
                </Col>
                <Col xs={4}>
                  <div className="detail">
                    較常見普遍之口服藥，特殊用藥費用可能較高
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <div className="detail detail-title">住院</div>
                </Col>
                <Col xs={4}>
                  <div className="detail">$1000 – 3000 / 天</div>
                </Col>
                <Col xs={4}>
                  <div className="detail">
                    依照住院之治療（一般住院、清創、輸液、灌食、氧氣房）而有所不同
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <div className="detail detail-title">洗牙</div>
                </Col>
                <Col xs={4}>
                  <div className="detail">$2500 – 4000 / 次</div>
                </Col>
                <Col xs={4}>
                  <div className="detail"></div>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <div className="detail detail-title">拔牙</div>
                </Col>
                <Col xs={4}>
                  <div className="detail">$200 – 500 / 顆</div>
                </Col>
                <Col xs={4}>
                  <div className="detail"></div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <p className="list-content-detail">
          ＊
          醫療備用金建議依照動物病史評估（如：若醫生評估動物牙口不好，可能要針對牙科手術存錢，並額外購置保健食品等）也有飼主幫寵物買保險，費用為每年
          2000 – 4000 元
        </p>
      </div>
    </div>
  );
};

export default AdoptNoticeWealth;
