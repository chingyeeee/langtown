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
  width: ${(props) => (props.radio ? "auto" : "100%")};
  ::placeholder {
    color: ${colors.lightGray};
    opacity: 0.8;
  }
  &:focus {
    border: 1px solid ${colors.primary};
  }
  &:checked {
    border: 6px solid ${colors.primary};
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

export const Radio = styled.input`
  appearance: none;
  background-color: #fff;
  margin: 0;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid ${colors.lightGray};
  border-radius: 50%;
  display: grid;
  place-content: center;
  &::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
  }
  &:checked::before {
    transform: scale(1);
    background-color: ${colors.primary};
  }
  &:checked {
    border: 0.15em solid ${colors.primary};
  }
`;

export const RadioGroup = styled.div`
  margin: 4px 0;
  display: flex;
  gap: 8px;
`;

export const CheckBox = styled.input`
  background-color: ${colors.white};
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid ${colors.lightGray};
  box-sizing: border-box;
  appearance: none;
  display: grid;
  place-content: center;
  margin-top: 0.2rem;
  &::before {
    content: "";
    width: 1em;
    height: 1em;
    transition: 120ms transform ease-in-out;
  }
  &:checked::before {
    transform: scale(1);
    background-color: ${colors.primary};
    color: ${colors.white};
    border: 0.15em solid ${colors.white};
  }
`;
