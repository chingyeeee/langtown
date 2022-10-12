import iconInvestigate from "../images/icons/icon-investigate.svg";
import iconKnowledge from "../images/icons/icon-knowledge.svg";
import iconMeeting from "../images/icons/icon-meeting.svg";

const AdoptProcesses = () => {
  return (
    <div className="processes d-lg-flex justify-content-center">
      <div className="process ">
        <div className="process-header d-flex align-items-center justify-content-center">
          <div className="process-icon">
            <img src={iconKnowledge} alt="飼養知識小遊戲" />
          </div>
          <p className="process-title ms-3">飼養知識小遊戲</p>
        </div>
        <p className="process-content mt-4">
          這裡有趣味問答的小考驗，可以檢視是否儲備足夠的飼養知識，貼心提醒未來可能面對的狀況。
        </p>
      </div>
      <div className="process ">
        <div className="process-header d-flex align-items-center justify-content-center">
          <div className="process-icon">
            <img src={iconInvestigate} alt="初步認識調查" />
          </div>
          <p className="process-title ms-3">初步認識調查</p>
        </div>
        <p className="process-content mt-4">
          填寫個人資料的時候，可能對問題有些疑問、不確定詢問背後的原因，但別擔心，我們有加註說明，貼心解開心中的疑惑。
        </p>
      </div>
      <div className="process ">
        <div className="process-header d-flex align-items-center justify-content-center">
          <div className="process-icon">
            <img src={iconMeeting} alt="預約見面時段" />
          </div>
          <p className="process-title ms-3">預約見面時段</p>
        </div>
        <p className="process-content mt-4">
          終於來到預約認養階段了！在這裡可以邁入填寫的最後一步，選擇所有方便的日期，緊接著就大功告成啦！
        </p>
      </div>
    </div>
  );
};

export default AdoptProcesses;
