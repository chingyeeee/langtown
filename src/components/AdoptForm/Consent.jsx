import { Col, Row } from "react-bootstrap";
import { BtnWrapper } from "../../pages/AdoptorInvestigation";
import Button from "../Button";
import { InputGroup } from "../../pages/AdoptorInvestigation";
import { CheckBox, Label } from "../../helpers/layout";
import styled from "styled-components";

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Consent = (props) => {
  const { phrase, nextStep, register, prevStep, isDirty, isValid } = props;
  const { content } = phrase;

  return (
    <>
      <Row>
        {content.map((input, i) => {
          const { name, type } = input;
          return (
            <Col xs={12} key={i}>
              <InputGroup>
                <CheckboxGroup>
                  <CheckBox type={type} {...register(name)} />
                  <Label htmlFor={name}>{name}</Label>
                </CheckboxGroup>
              </InputGroup>
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
