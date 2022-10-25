import { Container } from "react-bootstrap";
import AdoptProcesses from "../components/AdoptProcesses";
import ImgMember from "../images/reservation/img-member.svg";
import Button from "../components/Button";
import { Image, LastSection, PageSection } from "../helpers/layout";
import { Content, H1 } from "../helpers/typography";
import styled from "styled-components";

const ImageSection = styled.div`
  max-width: 500px;
  margin: 20px auto;
`;

const Introduction = styled(Content)`
  text-align: justify;
  max-width: 750px;
  margin: auto;
`;

const Reservation = () => {
  return (
    <PageSection>
      <Container>
        <H1 className="text-center">歡迎進入預約認養系統</H1>
        <ImageSection>
          <Image src={ImgMember} alt="歡迎進入預約認養系統" />
        </ImageSection>
        <Introduction>
          在進入預約認養系統前，請選擇喜歡的寵物類型，以便進行後續的認養流程。選擇完成後會進入認養三大步驟，分別為飼養知識小遊戲、初步認識調查、預約認養寵物，麻煩你跟著我們一起完成每一步，讓我們在過程中更瞭解你～
        </Introduction>
        <AdoptProcesses />
        <LastSection className="text-center">
          <Button active="true" to={"/knowledgetest"}>
            預約認養
          </Button>
        </LastSection>
      </Container>
    </PageSection>
  );
};

export default Reservation;
