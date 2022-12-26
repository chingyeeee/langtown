import { colors } from "../../helpers/colors";
import { device } from "../../helpers/breakpoints";
import styled from "styled-components";
import { ContentTitle } from "../../helpers/typography";
import Button from "../Button";
import { Image } from "../../helpers/layout";
import React, { useState } from "react";
import { fontSize } from "../../helpers/fontSize";

const ImageBlock = styled.div`
  width: 100%;
  padding: 10px 20px;
  @media ${device.tablet} {
    width: 30%;
    padding: 0px 30px;
  }
`;

const QuestionBlock = styled.div`
  background-color: ${colors.background};
  box-sizing: border-box;
  padding: 40px;
  border-radius: 20px;
  width: 100%;
  @media ${device.tablet} {
    width: 70%;
    padding: 40px 32px;
  }
`;

const AnswerBlock = styled.div`
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const Choice = styled.button`
  text-align: left;
  border: 0;
  padding-left: 46px;
  background-color: transparent;
  display: flex;
  align-items: center;
  position: relative;
  color: ${colors.black};
  font-family: "Noto Sans TC";
  font-weight: 400;
  font-size: ${fontSize.p3};
  letter-spacing: 0.05em;
  line-height: 20px;
  @media ${device.tabletH} {
    font-size: ${fontSize.p2};
  }
  &::before {
    content: "${(props) => props.value}";
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: ${colors.primary};
    color: ${colors.white};
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    left: 0;
  }
  &:hover {
    color: ${colors.primary};
  }
  &:focus {
    color: ${colors.primary};
  }
`;

const NextStep = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  @media ${device.tablet} {
    justify-content: flex-end;
  }
`;

const KnowledgeTestContent = styled.div`
  @media ${device.tablet} {
    max-width: 80%;
    margin: auto;
    display: flex;
    align-items: center;
  }
`;

export const KnowledgeTestQuestion = (props) => {
  const {
    item,
    setTestStart,
    totalQuestion,
    currentQuestion,
    setCurrentQuestion,
    answer,
    setAnswer,
    setShowResults,
  } = props;
  const { number, question, choices, photo } = item;

  const Answer = Object.entries(choices);

  //判斷目前的按鈕是否active
  const [buttonState, setButtonState] = useState("");

  function ansQuestion(ans, i) {
    setButtonState("true");

    //判斷是否已經有答案
    answer[currentQuestion] === undefined
      ? setAnswer([...answer, { ...item, chosenAnswer: ans[0] }])
      : Object.assign(answer[currentQuestion], { chosenAnswer: ans[0] });
  }

  //下一題
  function nextQuestion() {
    setCurrentQuestion(currentQuestion + 1);
    setButtonState("");
  }

  //上一題
  function prevQuestion() {
    setCurrentQuestion(currentQuestion - 1);
    setButtonState("true");

    document
      .querySelector(`.option-${answer[currentQuestion - 1].chosenAnswer}`)
      .focus();
  }

  //送出
  function submit() {
    setShowResults(true);
  }

  return (
    <KnowledgeTestContent>
      <ImageBlock>
        <Image src={require(`../../images/knowledgeTest/${photo}`)} alt="" />
      </ImageBlock>
      <QuestionBlock>
        <ContentTitle>
          {number}. {question}
        </ContentTitle>
        <AnswerBlock>
          {Answer.map((ans, i) => {
            return (
              <Choice
                key={i}
                className={`
                  option-${ans[0]}
                `}
                onClick={() => ansQuestion(ans, i)}
                value={ans[0]}
              >
                {ans[1]}
              </Choice>
            );
          })}
        </AnswerBlock>
        <NextStep>
          {number === 1 ? (
            <Button active="true" onClick={() => setTestStart(false)}>
              返回
            </Button>
          ) : (
            <Button
              active="true"
              onClick={() => {
                prevQuestion();
              }}
            >
              上一題
            </Button>
          )}
          {Number(number) === totalQuestion ? (
            <Button active={buttonState} onClick={() => submit()}>
              送出
            </Button>
          ) : (
            <Button active={buttonState} onClick={() => nextQuestion()}>
              下一題
            </Button>
          )}
        </NextStep>
      </QuestionBlock>
    </KnowledgeTestContent>
  );
};
