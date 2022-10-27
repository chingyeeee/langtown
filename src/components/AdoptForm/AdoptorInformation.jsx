import Button from "../Button";
import { useState } from "react";
import { Content, Description, ValidationMsg } from "../../helpers/typography";
import { BtnWrapper, InputGroup } from "../../pages/AdoptorInvestigation";
import styled from "styled-components";
import { Input, Label, Select } from "../../helpers/layout";
import { Col, Row } from "react-bootstrap";
import { ErrorMessage } from "@hookform/error-message";

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
  const { content, nextStep, setFormStart, register, errors } = props;

  return (
    <>
      <Row>
        {content.map((input, i) => {
          const { name, type, description, required, pattern } = input;
          // console.log(pattern);

          return (
            <Col xs={12} md={6} key={i}>
              {type === "select" ? (
                <InputGroup>
                  <Label name={name}>{name}</Label>
                  <Select name={name}>
                    {input.options.map((option, i) => {
                      return <option key={i}>{option}</option>;
                    })}
                  </Select>
                </InputGroup>
              ) : (
                <InputGroup>
                  <Label htmlFor={name}>{name}</Label>
                  <Description>{description}</Description>
                  <Input
                    type={type}
                    {...register(name, {
                      required: required,
                      pattern: pattern,
                    })}
                  />

                  <ErrorMessage
                    errors={errors}
                    name={name}
                    render={({ message }) => (
                      <ValidationMsg>{message}</ValidationMsg>
                    )}
                  />
                </InputGroup>
              )}
            </Col>
          );
        })}
      </Row>
      <BtnWrapper>
        <input type="submit" />
        <Button active="true" onClick={() => setFormStart(false)}>
          上一步
        </Button>
        <Button onClick={nextStep}>下一步</Button>
      </BtnWrapper>
    </>
  );
};

export const AdoptorInformation = (props) => {
  const { phrase, nextStep, prevStep, register, errors, onSubmit } = props;
  const { content, phraseList } = phrase;
  const [formStart, setFormStart] = useState(false);

  return (
    <>
      {formStart ? (
        <BasicInformation
          content={content}
          setFormStart={setFormStart}
          nextStep={nextStep}
          register={register}
          errors={errors}
          onSubmit={onSubmit}
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
