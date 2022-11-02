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
  const {
    content,
    nextStep,
    setFormStart,
    register,
    errors,
    isDirty,
    isValid,
  } = props;

  return (
    <>
      <Row>
        {content.map((input, i) => {
          const {
            name,
            type,
            description,
            required,
            pattern,
            minLength,
            maxLength,
          } = input;
          return (
            <Col xs={12} md={6} key={i}>
              {type === "select" ? (
                <InputGroup>
                  <Label htmlFor={name}>{name}</Label>
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
                    min={type === "date" ? minLength.value : ""}
                    max={type === "date" ? maxLength.value : ""}
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
        <Button active="true" onClick={() => setFormStart(false)}>
          上一步
        </Button>
        <Button active={isDirty && isValid ? "true" : ""} onClick={nextStep}>
          下一步
        </Button>
      </BtnWrapper>
    </>
  );
};

export const AdoptorInformation = (props) => {
  const {
    phrase,
    nextStep,
    prevStep,
    register,
    errors,
    onSubmit,
    isDirty,
    isValid,
  } = props;
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
          isDirty={isDirty}
          isValid={isValid}
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
