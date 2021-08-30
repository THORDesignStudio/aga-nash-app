import React, {useState, useEffect, useContext} from "react";
import PageTitle from "../components/global/pageTitle";
import Footer from "../components/global/footer";
import NextBack from "../components/global/nextBackButtons";
import AbbreviationsFootnotes from "../components/global/abbreviationsFootnotes";
import Radio from "../components/primitives/radio";
import PageContainer from '../components/primitives/container'
import styled from 'styled-components/native'
import {useFonts} from 'expo-font'
import {ApplicationContext} from '../applicationProvider/applicationProvider'
import TitleContainer from '../components/global/titleContainer'

const ContentText = styled.Text`
  marginHorizontal: 20;
  marginVertical: 10;
  fontFamily: 'NunitoSans-Regular';
  fontSize: 16;
`
const ImportantText = styled.Text`
  marginHorizontal: 20;
  marginVertical: 10;
  fontFamily: 'NunitoSans-Bold';
  fontSize: 16;
  color: #FC1B1F;
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

  let [fontsLoaded] = useFonts({
    "NunitoSans-Bold": require("../assets/fonts/NunitoSans-Bold.ttf"),
    "NunitoSans-Regular": require("../assets/fonts/NunitoSans-Regular.ttf"),
  });
  return (
    <>
      <PageContainer alignItems='flex-start' justifyContent='flex-start'>
        <TitleContainer>
        <PageTitle
          pageTitle="Evaluate for other forms of liver disease:"
        />
        </TitleContainer>
        <ContentText>
          Alcohol intake history (≥ 14 drinks/week for women or ≥ 21 drinks/week for men)
        </ContentText>
        <ContentText>
          HCV antibody with reflex testing of HCV RNA
        </ContentText>
        <ContentText>
          Consider ANA, AMA, ASMA, immunoglobulins, ferritin, A1AT 
        </ContentText>
        <ImportantText>
          *If there are other forms of liver disease, click on the button below and then hit 'Next'. Otherwise, simply click 'Next'.
        </ImportantText>
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
