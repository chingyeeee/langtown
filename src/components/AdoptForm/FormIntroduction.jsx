import Button from "../Button";
import { useState } from "react";
import { Content } from "../../helpers/typography";
import { BtnWrapper } from "../../pages/AdoptorInvestigation";
import styled from "styled-components";
import { Input, Label, Select } from "../../helpers/layout";
import { Col, Row } from "react-bootstrap";
import { Prev } from "react-bootstrap/esm/PageItem";

const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const PhraseList = styled.div`
  flex-grow: 1;
`;

const FormIntroduction = (props) => {
  const { phraseList, setFormStart, prevStep } = props;

  return (
    <Introduction>
      <PhraseList>
        {phraseList.map((item, i) => {
          return (
            <Content className="mb-3" key={i}>
              {item}
            </Content>
          );
        })}
      </PhraseList>
      <BtnWrapper className="mt-5">
        <Button active="true" onClick={prevStep}>
          上一步
        </Button>
        <Button active="true" onClick={() => setFormStart(true)}>
          開始填寫
        </Button>
      </BtnWrapper>
    </Introduction>
  );
};

const BasicInformation = (props) => {
  const { content, nextStep, setFormStart } = props;

  return (
    <>
      <Row>
        {content.map((input, i) => {
          return (
            <Col xs={12} md={6}>
              {input.type === "select" ? (
                <>
                  <Label name={input.name}>{input.name}</Label>
                  <Select name={input.name}>
                    {input.options.map((option, i) => {
                      return <option key={i}>{option}</option>;
                    })}
                  </Select>
                </>
              ) : (
                <>
                  <Label name={input.name}>{input.name}</Label>
                  <Input type={input.type} />
                </>
              )}
            </Col>
          );
        })}
      </Row>
      <BtnWrapper>
        <Button active="true" onClick={() => setFormStart(false)}>
          上一步
        </Button>
        <Button onClick={nextStep}>下一步</Button>
      </BtnWrapper>
    </>
  );
};

export const AdoptorInformation = (props) => {
  const { phrase, nextStep, prevStep } = props;
  const { content, phraseList } = phrase;
  const [formStart, setFormStart] = useState(false);

  return (
    <>
      {formStart ? (
        <BasicInformation
          content={content}
          setFormStart={setFormStart}
          nextStep={nextStep}
        />
      ) : (
        <FormIntroduction
          phraseList={phraseList}
          setFormStart={setFormStart}
          prevStep={prevStep}
        />
      )}
    </>
  );
};
