import React from 'react'
import PageContainer from '../components/primitives/container'
import Footer from '../components/global/footer'
import NextBack from '../components/global/nextBackButtons'
import HepReferIcon from '../assets/images/hepReferIcon'
import styled from 'styled-components/native'
import {useFonts} from 'expo-font'

const HepText = styled.Text`
  fontFamily: 'NunitoSans-Light';
  fontSize: 30;
  width: 180px;
  color: white;
  textAlign: center;
  marginTop: 10;
`

export default function HepRefer ({navigation}){
  let [fontsLoaded] = useFonts({
    "NunitoSans-Light": require("../assets/fonts/NunitoSans-Light.ttf"),
  });

  return (
    <>
      <PageContainer backgroundColor={'#FC1B1F'}>
        <HepReferIcon />
        <HepText>
          Refer to hepatologist or treat
        </HepText>
      </PageContainer>
      <NextBack navigation={navigation} marginVertical={0.1} nextPage='Home' backgroundColor='#FC1B1F' paddingVertical={10}/>
      <Footer navigation={navigation}/>
    </>
  )
}