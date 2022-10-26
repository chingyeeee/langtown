import ProcessBar from "../components/processBar/ProcessBar";
import { OnePageSection } from "../helpers/layout";
import { Container } from "react-bootstrap";
import { PhraseTitle } from "../helpers/typography";
import { H1 } from "../helpers/typography";
import { device } from "../helpers/breakpoints";
import styled from "styled-components";
import { colors } from "../helpers/colors";
import { Image } from "../helpers/layout";
import Img from "../images/knowledgeTest/00.png";
import { Affidavit } from "../components/AdoptForm/Affidavit";
import { useState } from "react";
import formArray from "../data/formArray";

const InvestigationBlock = styled.div`
  @media ${device.tablet} {
    display: flex;
  }
`;

const ImageBlock = styled.div`
  display: none;
  @media ${device.tablet} {
    width: 50%;
    display: block;
    margin: auto auto 0;
  }
`;

const AdoptPhrases = styled.div`
  width: 100%;
  display: flex;
  background-color: ${colors.secondary};
  box-sizing: border-box;
  padding: 15px 0;
  border-radius: 20px 20px 0 0;
  .phrases {
    display: flex;
    width: 60%;
    margin: auto;
    justify-content: space-around;
    @media ${device.tablet} {
      flex-direction: column;
      margin: 0 auto auto;
      gap: 16px;
    }
  }
  @media ${device.tablet} {
    width: 30%;
    flex-direction: column;
    justify-content: space-between;
    padding: 40px 0;
    border-radius: 20px 0 0 20px;
    gap: 48px;
  }
`;

const Phrase = styled.div`
  @media ${device.tablet} {
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    gap: 16px;
  }
`;

const PhraseState = styled.span`
  width: 20px;
  height: 20px;
  display: inline-block;
  background-color: ${colors.background};
  border-radius: 50%;
`;

const AdoptForm = styled.div`
  background-color: ${colors.background};
  box-sizing: border-box;
  padding: 40px;
  border-radius: 0 20px 20px 0;
  width: 100%;
  @media ${device.tablet} {
    width: 70%;
    padding: 40px 32px;
  }
`;

export const AdoptorInvestigation = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const totalPhrase = formArray.length;
  console.log(formArray);

  return (
    <>
      <OnePageSection>
        <Container>
          <ProcessBar />
          <H1 className="my-5">初步認識調查</H1>
          <InvestigationBlock>
            <AdoptPhrases>
              <div className="phrases">
                {formArray.map((phrase, i) => {
                  return (
                    <Phrase key={i}>
                      <PhraseState></PhraseState>
                      <PhraseTitle>{phrase.phrase}</PhraseTitle>
                    </Phrase>
                  );
                })}
              </div>
              <ImageBlock>
                <Image src={Img} alt="" />
              </ImageBlock>
            </AdoptPhrases>
            <AdoptForm>
              {currentPhrase === 0 ? (
                <Affidavit
                  phrase={formArray[currentPhrase]}
                  setCurrentPhrase={setCurrentPhrase}
                  currentPhrase={currentPhrase}
                />
              ) : (
                console.log(formArray)
              )}
            </AdoptForm>
          </InvestigationBlock>
        </Container>
      </OnePageSection>
    </>
  );
};
