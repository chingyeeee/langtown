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

const TableData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DataTitle = styled.div`
  text-align: center;
  background-color: ${colors.yelloworange};
  padding: 16px 0;
  border-radius: 8px;
  font-family: "Noto Sans TC";
  font-weight: 500;
  font-size: ${fontSize.p2};
  line-height: 23px;
  letter-spacing: 0.05em;
`;

const RowTitle = styled.div`
  background-color: ${colors.rowTitle};
  height: 100%;
  border-radius: 8px;
  font-family: "Noto Sans TC";
  font-weight: 500;
  font-size: ${fontSize.p2};
  line-height: 23px;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const TitleRowCol = styled(Col)`
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;

const Detail = styled.div`
  height: 100%;
  border-radius: 8px;
  font-family: "Noto Sans TC";
  font-weight: 500;
  font-size: ${fontSize.p2};
  line-height: 23px;
  letter-spacing: 0.05em;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  line-height: 24px;
`;

const DetailTitle = styled(Detail)`
  background-color: ${colors.rowContent};
`;

const AdoptNoticeWealth = () => {
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
              <ListCate active="true" to="/adoptionnotices/wealth">
                經濟
              </ListCate>
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
        <H2>你也需要想想飼養寵物的花費所需</H2>
        <Content className="mt-3">
          飼養貓咪每個月的基本支出大約落在
          $1000～5000，主要可以分為幾個部分：伙食費、健康檢查費用、醫療預備金與其他支出等，近年來飼主們越來越重視貓咪的生活品質與健康保險，因此，保單額度也成為熱門的規劃項目。
        </Content>
        <Content className="mt-3">
          另外一方面，假如寵物不慎患病，醫療費用更是基本支出的好幾倍，所以必須確保有足夠的金錢去面對及解決飼養後遇到的醫療問題。貓咪跟人一樣會生病、會需要關懷，所以說必須有一定的經濟能力，才能隨時有一筆資金，足夠應付未來的各種緊急情況。
        </Content>
        <TableData className="mt-5">
          <Row>
            <Col xs={3}>
              <DataTitle>費用類型</DataTitle>
            </Col>
            <Col xs={3}>
              <DataTitle>細項</DataTitle>
            </Col>
            <Col xs={3}>
              <DataTitle>花費金額</DataTitle>
            </Col>
            <Col xs={3}>
              <DataTitle>備註</DataTitle>
            </Col>
          </Row>
          <Row>
            <Col xs={3}>
              <RowTitle>伙食費</RowTitle>
            </Col>
            <TitleRowCol xs={9}>
              <Row>
                <Col xs={4}>
                  <DetailTitle>乾食</DetailTitle>
                </Col>
                <Col xs={4}>
                  <Detail>$150 – 1000 / 公斤</Detail>
                </Col>
                <Col xs={4}>
                  <Detail>
                    價格依照品牌、性質（無穀、有穀）、成分（蛋白質含量）、製作方式（烘烤、冷凍乾燥）不同
                  </Detail>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <DetailTitle>副食罐</DetailTitle>
                </Col>
                <Col xs={4}>
                  <Detail>$20 – 50 / 罐</Detail>
                </Col>
                <Col xs={4}>
                  <Detail>補充水分用，不可作為主食</Detail>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <DetailTitle>主食罐</DetailTitle>
                </Col>
                <Col xs={4}>
                  <Detail>$40 – 100 / 罐</Detail>
                </Col>
                <Col xs={4}>
                  <Detail>
                    依照規格（85g / 170g / 200g）和產地（臺製 / 德製 /
                    紐製）有所不同
                  </Detail>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <DetailTitle>生食</DetailTitle>
                </Col>
                <Col xs={4}>
                  <Detail>$40 – 70 / 100 公克</Detail>
                </Col>
                <Col xs={4}>
                  <Detail>依照肉種和飼養方式而有不同</Detail>
                </Col>
              </Row>
            </TitleRowCol>
          </Row>
          <Row>
            <Col xs={3}>
              <RowTitle>伙食費</RowTitle>
            </Col>
            <TitleRowCol xs={9}>
              <Row>
                <Col xs={4}>
                  <DetailTitle>礦砂、豆腐砂、松木砂</DetailTitle>
                </Col>
                <Col xs={4}>
                  <Detail>$80 – 250 / 包</Detail>
                </Col>
                <Col xs={4}>
                  <Detail>以常見的 5 – 7L 規格計</Detail>
                </Col>
              </Row>
            </TitleRowCol>
          </Row>
          <Row>
            <Col xs={3}>
              <RowTitle>一次性醫療費用</RowTitle>
            </Col>
            <TitleRowCol xs={9}>
              <Row>
                <Col xs={4}>
                  <DetailTitle>一次性醫療費用 貓愛滋、貓白血檢驗</DetailTitle>
                </Col>
                <Col xs={4}>
                  <Detail>$600 – 1000</Detail>
                </Col>
                <Col xs={4}>
                  <Detail></Detail>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <DetailTitle>pro BNP 心臟快篩</DetailTitle>
                </Col>
                <Col xs={4}>
                  <Detail>$800 – 1000</Detail>
                </Col>
                <Col xs={4}>
                  <Detail></Detail>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <DetailTitle>
                    貓腸炎三合一檢驗（貓瘟、貓冠狀、梨形鞭毛蟲）
                  </DetailTitle>
                </Col>
                <Col xs={4}>
                  <Detail>$700 – 1000</Detail>
                </Col>
                <Col xs={4}>
                  <Detail></Detail>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <DetailTitle>絕育</DetailTitle>
                </Col>
                <Col xs={4}>
                  <Detail>$1500 – 4000</Detail>
                </Col>
                <Col xs={4}>
                  <Detail>公貓母貓手術費不同</Detail>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <DetailTitle>血檢</DetailTitle>
                </Col>
                <Col xs={4}>
                  <Detail>$1500 – 3000</Detail>
                </Col>
                <Col xs={4}>
                  <Detail>依照檢驗項目（生化 10、15 項）不同，收費不同</Detail>
                </Col>
              </Row>
            </TitleRowCol>
          </Row>
          <Row>
            <Col xs={3}>
              <RowTitle>檢康檢查費用</RowTitle>
            </Col>
            <TitleRowCol xs={9}>
              <Row>
                <Col xs={4}>
                  <DetailTitle>腹腔超音波</DetailTitle>
                </Col>
                <Col xs={4}>
                  <Detail>$2000</Detail>
                </Col>
                <Col xs={4}>
                  <Detail></Detail>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <DetailTitle>胸腔超音波</DetailTitle>
                </Col>
                <Col xs={4}>
                  <Detail>$3000</Detail>
                </Col>
                <Col xs={4}>
                  <Detail></Detail>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <DetailTitle>尿檢</DetailTitle>
                </Col>
                <Col xs={4}>
                  <Detail>$1000</Detail>
                </Col>
                <Col xs={4}>
                  <Detail></Detail>
                </Col>
              </Row>
            </TitleRowCol>
          </Row>
          <Row>
            <Col xs={3}>
              <RowTitle>固定醫療支出</RowTitle>
            </Col>
            <TitleRowCol xs={9}>
              <Row>
                <Col xs={4}>
                  <DetailTitle>體內外驅蟲</DetailTitle>
                </Col>
                <Col xs={4}>
                  <Detail>$200 – 400 / 次</Detail>
                </Col>
                <Col xs={4}>
                  <Detail>每月需點滴劑或服用口服藥</Detail>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <DetailTitle>三合一 / 四合一 / 五合一疫苗</DetailTitle>
                </Col>
                <Col xs={4}>
                  <Detail>$600 – 1000 / 劑</Detail>
                </Col>
                <Col xs={4}>
                  <Detail>依照類型區分</Detail>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <DetailTitle>狂犬病疫苗</DetailTitle>
                </Col>
                <Col xs={4}>
                  <Detail>$350 – 1200 / 劑</Detail>
                </Col>
                <Col xs={4}>
                  <Detail>依照是否有佐劑區分</Detail>
                </Col>
              </Row>
            </TitleRowCol>
          </Row>
          <Row>
            <Col xs={3}>
              <RowTitle>其他醫療支出</RowTitle>
            </Col>
            <TitleRowCol xs={9}>
              <Row>
                <Col xs={4}>
                  <DetailTitle>口服藥</DetailTitle>
                </Col>
                <Col xs={4}>
                  <Detail>$400 – 800 / 週</Detail>
                </Col>
                <Col xs={4}>
                  <Detail>較常見普遍之口服藥，特殊用藥費用可能較高</Detail>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <DetailTitle>住院</DetailTitle>
                </Col>
                <Col xs={4}>
                  <Detail>$1000 – 3000 / 天</Detail>
                </Col>
                <Col xs={4}>
                  <Detail>
                    依照住院之治療（一般住院、清創、輸液、灌食、氧氣房）而有所不同
                  </Detail>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <DetailTitle>洗牙</DetailTitle>
                </Col>
                <Col xs={4}>
                  <Detail>$2500 – 4000 / 次</Detail>
                </Col>
                <Col xs={4}>
                  <Detail></Detail>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <DetailTitle>拔牙</DetailTitle>
                </Col>
                <Col xs={4}>
                  <Detail>$200 – 500 / 顆</Detail>
                </Col>
                <Col xs={4}>
                  <Detail></Detail>
                </Col>
              </Row>
            </TitleRowCol>
          </Row>
        </TableData>
        <Content className="mt-3">
          ＊
          醫療備用金建議依照動物病史評估（如：若醫生評估動物牙口不好，可能要針對牙科手術存錢，並額外購置保健食品等）也有飼主幫寵物買保險，費用為每年
          2000 – 4000 元
        </Content>
      </ListContent>
    </NoticeList>
  );
};

export default AdoptNoticeWealth;
