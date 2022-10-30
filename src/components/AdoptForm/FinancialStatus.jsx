import { Col, Row } from "react-bootstrap";
import { BtnWrapper } from "../../pages/AdoptorInvestigation";
import Button from "../Button";
import { Description, ValidationMsg } from "../../helpers/typography";
import { InputGroup } from "../../pages/AdoptorInvestigation";
import { Label, Input, Select } from "../../helpers/layout";
import { ErrorMessage } from "@hookform/error-message";

export const FinancialStatus = (props) => {
  const { phrase, nextStep, register, errors, prevStep, isDirty, isValid } =
    props;
  const { content } = phrase;

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
          } = input;
          return (
            <Col xs={12} key={i}>
              {type === "select" ? (
                <InputGroup>
                  <Label htmlFor={name}>{name}</Label>
                  <Select name={name}>
                    {options.map((option, i) => {
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
        <Button active="true" onClick={nextStep}>
          下一步
        </Button>
      </BtnWrapper>
    </>
  );
};
