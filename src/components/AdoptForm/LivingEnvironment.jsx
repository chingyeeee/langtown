import { Col, Row } from "react-bootstrap";
import { BtnWrapper } from "../../pages/AdoptorInvestigation";
import Button from "../Button";
import { Description, ValidationMsg } from "../../helpers/typography";
import { InputGroup } from "../../pages/AdoptorInvestigation";
import { Label, Input } from "../../helpers/layout";
import { ErrorMessage } from "@hookform/error-message";
import { colors } from "../../helpers/colors";
import styled from "styled-components";
import { useState } from "react";

const Radio = styled.input`
  appearance: none;
  background-color: #fff;
  margin: 0;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid ${colors.lightGray};
  border-radius: 50%;
  display: grid;
  place-content: center;
  &::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
  }
  &:checked::before {
    transform: scale(1);
    background-color: ${colors.primary};
  }
  &:checked {
    border: 0.15em solid ${colors.primary};
  }
`;

const RadioGroup = styled.div`
  margin: 4px 0;
  display: flex;
  gap: 8px;
`;

export const LivingEnvironment = (props) => {
  const { phrase, nextStep, prevStep, register, errors } = props;
  const { content } = phrase;
  const [housevalue, setHouseValue] = useState({});
  const [liveAlone, setLiveAlone] = useState({});

  function getRadioValue(e, name, i) {
    name === "目前住處為租賃或自宅" &&
      setHouseValue({ [name]: e.target.value });

    name === "目前是否與他人同住？" && setLiveAlone({ [name]: e.target.value });
  }

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
            placeholder,
            options,
            child,
          } = input;
          return (
            <Col xs={12} key={i}>
              {type === "radio" ? (
                <>
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
                            onClick={(e) => getRadioValue(e, name, i)}
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
                  {housevalue["目前住處為租賃或自宅"] === "租賃" &&
                    child.name === "房東是否同意養貓？" && (
                      <InputGroup>
                        <Label name={child.name}>{child.name}</Label>
                        <Description>{child.description}</Description>
                        {child.options.map((option, i) => {
                          return (
                            <RadioGroup key={i}>
                              <Radio
                                radio={`
                          ${child.type === "radio"}
                        `}
                                name={child.name}
                                type={child.type}
                                value={option}
                                {...register(child.name, {
                                  required: child.required,
                                  pattern: child.pattern,
                                })}
                              />

                              <label htmlFor={child.name}>{option}</label>
                            </RadioGroup>
                          );
                        })}

                        <ErrorMessage
                          errors={errors}
                          name={child.name}
                          render={({ message }) => (
                            <ValidationMsg>{message}</ValidationMsg>
                          )}
                        />
                      </InputGroup>
                    )}
                  {liveAlone["目前是否與他人同住？"] === "是" &&
                    child.name === "同居人是否同意您養貓？" && (
                      <InputGroup>
                        <Label name={child.name}>{child.name}</Label>
                        <Description>{child.description}</Description>
                        {child.options.map((option, i) => {
                          return (
                            <RadioGroup key={i}>
                              <Radio
                                radio={`
                          ${child.type === "radio"}
                        `}
                                name={child.name}
                                type={child.type}
                                value={option}
                                {...register(child.name, {
                                  required: child.required,
                                  pattern: child.pattern,
                                })}
                              />

                              <label htmlFor={child.name}>{option}</label>
                            </RadioGroup>
                          );
                        })}

                        <ErrorMessage
                          errors={errors}
                          name={child.name}
                          render={({ message }) => (
                            <ValidationMsg>{message}</ValidationMsg>
                          )}
                        />
                      </InputGroup>
                    )}
                </>
              ) : (
                <InputGroup>
                  <Label htmlFor={name}>{name}</Label>
                  <Description>{description}</Description>
                  <Input
                    type={type}
                    placeholder={placeholder}
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
        <Button active="true" onClick={prevStep}>
          上一步
        </Button>
        <Button active="true" onClick={nextStep}>
          下一步
        </Button>
      </BtnWrapper>
    </>
  );
};
