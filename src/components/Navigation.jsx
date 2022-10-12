import logo from "../images/nav/logo.svg";
import footstep from "../images/nav/footstep.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";
import { colors } from "../helpers/colors";
import Button from "./Button";
import styled from "styled-components";
import { device } from "../helpers/breakpoints";

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${colors.black};
  display: inline-block;
  margin: 0 1.5rem;
  padding: 12px 0;
  &:hover {
    color: ${colors.white};
  }
`;

const NavButton = styled(Button)`
  background: ${colors.background};
  width: auto;
  margin: 12px 0;
  @media ${device.tabletH} {
    width: 120px;
    margin: 0 0 0 1.5rem;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  color: ${colors.black};
  display: inline-block;
  display: flex;
  align-items: center;
  font-weight: 700;
  &:hover {
    color: ${colors.black};
  }
`;

function Navigation() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="navbar" fixed="top">
        <Container>
          <Navbar.Brand>
            <Logo to="/">
              <img className="brand-logo" src={logo} alt="Langtown" />
              <h1 className="brand-name ms-3 d-none d-lg-block">LANGTOWN</h1>
            </Logo>
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
              <NavLink to="/aboutus">關於我們</NavLink>
              <NavLink to="/adoptionnotices">認養須知</NavLink>
              <NavLink to="/adoptioninformations">認養資訊</NavLink>
              <NavLink to="/adoptedstories">貓咪故事</NavLink>
              <NavButton active to={"/reservation"}>
                預約認養
              </NavButton>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Navigation;
