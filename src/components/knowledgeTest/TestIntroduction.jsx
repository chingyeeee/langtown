import { device } from "../../helpers/breakpoints";
import styled from "styled-components";
import { colors } from "../../helpers/colors";
import Button from "../Button";
import { Image } from "../../helpers/layout";
import { Content, ContentTitle } from "../../helpers/typography";
import Img from "../../images/knowledgeTest/00.png";

const KnowledgeTestIntro = styled.div`
  @media ${device.tablet} {
    display: flex;
    align-items: center;
  }
`;

const ImageBlock = styled.div`
  width: 100%;
  @media ${device.tablet} {
    width: 40%;
  }
`;

const IntroBlock = styled.div`
  background-color: ${colors.background};
  box-sizing: border-box;
  padding: 40px;
  border-radius: 20px;
  width: 100%;
  @media ${device.tablet} {
    width: 60%;
    padding: 40px 32px;
  }
`;

const NextStep = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  @media ${device.tablet} {
    justify-content: flex-end;
  }
`;

export const TestIntroduction = (props) => {
  const { setTestStart } = props;

  return (
    <KnowledgeTestIntro>
      <ImageBlock>
        <Image src={Img} alt="" />
      </ImageBlock>
      <IntroBlock>
        <ContentTitle>任務說明</ContentTitle>
        <Content className="my-5">
          WOW～恭喜你，要進入飼養知識小遊戲了！是不是已經摩拳擦掌、準備好要大展身手呢？或是，即便得到很多能量、很多知識的學習，仍舊覺得自己沒有準備好，會有些不安的情緒呢？沒關係，這裡我們會帶你一起上手，早日脫離菜鳥飼主的行列，那就一起開始吧！
        </Content>
        <NextStep>
          <Button active="true" onClick={() => setTestStart(true)}>
            開始測驗
          </Button>
        </NextStep>
      </IntroBlock>
    </KnowledgeTestIntro>
  );
};
