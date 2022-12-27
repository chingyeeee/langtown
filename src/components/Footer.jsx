import { Link } from "react-router-dom";
import iconFooterStep from "../images/icons/icon-footerstep.svg";
import iconInstagram from "../images/icons/icon-instagram.svg";
import iconEmail from "../images/icons/icon-email.svg";
import styled from "styled-components";
import { colors } from "../helpers/colors";
import { H1 } from "../helpers/typography";
import { device } from "../helpers/breakpoints";
import { fontSize } from "../helpers/fontSize";
import { Image } from "../helpers/layout";

const FooBar = styled.footer`
  background-color: ${colors.secondary};
  padding: 100px 100px 45px;
  text-align: center;
  position: relative;
  @media ${device.tablet} {
    padding: 45px 100px;
  }
`;

const FooH1 = styled(H1)`
  @media ${device.tablet} {
    font-size: 48px;
  }
`;

const FooSteps = styled.div`
  width: 160px;
  position: absolute;
  z-index: 1;
  top: -60px;
  left: 50%;
  @media ${device.tablet} {
    width: 200px;
    left: 70%;
    top: -80px;
  }
  @media ${device.tabletH} {
    width: 250px;
    left: 68%;
    top: -80px;
  }
`;

const FooLink = styled(Link)`
  margin-top: 20px;
  font-size: ${fontSize.p2};
  text-decoration: none;
  color: ${colors.black};
  font-family: "Noto Sans TC";
  font-weight: 500;
  display: inline-block;
  &:hover {
    color: ${colors.white};
    transition: 0.2s;
  }
  @media ${device.tablet} {
    font-size: ${fontSize.p1};
    margin: 40px 20px 0 20px;
  }
`;

const MediaNav = styled.div`
  margin-top: 30px;
  .media-link {
    margin: 0 10px;
  }
  @media ${device.tabletH} {
    margin-top: 40px;
  }
`;

const Footer = () => {
  return (
    <FooBar>
      <FooH1>LANGTOWN</FooH1>
      <FooSteps>
        <Image src={iconFooterStep} alt="iconFooterStep" />
      </FooSteps>
      <ul className="d-md-flex justify-content-center">
        <li>
          <FooLink to="/aboutus">關於我們</FooLink>
        </li>
        <li>
          <FooLink to="/adoptionnotices">認養須知</FooLink>
        </li>
        <li>
          <FooLink to="/adoptioninformations">認養資訊</FooLink>
        </li>
        <li>
          <FooLink to="/adoptedstories">貓咪故事</FooLink>
        </li>
      </ul>

      <MediaNav className="d-flex justify-content-center">
        <a
          className="media-link"
          href="https://www.instagram.com/langtown_org/"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={iconInstagram} alt="Instagram" />
        </a>
        <a
          className="media-link"
          href="mailto:langlangdog@gmail.com?subject=Mail from Our Site"
        >
          <Image src={iconEmail} alt="Email" />
        </a>
      </MediaNav>
    </FooBar>
  );
};

export default Footer;
