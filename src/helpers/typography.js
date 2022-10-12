import { device } from "./device";
import { color } from "./color";
import { fontSize } from "./fontSize";
import styled from "styled-components";

export const H1 = styled.h1`
  font-family: "Noto Sans TC";
  font-weight: 700;
  font-size: ${fontSize.h3};
  letter-spacing: 0.05em;
  line-height: 30px;
  color: ${(props) => (props.title ? color.white : color.black)};

  @media ${device.laptopH} {
    font-size: ${fontSize.h1};
    line-height: 52px;
  }
`;

export const H2 = styled.h2`
  font-family: "Noto Sans TC";
  font-weight: 500;
  font-size: ${fontSize.p2};
  letter-spacing: 0.05em;
  line-height: 35px;
  color: ${color.black};

  @media ${device.laptopH} {
    font-size: ${fontSize.h2};
    line-height: 23px;
  }
`;

export const SectionH2 = styled(H2)`
  border-bottom: 3px solid $priamry;
  padding-bottom: 5px;
`;

export const Content = styled.p`
  font-family: "Noto Sans TC";
  font-weight: 500;
  font-size: ${fontSize.p3};
  line-height: 26px;
  letter-spacing: 0.05em;
  color: ${(props) => (props.content ? color.gray : color.black)};

  @media ${device.laptopH} {
    font-size: ${fontSize.p1};
    line-height: 20px;
  }
`;
