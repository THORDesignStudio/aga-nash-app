import React from 'react'
import PageContainer from '../components/primitives/container'
import Footer from '../components/global/footer'
import NextBack from '../components/global/nextBackButtons'
import HepReferIcon from '../assets/images/hepReferIcon'
import styled from 'styled-components/native'
import TextBasic from '../components/global/textBasic'

const HepTextContainer = styled.View`
width: 180px;
marginTop: 10px;
`

export default function HepRefer ({navigation}){
  let [fontsLoaded] = useFonts({
    "NunitoSans-Light": require("../assets/fonts/NunitoSans-Light.ttf"),
  });

  return (
    <>
      <PageContainer backgroundColor={'#FC1B1F'}>
        <HepReferIcon />
        <HepTextContainer>
        <TextBasic fontWeight='light' fontSize={30} fontColor='white'>
          Refer to hepatologist or treat
        </TextBasic>
        </HepTextContainer>
      </PageContainer>
      <NextBack 
        navigation={navigation} 
        marginVertical={0.1} 
        nextPage='Home' 
        backgroundColor='#FC1B1F' 
        paddingVertical={10}
      />
      <Footer navigation={navigation}/>
    </>
  )
}