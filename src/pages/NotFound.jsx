import styled from "styled-components";
import { device } from "../helpers/breakpoints";
import { colors } from "../helpers/colors";
import { Image } from "../helpers/layout";
import { Content, H2 } from "../helpers/typography";
import IconError from "../images/icons/icon-error.svg";

const ImageWrapper = styled.div`
  width: 50%;
  @media ${device.tablet} {
    width: 15%;
  }
`;

const ErrorSection = styled.section`
  min-height: calc(100vh - 395px);
  padding: 120px 0;
  background-color: ${colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  @media ${device.tablet} {
    min-height: calc(100vh - 281.5px);
  }
`;

const NotFound = () => {
  return (
    <ErrorSection>
      <ImageWrapper>
        <Image src={IconError} />
      </ImageWrapper>
      <H2>唉呀！網站出現問題了</H2>
      <Content>請聯繫 langlangdog@gmail.com 謝謝</Content>
    </ErrorSection>
  );
};

export default NotFound;
