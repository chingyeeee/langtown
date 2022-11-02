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
import { Image } from "../helpers/layout";
import { useRef } from "react";

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${colors.black};
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
  font-family: "Noto Sans TC";
  &:hover {
    color: ${colors.black};
  }
`;

const NavBar = styled(Navbar)`
  background-color: ${colors.secondary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const NavBarCollapse = styled(Navbar.Collapse)`
  display: flex;
  @media ${device.tabletH} {
    display: initial;
  }
`;

function Navigation() {
  const navButton = useRef(null);
  const linksContainerRef = useRef(null);

  function collapseNav() {
    navButton.current.classList.add("collapsed");
    linksContainerRef.current.classList.remove("show");
  }

  return (
    <>
      <NavBar collapseOnSelect expand="lg" fixed="top">
        <Container>
          <Navbar.Brand>
            <Logo to="/" onClick={collapseNav}>
              <Image src={logo} alt="Langtown" />
              <h1 className="brand-name ms-3 d-none d-lg-block">LANGTOWN</h1>
            </Logo>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav align-items-center"
            id="navbutton"
            ref={navButton}
          />
          <NavBarCollapse id="responsive-navbar-nav" ref={linksContainerRef}>
            <div className="footsteps d-lg-none">
              <Image src={footstep} alt="footstep" />
            </div>
            <Nav className="ms-auto text-center">
              <NavLink to="/aboutus" onClick={collapseNav}>
                關於我們
              </NavLink>
              <NavLink to="/adoptionnotices" onClick={collapseNav}>
                認養須知
              </NavLink>
              <NavLink to="/adoptioninformations" onClick={collapseNav}>
                認養資訊
              </NavLink>
              <NavLink to="/adoptedstories" onClick={collapseNav}>
                貓咪故事
              </NavLink>
              <NavButton
                active="true"
                to={"/reservation"}
                onClick={collapseNav}
              >
                預約認養
              </NavButton>
            </Nav>
          </NavBarCollapse>
        </Container>
      </NavBar>
      <Outlet />
    </>
  );
}

export default Navigation;
