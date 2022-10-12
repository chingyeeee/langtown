import { Link } from "react-router-dom";
import { fontSize } from "../helpers/fontSize";
import { colors } from "../helpers/colors";
import { device } from "../helpers/breakpoints";
import styled from "styled-components";

const LinkButton = styled(Link)`
							  background: ${(props) => (props.active ? colors.primary : colors.secondary)};
							  color: ${(props) => (props.active ? colors.black : colors.white)};
							  width: 100px;
							  height: 32px;
							  line-height: 32px;
								border-radius: 20px;
								font-weight: 400;
								font-size: ${fontSize.p3};
                text-decoration:none;
								pointerEvents: ${(props) => (props.active ? "" : "none")};
                text-align:center;

								&:hover{
								background: ${(props) => (props.active ? colors.primary : colors.secondary)};
							  color: ${(props) => (props.active ? colors.background : colors.white)};
								transitiion: 0.2s;
								}

							  @media ${device.tabletH} { 
							    width: 120px;
								  height: 40px;
									line-height: 40px;
								  font-size: ${fontSize.p2}
								`;

const Button = (props) => {
  const { active, text, to } = props;
  return (
    <LinkButton active={active} to={to}>
      {text}
    </LinkButton>
  );
};

export default Button;
