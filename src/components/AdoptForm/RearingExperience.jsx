import { Col, Row } from "react-bootstrap";
import { BtnWrapper } from "../../pages/AdoptorInvestigation";
import Button from "../Button";
import { Description, ValidationMsg } from "../../helpers/typography";
import { InputGroup } from "../../pages/AdoptorInvestigation";
import { Input, Label, Radio, RadioGroup } from "../../helpers/layout";
import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";

export const RearingExperience = (props) => {
  const { phrase, nextStep, register, errors, prevStep, isDirty, isValid } =
    props;
  const { content } = phrase;
  const [anyCat, setAnyCat] = useState({});

  function getRadioValue(e, name) {
    name === "家中有其他貓成員嗎？" && setAnyCat({ [name]: e.target.value });
  }

  return (
    <>
      <Row>
        {content.map((input, i) => {
          const { name, type, description, required, pattern, options, child } =
            input;
          return (
            <Col xs={12} key={i}>
              <InputGroup>
                <Label name={name}>{name}</Label>
                <Description>{description}</Description>
                {options.map((option, i) => {
                  return (
                    <RadioGroup key={i}>
                      <Radio
                        radio={`
                          ${type === "radio"}
                        `}
                        name={name}
                        type={type}
                        value={option}
                        {...register(name, {
                          required: required,
                          pattern: pattern,
                        })}
                        onClick={(e) => getRadioValue(e, name)}
                      />

                      <label htmlFor={name}>{option}</label>
                    </RadioGroup>
                  );
                })}

                <ErrorMessage
                  errors={errors}
                  name={name}
                  render={({ message }) => (
                    <ValidationMsg>{message}</ValidationMsg>
                  )}
                />
              </InputGroup>
              {anyCat["家中有其他貓成員嗎？"] === "是" && child !== undefined && (
                <InputGroup>
                  <Label name={child.name}>{child.name}</Label>
                  <Description>{child.description}</Description>
                  <Input
                    name={child.name}
                    type={child.type}
                    {...register(child.name, {
                      required: child.required,
                      pattern: child.pattern,
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name={child.name}
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
        <Button active="true" onClick={prevStep}>
          上一步
        </Button>
        <Button active={isDirty && isValid ? "true" : ""} onClick={nextStep}>
          下一步
        </Button>
      </BtnWrapper>
    </>
  );
};
