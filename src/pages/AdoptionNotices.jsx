import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { OnePageSection } from "../helpers/layout";
import { H1 } from "../helpers/typography";

const AdoptionNotices = () => {
  return (
    <OnePageSection>
      <Container>
        <H1>認養前必備法寶</H1>
        <Outlet />
      </Container>
    </OnePageSection>
  );
};

export default AdoptionNotices;
