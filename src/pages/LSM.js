import React, {useState, useContext, useEffect} from 'react'
import Footer from '../components/global/footer'
import AbbreviationsFootnotes from '../components/global/abbreviationsFootnotes'
import Button from '../components/primitives/button'
import PageContainer from '../components/primitives/container'
import TitleContainer from '../components/global/titleContainer'
import PageTitle from '../components/global/pageTitle'
import styled from 'styled-components'
import {useFonts} from 'expo-font'
import {ApplicationContext} from '../applicationProvider/applicationProvider'
import {Text} from 'react-native'

const SectionContainer = styled.View`
  flexDirection: column;
  alignItems: center;
  justifyContent: flex-start;
  textAlign: center;
`;
const TextContainer = styled.View`
  marginTop: 10;
  textAlign: center;
`;

const SectionText = styled.Text`
  fontSize: 15;
  fontFamily: 'NunitoSans-Bold';
  marginVertical: 20;
`

const ButtonContainer = styled.View`
  alignItems: center;
  marginVertical: 10;
  width: 100;
`;

const ButtonView = styled.View`
  display: flex;
  flexDirection: column;
`
const ButtonText = styled.Text`
  color: white;
  fontSize: 20;
  fontFamily: 'NunitoSans-Regular';
  textAlign: center;
`


export default function LSM({navigation}){
  const {setPageId, setFib4} = useContext(ApplicationContext)

  useEffect(() => {
    navigation.addListener("focus", () => {
      setPageId('LSM')
    });
  }, [navigation]);


  let [fontsLoaded] = useFonts({
    'NunitoSans-Bold': require('../assets/fonts/NunitoSans-Bold.ttf'),
    'NunitoSans-Regular': require('../assets/fonts/NunitoSans-Regular.ttf'),
  });


  const handleLowRisk = () => {
    setFib4(1.29);
    navigation.navigate('RiskManagement')
  }

  const handleIndeterminateRisk = () => {
    setFib4(1.4);
    navigation.navigate('RiskManagement')
  }

  const handleHighRisk = () => {
    setFib4(2.8);
    navigation.navigate('RiskManagement')
  }

  const LowRiskText = (
    <ButtonView>
      <ButtonText>
        LOW RISK
      </ButtonText>
      <ButtonText>
      LSM {'<'} 8 kPa
      </ButtonText>
    </ButtonView>
  )

  const HighRiskText = (
    <ButtonView>
      <ButtonText>
      HIGH RISK 
      </ButtonText>
      <ButtonText>
      LSM {'>'} 12 kPa
      </ButtonText>
    </ButtonView>
  )

  return(
    <>
    <PageContainer justifyContent='flex-start'>
      <TitleContainer>
        <PageTitle pageTitle='Order VCTE (FibroScan®) for liver stiffness measurement (LSM)' />
      </TitleContainer>
      <SectionContainer>
        <SectionText>
          Pick one based on LSM results:
        </SectionText>
          <ButtonContainer>
            <Button
              buttonText={LowRiskText}
              buttonBgClr="#77C83F"
              borderRadius={30}
              borderWidth={0.1}
              textClr="white"
              buttonHeight={60}
              textWidth="75%"
              onPress={handleLowRisk}
            />
          </ButtonContainer>
          <ButtonContainer>
            <Button
              buttonText='INDETERMINATE RISK LSM 8 to 12 kPa'
              buttonBgClr="#E49917"
              borderRadius={30}
              borderWidth={0.1}
              textClr="white"
              buttonHeight={60}
              textWidth="75%"
              fontSize={18}
              onPress={handleIndeterminateRisk}
            />
          </ButtonContainer>
          <ButtonContainer>
            <Button
              buttonText={HighRiskText}
              buttonBgClr="#FC1B1F"
              borderRadius={30}
              borderWidth={0.1}
              textClr="white"
              buttonHeight={60}
              textWidth="100%"
              onPress={handleHighRisk}
            />
          </ButtonContainer>
        </SectionContainer>
    </PageContainer>
    <AbbreviationsFootnotes navigation={navigation}/>
    <Footer navigation={navigation} />
    </>
  )
}