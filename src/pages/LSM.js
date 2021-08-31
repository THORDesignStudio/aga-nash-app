import React, { useContext, useEffect} from 'react'
import Footer from '../components/global/footer'
import AbbreviationsFootnotes from '../components/global/abbreviationsFootnotes'
import Button from '../components/primitives/button'
import PageContainer from '../components/primitives/container'
import TitleContainer from '../components/global/titleContainer'
import PageTitle from '../components/global/pageTitle'
import styled from 'styled-components'
import TextBasic from '../components/global/textBasic'
import {ApplicationContext} from '../applicationProvider/applicationProvider'


const SectionContainer = styled.View`
  flexDirection: column;
  alignItems: center;
  justifyContent: flex-start;
  textAlign: center;
  marginVertical: 20px;
`;


const ButtonContainer = styled.View`
  alignItems: center;
  marginVertical: 10px;
  width: 100%;
`;

const ButtonView = styled.View`
  display: flex;
  flexDirection: column;
`


export default function LSM({navigation}){
  const {setPageId, setFib4} = useContext(ApplicationContext)

  useEffect(() => {
    navigation.addListener("focus", () => {
      setPageId('LSM')
    });
  }, [navigation]);


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
      <TextBasic fontWeigh='bold' fontColor='white'>
        LOW RISK {"\n"} LSM {'<'} 8 kPa
      </TextBasic>
    </ButtonView>
  )

  const IndeterminateRiskText = (
    <ButtonView>
      <TextBasic fontWeigh='bold' fontColor='white'>
        INDETERMINATE RISK {"\n"} LSM 8 to 12 kPa
      </TextBasic>
    </ButtonView>
  )

  const HighRiskText = (
    <ButtonView>
      <TextBasic fontWeigh='bold' fontColor='white'>
        HIGH RISK {"\n"} LSM {'>'} 12 kPa
      </TextBasic>
    </ButtonView>
  )

  return(
    <>
      <PageContainer justifyContent='flex-start'>
        <TitleContainer>
          <PageTitle pageTitle='Order VCTE (FibroScan®) for liver stiffness measurement (LSM)' />
        </TitleContainer>
        <SectionContainer>
          <TextBasic fontWeight='bold' fontSize={16} >
            Pick one based on LSM results:
          </TextBasic >
            <ButtonContainer>
              <Button
                buttonText={LowRiskText}
                buttonBgClr="#77C83F"
                borderRadius={'30px'}
                borderWidth={'0.1px'}
                textClr="white"
                buttonHeight={'65px'}
                textWidth="80%"
                fontSize={18}
                onPress={handleLowRisk}
              />
            </ButtonContainer>
            <ButtonContainer>
              <Button
                buttonText={IndeterminateRiskText}
                buttonBgClr="#E49917"
                borderRadius={'30px'}
                borderWidth={'0.1px'}
                textClr="white"
                buttonHeight={'65px'}
                textWidth="80%"
                fontSize={18}
                onPress={handleIndeterminateRisk}
              />
            </ButtonContainer>
            <ButtonContainer>
              <Button
                buttonText={HighRiskText}
                buttonBgClr="#FC1B1F"
                borderRadius={'30px'}
                borderWidth={'0.1px'}
                textClr="white"
                buttonHeight={'65px'}
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