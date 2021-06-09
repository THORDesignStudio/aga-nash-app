import React from 'react' 
import styled from 'styled-components'
import Input from '../components/primitives/input'
import Footer from '../components/global/footer'
import NextBack from '../components/global/nextBackButtons'
import PageContainer from '../components/primitives/container'
import PageTitle from '../components/global/pageTitle'
import AbbreviationsFootnotes from '../components/global/abbreviationsFootnotes'
import TitleContainer from '../components/global/titleContainer'

const CalcContainer = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
`

export default function Fib4({navigation}){
  return(
    <>
    <PageContainer justifyContent='flex-start'>
      <TitleContainer paddingBottom={30}>
        <PageTitle pageTitle='Enter the following lab results for Non Invasive Testing (NIT) for fibrosis' fontSize={10}/>
      </TitleContainer>
      <CalcContainer>
      <Input text='Age' />
      <Input text='ALT' />
      <Input text='AST' />
      <Input text='PLT' />
      </CalcContainer>
    </PageContainer>
    <NextBack navigation={navigation} nextPage='' />
    <AbbreviationsFootnotes navigation={navigation} />
    <Footer navigation={navigation} />
    </>
  )
}