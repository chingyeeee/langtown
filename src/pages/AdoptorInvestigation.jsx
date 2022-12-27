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
import { AdoptorInformation } from "../components/AdoptForm/AdoptorInformation";
import Done from "../images/icons/icon-done.svg";
import { useForm } from "react-hook-form";
import { FinancialStatus } from "../components/AdoptForm/FinancialStatus";
import { LivingEnvironment } from "../components/AdoptForm/LivingEnvironment";
import { RearingExperience } from "../components/AdoptForm/RearingExperience";
import { OpenQuestion } from "../components/AdoptForm/OpenQuestions";
import { Consent } from "../components/AdoptForm/Consent";
import { FinishForm } from "../components/AdoptForm/FinishForm";
import emailjs from "@emailjs/browser";

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
    width: 75%;
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
  opacity: ${(props) => (props.active ? 1 : 0.5)};
  @media ${device.tablet} {
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    gap: 16px;
  }
`;

const PhraseState = styled.div`
  width: 20px;
  height: 20px;
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.past ? colors.primary : colors.background};
  border-radius: 50%;
  box-sizing: border-box;
  border: 3px solid
    ${(props) => (props.active ? colors.primary : colors.transparent)};
`;

const AdoptForm = styled.div`
  background-color: ${colors.background};
  box-sizing: border-box;
  padding: 40px;
  border-radius: 0 20px 20px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    width: 70%;
    padding: 40px 32px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 2rem;
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-grow: 1;
  a {
    margin-top: auto;
  }
  @media ${device.tablet} {
    justify-content: flex-end;
  }
`;

export const AdoptorInvestigation = () => {
  const totalPhrase = formArray.length;
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const { register, handleSubmit, formState, reset, setValue } = useForm({
    mode: "onChange",
    defaultValues: {
      "我同意簽屬認養切結書以保障貓、送養方、認養方權益": "否",
      "我願意先來看貓互動乙次（中途位於新竹，疫情期間可略過）": "否",
      "我願意和中途保持聯繫、分享貓咪照片，讓中途送養方知道貓咪近況（用 Line 聯絡／Instagram、臉書曬貓）":
        "否",
      "我願意提供黑白身分證影本（加蓋「貓咪認養用」印章，不做他用）": "否",
      "我願意讓中途送養方送貓到府（只於送養當天到府乙次，停留 30 分鐘以下，後續不再到府打擾）":
        "否",
      "我願意負擔貓的醫療費用（明細列於貼文中,皆附上醫院收據）": "否",
      我願意配合施作窗戶防護: "否",
    },
  });
  const { errors, isDirty, isValid } = formState;

  const sendEmail = (formData) => {
    setCurrentPhrase(currentPhrase + 1);
    emailjs
      .send(
        "service_d976svk",
        "template_f8miu87",
        formData,
        "FPlZdT0bHMQDsjuff"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.error(error.text);
        }
      );
    emailjs
      .send(
        "service_d976svk",
        "template_o38k4fi",
        formData,
        "FPlZdT0bHMQDsjuff"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.error(error.text);
        }
      );
    reset();
  };

  const nextStep = () => {
    setCurrentPhrase(currentPhrase + 1);
  };

  const prevStep = () => {
    setCurrentPhrase(currentPhrase - 1);
  };

  return (
    <>
      <OnePageSection>
        <Container>
          <ProcessBar currentPhrase={currentPhrase} totalPhrase={totalPhrase} />
          <H1 className="my-5">初步認識調查</H1>
          <InvestigationBlock>
            <AdoptPhrases>
              <div className="phrases">
                {formArray.map((phrase, i) => {
                  return (
                    <Phrase key={i} active={phrase.phrase === currentPhrase}>
                      <PhraseState
                        past={phrase.phrase < currentPhrase}
                        active={phrase.phrase === currentPhrase}
                      >
                        <Image src={Done} />
                      </PhraseState>
                      <PhraseTitle>{phrase.phraseTitle}</PhraseTitle>
                    </Phrase>
                  );
                })}
              </div>
              <ImageBlock>
                <Image src={Img} alt="" />
              </ImageBlock>
            </AdoptPhrases>
            <AdoptForm>
              <form
                className="h-100 d-flex flex-column"
                onSubmit={handleSubmit(sendEmail)}
              >
                {currentPhrase === 0 ? (
                  <Affidavit
                    phrase={formArray[currentPhrase]}
                    nextStep={nextStep}
                  />
                ) : currentPhrase === 1 ? (
                  <AdoptorInformation
                    phrase={formArray[currentPhrase]}
                    nextStep={nextStep}
                    prevStep={prevStep}
                    register={register}
                    errors={errors}
                    isDirty={isDirty}
                    isValid={isValid}
                  />
                ) : currentPhrase === 2 ? (
                  <FinancialStatus
                    phrase={formArray[currentPhrase]}
                    nextStep={nextStep}
                    prevStep={prevStep}
                    register={register}
                    errors={errors}
                    isDirty={isDirty}
                    isValid={isValid}
                  />
                ) : currentPhrase === 3 ? (
                  <LivingEnvironment
                    phrase={formArray[currentPhrase]}
                    nextStep={nextStep}
                    prevStep={prevStep}
                    register={register}
                    errors={errors}
                    isDirty={isDirty}
                    isValid={isValid}
                  />
                ) : currentPhrase === 4 ? (
                  <RearingExperience
                    phrase={formArray[currentPhrase]}
                    nextStep={nextStep}
                    prevStep={prevStep}
                    register={register}
                    errors={errors}
                    isDirty={isDirty}
                    isValid={isValid}
                  />
                ) : currentPhrase === 5 ? (
                  <OpenQuestion
                    phrase={formArray[currentPhrase]}
                    nextStep={nextStep}
                    prevStep={prevStep}
                    register={register}
                    errors={errors}
                    isDirty={isDirty}
                    isValid={isValid}
                  />
                ) : currentPhrase === 6 ? (
                  <Consent
                    phrase={formArray[currentPhrase]}
                    prevStep={prevStep}
                    setValue={setValue}
                  />
                ) : (
                  currentPhrase === totalPhrase - 1 && (
                    <FinishForm phrase={formArray[currentPhrase]} />
                  )
                )}
              </form>
            </AdoptForm>
          </InvestigationBlock>
        </Container>
      </OnePageSection>
    </>
  );
};
