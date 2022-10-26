import { device } from "../helpers/breakpoints";
import { colors } from "../helpers/colors";
import { fontSize } from "./fontSize";
import styled from "styled-components";

export const H1 = styled.h1`
  font-family: "Noto Sans TC";
  font-weight: 700;
  font-size: ${fontSize.h3};
  letter-spacing: 0.05em;
  line-height: 30px;
  text-align: center;
  color: ${(props) => (props.title ? colors.white : colors.black)};

  @media ${device.tabletH} {
    font-size: ${fontSize.h1};
    line-height: 52px;
  }
`;

export const H2 = styled.h2`
  font-family: "Noto Sans TC";
  font-weight: 500;
  font-size: ${fontSize.p2};
  letter-spacing: 0.05em;
  line-height: 23px;
  color: ${colors.black};

  @media ${device.tabletH} {
    font-size: ${fontSize.h2};
    line-height: 35px;
  }
`;

export const SectionH2 = styled(H2)`
  border-bottom: 3px solid ${colors.primary};
  padding-bottom: 5px;
  display: inline-block;
`;

export const Content = styled.p`
  font-family: "Noto Sans TC";
  font-weight: 500;
  font-size: ${fontSize.p3};
  line-height: 20px;
  letter-spacing: 0.05em;
  color: ${(props) => (props.content ? colors.gray : colors.black)};

  @media ${device.tabletH} {
    font-size: ${fontSize.p1};
    line-height: 26px;
  }
`;

export const ContentTitle = styled.h3`
  font-family: "Noto Sans TC";
  font-weight: 500;
  font-size: ${fontSize.p2};
  line-height: 23px;
  letter-spacing: 0.05em;
  color: ${colors.black};

  @media ${device.tabletH} {
    font-size: ${fontSize.p1};
    line-height: 26px;
  }
`;

export const ListedItem = styled.li`
  font-family: "Noto Sans TC";
  font-weight: 400;
  font-size: ${fontSize.p3};
  letter-spacing: 0.05em;
  line-height: 20px;
  color: ${(props) => (props.clicked ? colors.primary : colors.black)};
  @media ${device.tabletH} {
    font-size: ${fontSize.p2};
    line-height: 23px;
  }
`;

export const Ahref = styled.a`
  text-decoration: none;
  color: ${colors.gray};
  &:hover {
    color: ${colors.primary};
  }
`;

export const PhraseTitle = styled.span`
  display: none;
  @media ${device.tablet} {
    display: inline-block;
    font-size: ${fontSize.p2};
    line-height: 23px;
    font-family: "Noto Sans TC";
    font-weight: 400;
    letter-spacing: 0.05em;
    color: ${(props) => (props.clicked ? colors.primary : colors.black)};
  }
`;
