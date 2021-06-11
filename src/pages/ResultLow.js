import React from "react";
import styled from 'styled-components'
import Footer from '../components/global/footer'
import AbbreviationsFootnotes from '../components/global/abbreviationsFootnotes'
import NextBack from "../components/global/nextBackButtons";

const CenteredPageContainer = styled.View`
flex: 1;
justifyContent: flex-start;
alignItems: center;
`

export default function ResultLow({navigation}) {
  return (
  <>
   <CenteredPageContainer>
    </CenteredPageContainer>
    <NextBack navigation={navigation} nextPage=''  />
    <AbbreviationsFootnotes navigation={navigation} />
    <Footer navigation={navigation} />
  </>);
}
