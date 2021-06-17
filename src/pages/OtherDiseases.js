import React, {useState} from "react";
import PageTitle from "../components/global/pageTitle";
import Footer from "../components/global/footer";
import NextBack from "../components/global/nextBackButtons";
import AbbreviationsFootnotes from "../components/global/abbreviationsFootnotes";
import Radio from "../components/primitives/radio";
import PageContainer from '../components/primitives/container'
import styled from 'styled-components/native'
import {useFonts} from 'expo-font'

const ContentText = styled.Text`
  marginHorizontal: 20;
  marginVertical: 20;
  fontFamily: 'NunitoSans-Regular';
  fontSize: 16;
`

export default function OtherForms({ navigation }) {
  const [nextPage, setNextPage] = useState('')

  const handleNextPresent = () => {
    setNextPage('')
  }
const handleNextNotPresent = () => {
  setNextPage('RiskManagement')
}
  let [fontsLoaded] = useFonts({
    "NunitoSans-SemiBold": require("../assets/fonts/NunitoSans-SemiBold.ttf"),
    "NunitoSans-Regular": require("../assets/fonts/NunitoSans-Regular.ttf"),
  });
  return (
    <>
      <PageContainer alignItems='flex-start' >
        <PageTitle
          pageTitle="Evaluate for other forms of liver disease:"
          marginHorizontal={20}
        />
        <ContentText>
        Alcohol intake history (≥ 14 drinks/week for women or ≥ 21 drinks/week for men)
        </ContentText>
        <ContentText>
        HCV antibody with reflex testing of HCV RNA
        </ContentText>
        <ContentText>
        Consider ANA, AMA, ASMA, immunoglobulins, ferritin, A1AT 
        </ContentText>
        <Radio label='Other forms of liver disease present' marginHorizontal={20} onPress={handleNextPresent} />
        <Radio label='No other forms of liver disease present' marginHorizontal={20} onPress={handleNextNotPresent}  />
      </PageContainer>
      <NextBack navigation={navigation} marginVertical={10} nextPage={nextPage}/>
      <AbbreviationsFootnotes navigation={navigation} />
      <Footer navigation={navigation} />
    </>
  );
}
