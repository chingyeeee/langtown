import { ContentTitle, ListedItem } from "../../helpers/typography";
import styled from "styled-components";
import { device } from "../../helpers/breakpoints";
import Button from "../Button";

const List = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NextStep = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  @media ${device.tablet} {
    justify-content: flex-end;
  }
`;

export const Affidavit = (props) => {
  const { phrase, currentPhrase, setCurrentPhrase } = props;
  const { phraseSubTitle, phraseList } = phrase;

  return (
    <>
      <ContentTitle>{phraseSubTitle}</ContentTitle>
      <List className="mt-3 mb-5">
        {phraseList.map((item, i) => {
          return <ListedItem key={i}>{item}</ListedItem>;
        })}
      </List>
      <NextStep>
        <Button
          active="true"
          onClick={() => setCurrentPhrase(currentPhrase + 1)}
        >
          我了解了
        </Button>
      </NextStep>
    </>
  );
};
