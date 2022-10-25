import styled from "styled-components";
import { colors } from "../../helpers/colors";
import { device } from "../../helpers/breakpoints";
import { Content, H2 } from "../../helpers/typography";
import Medal from "../../images/knowledgeTest/medal.svg";
import Correct from "../../images/knowledgeTest/correct.svg";
import Incorrect from "../../images/knowledgeTest/incorrect.svg";
import { Image } from "../../helpers/layout";
import { Col, Row } from "react-bootstrap";

const ResultsBlock = styled.div`
  background-color: ${colors.background};
  box-sizing: border-box;
  padding: 40px;
  border-radius: 20px;
  width: 100%;
  @media ${device.tablet} {
    padding: 40px 32px;
  }
`;

const ImageWrapper = styled.div`
  width: 50%;
  margin: auto;
  box-sizing: border-box;
  @media ${device.tablet} {
    width: 30%;
  }
`;

const Question = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Answer = styled.div`
  display: flex;
  gap: 16px;
`;

const Results = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const TestResults = (props) => {
  const { answer } = props;

  return (
    <ResultsBlock>
      <H2 className="text-center">恭喜得到貓貓獎勵勳章</H2>
      <ImageWrapper>
        <Image src={Medal} alt="貓貓獎勵勳章" />
      </ImageWrapper>
      <Results>
        {answer.map((item, i) => {
          return (
            <Row key={i}>
              <Col xs={3}>
                <ImageWrapper>
                  <Image
                    src={
                      item.answer === item.chosenAnswer ? Correct : Incorrect
                    }
                  />
                </ImageWrapper>
              </Col>
              <Col xs={9}>
                <Question>
                  <H2>
                    {item.number}. {item.question}
                  </H2>
                  <Answer>
                    <Content>你的答案：{item.chosenAnswer}</Content>
                    <Content>正確解答：{item.answer}</Content>
                  </Answer>
                  {item.detail.map((content, i) => {
                    return <Content key={i}>{content}</Content>;
                  })}
                </Question>
              </Col>
            </Row>
          );
        })}
      </Results>
    </ResultsBlock>
  );
};