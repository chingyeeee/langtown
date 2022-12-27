import { Col, Row } from "react-bootstrap";
import { BtnWrapper } from "../../pages/AdoptorInvestigation";
import Button from "../Button";
import { InputGroup } from "../../pages/AdoptorInvestigation";
import { CheckBox, Label } from "../../helpers/layout";
import styled from "styled-components";
import { colors } from "../../helpers/colors";
import { fontSize } from "../../helpers/fontSize";
import { device } from "../../helpers/breakpoints";

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Submit = styled.button`
  background: ${(props) => (props.active ? colors.primary : colors.secondary)};
  color: ${(props) => (props.active ? colors.black : colors.white)};
  width: 100px;
  height: 32px;
  line-height: 30px;
  border-radius: 20px;
  font-weight: 400;
  font-size: ${fontSize.p3};
  pointer-events: ${(props) => (props.active ? "" : "none")};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Noto Sans TC";
  border: 0;
  margin-top: auto;
  &:hover {
    background: ${(props) =>
      props.active ? colors.primary : colors.secondary};
    color: ${(props) => (props.active ? colors.background : colors.white)};
    transition: 0.2s;
  }

  @media ${device.tabletH} {
    width: 120px;
    height: 40px;
    line-height: 38px;
    font-size: ${fontSize.p2};
  }
`;

export const Consent = (props) => {
  const { phrase, prevStep, setValue } = props;
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
                  <CheckBox
                    type={type}
                    onClick={(e) => {
                      setValue(name, e.target.checked ? "是" : "否");
                    }}
                    // {...register(name)}
                  />
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
        <Submit active="true" type="submit">
          送出表單
        </Submit>
      </BtnWrapper>
    </>
  );
};
