import { Container } from "react-bootstrap";
import Button from "../components/Button";
import ProcessBar from "../components/processBar/ProcessBar";
import Img from "../images/knowledgeTest/01.svg";

const Question = () => {};

const KnowledgeTest = () => {
  return (
    <>
      <div className="knowledge-test">
        <Container>
          <div className="knowledgeTest-header">
            <ProcessBar />
            <h1 className="knowledgeTest-title">飼養知識小遊戲</h1>
          </div>
          <div className="knowledgeTest-content">
            <div className="card-image">
              <img src={Img} alt="" />
            </div>
            <div className="knowledgeTest-question">
              <div className="question-title">
                1. 認養貓咪之後，要如何評估貓咪適合打三合一疫苗？
              </div>
              <div className="question-ans">
                <button className="ans-choice">
                  <span className="choice-letter">A</span>
                  <span className="choice-detail">
                    至少要6至8周以上並且還沒斷奶，身體狀況良好
                  </span>
                </button>
                <button className="ans-choice">
                  <span className="choice-letter">B</span>
                  <span className="choice-detail">
                    至少要6至8周以上並且已斷奶，身體狀，況良好
                  </span>
                </button>
                <button className="ans-choice">
                  <span className="choice-letter">C</span>
                  <span className="choice-detail">
                    至少要3至5周以上並且已斷奶，身體狀況良好
                  </span>
                </button>
                <button className="ans-choice">
                  <span className="choice-letter">D</span>
                  <span className="choice-detail">
                    至少要3至5周以上並且還沒斷奶，身體狀況良好
                  </span>
                </button>
              </div>
              <div className="btn-choices">
                <Button active={true} text={"返回"} />
                <Button text={"下一題"} />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default KnowledgeTest;
