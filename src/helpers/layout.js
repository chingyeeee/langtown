import { device } from "./breakpoints";
import styled from "styled-components";
import { colors } from "./colors";
import { fontSize } from "./fontSize";
import IconSelect from "../images/icons/icon-select.svg";

export const PageSection = styled.section`
  padding-top: 120px;

  @media ${device.tabletH} {
    padding-top: 150px;
  }
`;

export const OnePageSection = styled(PageSection)`
  padding-top: 120px;
  padding-bottom: 60px;

  @media ${device.tabletH} {
    padding-top: 150px;
    padding-bottom: 100px;
  }
`;

export const LittleSection = styled.section`
  @media ${device.tabletH} {
    padding: 60px;
  }
  padding: 20px 0;
  background-color: ${(props) => {
    switch (props.$mode) {
      case "orange":
        return colors.secondary;

      case "yellow":
        return colors.yellow;

      default:
        return colors.background;
    }
  }};
`;

export const LastSection = styled(LittleSection)`
  padding: 20px 0 60px;
  @media ${device.tabletH} {
    padding: 60px 0 100px;
  }
`;

export const ImageSection = styled.section`
  margin-top: 84px;
  height: 90vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  background-image: url(${(props) => props.src});
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  vertical-align: bottom;
  border-radius: 20px;
`;

export const Input = styled.input`
  border-radius: 3px;
  border: 1px solid ${colors.lightGray};
  color: ${colors.gray};
  transition: 0.3s;
  outline: none;
  padding: 8px 12px;
  font-size: ${fontSize.p3};
  box-sizing: border-box;
  margin-bottom: 2rem;
  width: 100%;
  &:focus {
    border: 1px solid ${colors.primary};
  }
  @media ${device.tablet} {
    font-size: ${fontSize.p2};
  } ;
`;

export const Label = styled.label`
  display: block;
  color: ${colors.black};
  font-size: ${fontSize.p2};
  font-family: "Noto Sans TC";
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0.05em;
  @media ${device.tablet} {
    font-size: ${fontSize.p1};
  } ;
`;

export const Select = styled.select`
  background: url(${IconSelect}) no-repeat right center transparent;
  border-radius: 3px;
  border: 1px solid ${colors.lightGray};
  background-color: ${colors.white};
  color: ${colors.gray};
  transition: 0.3s;
  outline: none;
  padding: 8px 12px;
  font-size: ${fontSize.p3};
  box-sizing: border-box;
  margin-bottom: 2rem;
  appearance: none;
  width: 100%;
  option {
    background-color: ${colors.white};
    color: ${colors.gray};
    font-family: "Noto Sans TC";
    font-weight: 500;
    font-size: ${fontSize.p3};
    @media ${device.tabletH} {
      font-size: ${fontSize.p1};
    }
  }
  &:focus {
    border: 1px solid ${colors.primary};
  }
  @media ${device.tablet} {
    font-size: ${fontSize.p2};
  } ;
`;
