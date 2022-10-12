import PhraseIcons from "./PhraseIcons";

const ProcessBar = () => {
  return (
    <div className="processBar">
      <div className="process-phrase phrase-knowledgeTest">
        <div className="phrase-icon">
          <PhraseIcons.PhraseKnowledgeTest />
        </div>
        <div className="phrase-title">飼養知識小遊戲</div>
      </div>
      <div className="process-phrase phrase-investigation">
        <div className="phrase-icon">
          <PhraseIcons.PhraseInvestigation />
        </div>
        <div className="phrase-title">初步認識調查</div>
      </div>
      <div className="process-phrase phrase-meeting">
        <div className="phrase-icon">
          <PhraseIcons.PhraseMeeting />
        </div>
        <div className="phrase-title">預約見面時段</div>
      </div>
    </div>
  );
};

export default ProcessBar;
