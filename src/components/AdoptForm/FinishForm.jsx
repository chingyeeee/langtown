import Button from "../Button";
import { Content } from "../../helpers/typography";
import { BtnWrapper } from "../../pages/AdoptorInvestigation";
import styled from "styled-components";
import { colors } from "../../helpers/colors";
import { fontSize } from "../../helpers/fontSize";
import { device } from "../../helpers/breakpoints";

const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const PhraseList = styled.div`
  flex-grow: 1;
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

export const FinishForm = (props) => {
  const { phrase, isDirty, isValid } = props;

  return (
    <Introduction>
      <PhraseList>
        <Content className="mb-3">{phrase.phraseSubTitle}</Content>
      </PhraseList>
      <BtnWrapper className="mt-5">
        <Submit active={isDirty && isValid ? "true" : ""} type="submit">
          送出表單
        </Submit>
        <Button active="true" to="/">
          返回首頁
        </Button>
      </BtnWrapper>
    </Introduction>
  );
};
