import logo from "../images/nav/logo.svg";
import footstep from "../images/nav/footstep.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";
import Button from "./Button";

function Navigation() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="navbar" fixed="top">
        <Container>
          <Navbar.Brand>
            <Link className="brand d-lg-flex align-items-center" to="/">
              <img className="brand-logo" src={logo} alt="Langtown" />
              <h1 className="brand-name ms-3 d-none d-lg-block">LANGTOWN</h1>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            className="border-0"
            aria-controls="responsive-navbar-nav align-items-center"
          />
          <Navbar.Collapse className="collapse-nav" id="responsive-navbar-nav">
            <div className="footsteps d-lg-none">
              <img src={footstep} alt="footstep" />
            </div>
            <Nav className="ms-auto text-center">
              <Link className="mx-4 navlink" to="/aboutus">
                關於我們
              </Link>
              <Link className="mx-4 navlink" to="/adoptionnotices">
                認養須知
              </Link>
              <Link className="mx-4 navlink" to="/adoptioninformations">
                認養資訊
              </Link>
              <Link className="mx-4 navlink" to="/adoptedstories">
                貓咪故事
              </Link>
              <div className="mx-4 btn-reserve">
                <Button
                  active={true}
                  className="mx-4"
                  text={"預約認養"}
                  to={"/reservation"}
                />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Navigation;
