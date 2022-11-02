import Button from "../Button";
import { Content } from "../../helpers/typography";
import { BtnWrapper } from "../../pages/AdoptorInvestigation";
import styled from "styled-components";

const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const PhraseList = styled.div`
  flex-grow: 1;
`;

export const FinishForm = (props) => {
  const { phrase } = props;

  return (
    <Introduction>
      <PhraseList>
        <Content className="mb-3">{phrase.phraseSubTitle}</Content>
      </PhraseList>
      <BtnWrapper className="mt-5">
        <Button active="true" to="/">
          返回首頁
        </Button>
      </BtnWrapper>
    </Introduction>
  );
};
