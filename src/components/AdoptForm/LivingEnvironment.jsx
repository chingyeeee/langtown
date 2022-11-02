import { Col, Row } from "react-bootstrap";
import { BtnWrapper } from "../../pages/AdoptorInvestigation";
import Button from "../Button";
import { Description, ValidationMsg } from "../../helpers/typography";
import { InputGroup } from "../../pages/AdoptorInvestigation";
import { Label, Input, Radio, RadioGroup } from "../../helpers/layout";
import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";

export const LivingEnvironment = (props) => {
  const { phrase, nextStep, prevStep, register, errors, isDirty, isValid } =
    props;
  const { content } = phrase;
  const [housevalue, setHouseValue] = useState({});
  const [liveAlone, setLiveAlone] = useState({});

  function getRadioValue(e, name) {
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
