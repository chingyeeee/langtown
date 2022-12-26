import { ContentTitle, ListedItem } from "../../helpers/typography";
import styled from "styled-components";
import { BtnWrapper } from "../../pages/AdoptorInvestigation";
import Button from "../Button";

const List = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Affidavit = (props) => {
  const { phrase, nextStep } = props;
  const { phraseSubTitle, phraseList } = phrase;

  return (
    <>
      <ContentTitle>{phraseSubTitle}</ContentTitle>
      <List className="mt-3 mb-5">
        {phraseList.map((item, i) => {
          return (
            <ListedItem key={i}>
              {i + 1}. {item}
            </ListedItem>
          );
        })}
      </List>
      <BtnWrapper>
        <Button active="true" onClick={nextStep}>
          我瞭解了
        </Button>
      </BtnWrapper>
    </>
  );
};
