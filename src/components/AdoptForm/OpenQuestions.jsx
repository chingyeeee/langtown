import { Col, Row } from "react-bootstrap";
import { BtnWrapper } from "../../pages/AdoptorInvestigation";
import Button from "../Button";
import { Description, ValidationMsg } from "../../helpers/typography";
import { InputGroup } from "../../pages/AdoptorInvestigation";
import { Label, Input } from "../../helpers/layout";
import { ErrorMessage } from "@hookform/error-message";

export const OpenQuestion = (props) => {
  const { phrase, nextStep, setFormStart, register, errors, isDirty, isValid } =
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
            minLength,
            maxLength,
          } = input;

          return (
            <Col xs={12} key={i}>
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
            </Col>
          );
        })}
      </Row>
      <BtnWrapper>
        <Button active="true" onClick={() => setFormStart(false)}>
          上一步
        </Button>
        <Button active="true" onClick={nextStep}>
          下一步
        </Button>
      </BtnWrapper>
    </>
  );
};
