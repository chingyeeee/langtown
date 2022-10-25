import iconInvestigate from "../images/icons/icon-investigate.svg";
import iconKnowledge from "../images/icons/icon-knowledge.svg";
import iconMeeting from "../images/icons/icon-meeting.svg";
import styled from "styled-components";
import { colors } from "../helpers/colors";
import { ContentTitle, Content } from "../helpers/typography";
import { device } from "../helpers/breakpoints";

const Process = styled.div`
  padding: 40px 36px 50px;
  box-sizing: border-box;
  border-radius: 40px;
  &:nth-child(1) {
    background-color: ${colors.background};
  }
  &:nth-child(2) {
    background-color: ${colors.yellow};
  }
  &:nth-child(3) {
    background-color: ${colors.yelloworange};
  }

  @media screen and (max-width: 991px) {
    text-align: center;
    &:nth-child(1) {
      margin-top: 32px;
    }
    &:nth-child(2) {
      margin-top: -30px;
    }
    &:nth-child(3) {
      margin-top: -30px;
    }
  }

  @media ${device.tabletH} {
    padding: 70px 77px 70px 70px;
    box-sizing: border-box;
    width: 35%;
    flex-wrap: wrap;
    &:nth-child(2) {
      margin-left: -2.5%;
    }
    &:nth-child(3) {
      padding: 70px 60px 50px 60px;
      margin-left: -2.5%;
    }
  }
`;

const AdoptProcesses = () => {
  return (
    <div className="processes d-lg-flex justify-content-center mt-5">
      <Process>
        <div className="process-header d-flex align-items-center justify-content-center">
          <div className="process-icon">
            <img src={iconKnowledge} alt="飼養知識小遊戲" />
          </div>
          <ContentTitle className="ms-3">飼養知識小遊戲</ContentTitle>
        </div>
        <Content content="true" className="mt-4">
          這裡有趣味問答的小考驗，可以檢視是否儲備足夠的飼養知識，貼心提醒未來可能面對的狀況。
        </Content>
      </Process>
      <Process>
        <div className="d-flex align-items-center justify-content-center">
          <div className="process-icon">
            <img src={iconInvestigate} alt="初步認識調查" />
          </div>
          <ContentTitle className="ms-3">初步認識調查</ContentTitle>
        </div>
        <Content content="true" className="mt-4">
          填寫個人資料的時候，可能對問題有些疑問、不確定詢問背後的原因，但別擔心，我們有加註說明，貼心解開心中的疑惑。
        </Content>
      </Process>
      <Process>
        <div className="process-header d-flex align-items-center justify-content-center">
          <div className="process-icon">
            <img src={iconMeeting} alt="預約見面時段" />
          </div>
          <ContentTitle className="ms-3">預約見面時段</ContentTitle>
        </div>
        <Content content="true" className="mt-4">
          終於來到預約認養階段了！在這裡可以邁入填寫的最後一步，選擇所有方便的日期，緊接著就大功告成啦！
        </Content>
      </Process>
    </div>
  );
};

export default AdoptProcesses;
