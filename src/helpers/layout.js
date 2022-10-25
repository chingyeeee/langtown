import { device } from "./breakpoints";
import styled from "styled-components";
import { colors } from "./colors";

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
