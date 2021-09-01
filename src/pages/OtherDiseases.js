import React, {useState, useEffect, useContext} from "react";
import PageTitle from "../components/global/pageTitle";
import Footer from "../components/global/footer";
import NextBack from "../components/global/nextBackButtons";
import AbbreviationsFootnotes from "../components/global/abbreviationsFootnotes";
import Radio from "../components/primitives/radio";
import PageContainer from '../components/primitives/container'
import styled from 'styled-components/native'
import TextBasic from "../components/global/textBasic";
import {ApplicationContext} from '../applicationProvider/applicationProvider'
import TitleContainer from '../components/global/titleContainer'

const ContentTextContainer = styled.View`
  marginHorizontal: 20px;
  marginVertical: 10px;
`
const ImportantTextContainer = styled.Text`
  marginHorizontal: 20px;
  marginVertical: 10px;
`

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
      <PageContainer alignItems='flex-start' justifyContent='flex-start'>
        <TitleContainer>
        <PageTitle
          pageTitle="Evaluate for other forms of liver disease:"
        />
        </TitleContainer>
        <ContentTextContainer>
        <TextBasic fontSize={18}>
          Alcohol intake history (≥ 14 drinks/week for women or ≥ 21 drinks/week for men)
        </TextBasic>
        </ContentTextContainer>
        <ContentTextContainer>
        <TextBasic fontSize={18}>
          HCV antibody with reflex testing of HCV RNA
        </TextBasic>
        </ContentTextContainer>
        <ContentTextContainer>
        <TextBasic fontSize={18}>
          Consider ANA, AMA, ASMA, immunoglobulins, ferritin, A1AT 
        </TextBasic>
        </ContentTextContainer>
        <ImportantTextContainer>
        <TextBasic fontSize={18} fontWeight='bold' fontColor='#FC1B1F'>
          *If there are other forms of liver disease, click on the button below and then hit 'Next'. Otherwise, simply click 'Next'.
        </TextBasic>
        </ImportantTextContainer>
        <Radio 
          label='Other forms of liver disease present' 
          marginHorizontal={30} 
          onPressSelected={handleNextPresentSelected} 
          onPressUnselected={handleNextPresentUnselected}
        />
      </PageContainer>
      <NextBack 
        navigation={navigation} 
        marginVertical={10} 
        nextPage={nextPage}
      />
      <AbbreviationsFootnotes navigation={navigation} />
      <Footer navigation={navigation} />
    </>
  );
}
