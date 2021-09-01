import React from 'react'
import Container from '../components/primitives/container'
import Footer from '../components/global/footer'
import NextBack from '../components/global/nextBackButtons'
import HepReferIcon from '../assets/images/hepReferIcon'
import styled from 'styled-components/native'
import TextBasic from '../components/global/textBasic'

const HepTextContainer = styled.View`
  width: 180px;
  marginTop: 10px;
`

export default function HepRefer ({navigation}) {
  return (
    <>
      <Container backgroundColor={'#FC1B1F'}>
        <HepReferIcon />
        <HepTextContainer>
        <TextBasic fontWeight='light' fontSize={30} fontColor='white'>
          Refer to hepatologist or treat
        </TextBasic>
        </HepTextContainer>
      </Container>
      <NextBack 
        navigation={navigation} 
        nextPage='Home' 
        backgroundColor='#F1F6F8' 
        marginVertical="0px"
        paddingVertical="20px"
      />
      <Footer navigation={navigation}/>
    </>
  )
}