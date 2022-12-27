import { Link } from "react-router-dom";
import { fontSize } from "../helpers/fontSize";
import { colors } from "../helpers/colors";
import { device } from "../helpers/breakpoints";
import styled from "styled-components";

const Button = styled(Link)`
  background: ${(props) => (props.active ? colors.primary : colors.secondary)};
  color: ${(props) => (props.active ? colors.black : colors.white)};
  width: 100px;
  height: 32px;
  line-height: 30px;
  border-radius: 20px;
  font-weight: 400;
  font-size: ${fontSize.p3};
  text-decoration: none;
  pointer-events: ${(props) => (props.active ? "" : "none")};
  text-align: center;
  display: inline-block;
  font-family: "Noto Sans TC";

  &:hover {
    background: ${(props) =>
      props.active ? colors.primary : colors.secondary};
    color: ${(props) => (props.active ? colors.background : colors.white)};
    transition: 0.2s;
  }

  @media ${device.tabletH} {
    width: 120px;
    height: 40px;
    line-height: 38px;
    font-size: ${fontSize.p2};
  }
`;

export default Button;
