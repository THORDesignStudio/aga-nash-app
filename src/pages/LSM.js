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
  marginTop: 10px;
  textAlign: center;
`;

const SectionText = styled.Text`
  fontSize: 16px;
  fontFamily: 'NunitoSans-Bold';
  marginVertical: 20px;
`

const ButtonContainer = styled.View`
  alignItems: center;
  marginVertical: 10px;
  width: 100%;
`;

const ButtonView = styled.View`
  display: flex;
  flexDirection: column;
`
const ButtonText = styled.Text`
  color: white;
  fontSize: 18px;
  fontFamily: 'NunitoSans-Bold';
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
        LOW RISK {"\n"} LSM {'<'} 8 kPa
      </ButtonText>
    </ButtonView>
  )

  const IndeterminateRiskText = (
    <ButtonView>
      <ButtonText>
        INDETERMINATE RISK LSM 8 to 12 kPa
      </ButtonText>
    </ButtonView>
  )

  const HighRiskText = (
    <ButtonView>
      <ButtonText>
        HIGH RISK {"\n"} LSM {'>'} 12 kPa
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
                buttonHeight={65}
                textWidth="80%"
                fontSize={18}
                onPress={handleLowRisk}
              />
            </ButtonContainer>
            <ButtonContainer>
              <Button
                buttonText={IndeterminateRiskText}
                buttonBgClr="#E49917"
                borderRadius={30}
                borderWidth={0.1}
                textClr="white"
                buttonHeight={65}
                textWidth="80%"
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
                buttonHeight={65}
                textWidth="80%"
                fontSize={18}
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