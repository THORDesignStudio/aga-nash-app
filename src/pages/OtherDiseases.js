import React, {useState, useEffect, useContext} from "react";
import PageTitle from "../components/global/pageTitle";
import Footer from "../components/global/footer";
import NextBack from "../components/global/nextBackButtons";
import AbbreviationsFootnotes from "../components/global/abbreviationsFootnotes";
import Radio from "../components/primitives/radio";
import ScrollableContainer from '../components/primitives/scrollableContainer'
import styled from 'styled-components/native'
import TextBasic from "../components/global/textBasic";
import {ApplicationContext} from '../applicationProvider/applicationProvider'
import TitleContainer from '../components/global/titleContainer'

export default function OtherForms({ navigation }) {
  const [nextPage, setNextPage] = useState('RiskManagement')
  const { setPageId, fib4} = useContext(ApplicationContext);
  
  useEffect(() => {
    navigation.addListener("focus", () => {
      setPageId('OtherDiseases')
    });
  }, [navigation]);

  const handleNextPresentSelected = () => {
      if(fib4 < 1.3 || fib4 > 2.67){
        setNextPage('HepRefer')
      } else {
        setNextPage('LSM')
      } 
  }

  const handleNextPresentUnselected = () => {
    setNextPage('RiskManagement')
  }


  return (
    <>
      <ScrollableContainer alignItems="flex-start" justifyContent="flex-start">
        <TitleContainer>
          <PageTitle pageTitle="Evaluate for other forms of liver disease:" />
        </TitleContainer>
        <TextBasic
          fontSize={18}
          marginVertical={5}
          marginHorizontal={20}
          textAlign="left"
        >
          {`\u2022 Alcohol intake history (≥ 14 drinks/week for women or ≥ 21 drinks/week for men) `}
        </TextBasic>
        <TextBasic
          fontSize={18}
          marginVertical={5}
          marginHorizontal={20}
          textAlign="left"
        >
          {`\u2022 Clinical signs of advanced liver disease/cirrhosis `}
        </TextBasic>
        <TextBasic
          fontSize={18}
          marginVertical={5}
          marginHorizontal={20}
          textAlign="left"
        >
          {`\u2022 HCV antibody with reflex testing of HCV RNA `}
        </TextBasic>
        <TextBasic
          fontSize={18}
          marginVertical={5}
          marginHorizontal={20}
          textAlign="left"
        >
          {`\u2022 Consider\u00B9 HBsAg, HBsAb, HBcAb `}
        </TextBasic>
        <TextBasic
          fontSize={18}
          marginVertical={5}
          marginHorizontal={20}
          textAlign="left"
        >
          {`\u2022 Consider ANA, AMA, ASMA, immunoglobulins, ferritin, A1AT  `}
        </TextBasic>
        <TextBasic
          fontSize={18}
          fontWeight="bold"
          fontColor="#FC1B1F"
          marginVertical={25}
          marginHorizontal={20}
          textAlign="left"
        >
          *If there are other forms of liver disease, click on the button below
          and then hit 'Next'. Otherwise, simply click 'Next'.
        </TextBasic>
        <Radio
          label="Other forms of liver disease present"
          marginHorizontal={20}
          onPressSelected={handleNextPresentSelected}
          onPressUnselected={handleNextPresentUnselected}
        />
        <NextBack
          navigation={navigation}
          marginVertical="0px"
          paddingVertical="20px"
          nextPage={nextPage}
          backgroundColor="#F1F6F8"
        />
      </ScrollableContainer>
      <AbbreviationsFootnotes navigation={navigation} />
      <Footer navigation={navigation} />
    </>
  );
}
