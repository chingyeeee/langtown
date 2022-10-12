import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const AdoptionNotices = () => {
  return (
    <section className="adopt-notices">
      <Container>
        <h1 className="notice-title">認養前必備法寶</h1>
        <Outlet />
      </Container>
    </section>
  );
};

export default AdoptionNotices;
