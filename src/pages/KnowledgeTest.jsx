import { useState } from "react";
import { Container } from "react-bootstrap";
import ProcessBar from "../components/processBar/ProcessBar";
import { OnePageSection } from "../helpers/layout";
import { H1 } from "../helpers/typography";
import { TestIntroduction } from "../components/knowledgeTest/TestIntroduction";
import { Test } from "../components/knowledgeTest/Test";

const KnowledgeTest = () => {
  const [testStart, setTestStart] = useState(false);
  const url = window.location.pathname;

  return (
    <>
      <OnePageSection>
        <Container>
          <ProcessBar url={url} />
          <H1 className="my-5">飼養知識小遊戲</H1>
          {testStart ? (
            <Test />
          ) : (
            <TestIntroduction setTestStart={setTestStart} />
          )}
        </Container>
      </OnePageSection>
    </>
  );
};

export default KnowledgeTest;
