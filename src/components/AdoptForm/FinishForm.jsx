import Button from "../Button";
import { Content } from "../../helpers/typography";
import { BtnWrapper } from "../../pages/AdoptorInvestigation";
import styled from "styled-components";
import { Image } from "../../helpers/layout";
import IconBone from "../../images/icons/icon-bone.svg";
import { device } from "../../helpers/breakpoints";

const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const PhraseList = styled.div`
  flex-grow: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  @media ${device.tablet} {
    width: 80%;
    margin: auto;
  }
`;

const ImageWrapper = styled.div`
  width: 20%;
`;

export const FinishForm = (props) => {
  const { phrase } = props;

  return (
    <Introduction>
      <PhraseList>
        <ImageWrapper>
          <Image src={IconBone} />
        </ImageWrapper>
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
