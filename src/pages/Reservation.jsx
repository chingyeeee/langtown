import { Container } from "react-bootstrap";
import AdoptProcesses from "../components/AdoptProcesses";
import ImgMember from "../images/reservation/img-member.svg";
import Button from "../components/Button";
const Reservation = () => {
  return (
    <section className="reservation">
      <Container>
        <h1 className="reservation-title">歡迎進入預約認養系統</h1>
        <div className="reserve-img">
          <img src={ImgMember} alt="歡迎進入預約認養系統" />
        </div>
        <p className="reservation-intro">
          在進入預約認養系統前，請選擇喜歡的寵物類型，以便進行後續的認養流程。選擇完成後會進入認養三大步驟，分別為飼養知識小遊戲、初步認識調查、預約認養寵物，麻煩你跟著我們一起完成每一步，讓我們在過程中更瞭解你～
        </p>
        <AdoptProcesses />
        <div className="process-button">
          <Button text={"預約認養"} to={"/knowledgetest"} />
        </div>
      </Container>
    </section>
  );
};

export default Reservation;
