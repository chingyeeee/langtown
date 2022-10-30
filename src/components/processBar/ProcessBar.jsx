import PhraseIcons from "./PhraseIcons";
import styled from "styled-components";
import { colors } from "../../helpers/colors";
import { Content } from "../../helpers/typography";
import { device } from "../../helpers/breakpoints";

const ProcessWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  @media ${device.tablet} {
    max-width: 80%;
    margin: auto;
  }
`;

const ProcessPhrase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const PhraseIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${(props) =>
    props.active ? colors.primary : colors.secondary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  path {
    stroke: ${(props) => (props.active ? colors.black : colors.white)};
    fill: ${(props) => (props.active ? colors.black : colors.white)};
  }
`;

const PhraseWithBar = styled(ProcessPhrase)`
  position: relative;
  &::before {
    position: absolute;
    content: "";
    height: 5px;
    background-color: ${(props) =>
      props.active ? colors.primary : colors.secondary};
    width: 130%;
    top: 25px;
    left: -90px;
    margin: auto;
    z-index: -1;
  }
  @media ${device.tablet} {
    &::before {
      width: 200%;
      left: -150px;
    }
  }
  @media ${device.tabletH} {
    &::before {
      width: 220%;
      left: -200px;
    }
  }
  @media ${device.laptopL} {
    &::before {
      width: 250%;
      left: -250px;
    }
  }
  @media ${device.desktop} {
    &::before {
      width: 300%;
      left: -300px;
    }
  }
`;

const ProcessBar = (props) => {
  const { url, currentPhrase, totalPhrase } = props;

  return (
    <ProcessWrapper>
      <ProcessPhrase>
        <PhraseIcon
          active={
            url === "/knowledgetest" || currentPhrase <= totalPhrase
              ? "true"
              : ""
          }
        >
          <PhraseIcons.PhraseKnowledgeTest />
        </PhraseIcon>
        <Content>飼養知識小遊戲</Content>
      </ProcessPhrase>
      <PhraseWithBar
        active={
          currentPhrase === undefined
            ? ""
            : currentPhrase < totalPhrase
            ? "true"
            : ""
        }
      >
        <PhraseIcon
          active={
            currentPhrase === undefined
              ? ""
              : currentPhrase < totalPhrase
              ? "true"
              : ""
          }
        >
          <PhraseIcons.PhraseInvestigation />
        </PhraseIcon>
        <Content>初步認識調查</Content>
      </PhraseWithBar>
      <PhraseWithBar
        active={
          currentPhrase === undefined
            ? ""
            : currentPhrase >= totalPhrase - 1
            ? "true"
            : ""
        }
      >
        <PhraseIcon
          active={
            currentPhrase === undefined
              ? ""
              : currentPhrase >= totalPhrase - 1
              ? "true"
              : ""
          }
        >
          <PhraseIcons.PhraseMeeting />
        </PhraseIcon>
        <Content>預約見面時段</Content>
      </PhraseWithBar>
    </ProcessWrapper>
  );
};

export default ProcessBar;
