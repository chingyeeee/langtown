import knowledgeTestArray from "../../data/knowledgeTestArray";
import { KnowledgeTestQuestion } from "../../components/knowledgeTest/KnowledgeTestQuestion";
import { TestResults } from "./TestResults";
import { useState } from "react";

export const Test = (props) => {
  const { setTestStart } = props;
  const totalQuestion = knowledgeTestArray.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const QuestionData = knowledgeTestArray[currentQuestion];
  const [answer, setAnswer] = useState([]);
  const [showResults, setShowResults] = useState(false);

  return (
    <>
      {showResults ? (
        <TestResults answer={answer} />
      ) : (
        <KnowledgeTestQuestion
          item={QuestionData}
          setTestStart={setTestStart}
          totalQuestion={totalQuestion}
          setCurrentQuestion={setCurrentQuestion}
          currentQuestion={currentQuestion}
          answer={answer}
          setAnswer={setAnswer}
          setShowResults={setShowResults}
        />
      )}
    </>
  );
};
