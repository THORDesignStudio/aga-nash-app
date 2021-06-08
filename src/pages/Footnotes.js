import React, {useContext} from "react";
import PageTitle from "../components/global/pageTitle";
import styled from 'styled-components'
import {ApplicationContext} from '../applicationProvider/applicationProvider'
import ScrollableView from '../components/primitives/scrollableContainer'
import ConditionContent from '../components/content/footnotes/conditions'

const TitleContainer = styled.View`
  flex: .05;
  paddingTop: 50;
  paddingHorizontal: 20;
`


export default function Footnotes({navigation}) {

  const {pageId} = useContext(ApplicationContext)
  
  let content;

  switch(pageId){
    case 'Conditions':
      content = (<ConditionContent />)
      break;
    case 'FIB4':
      content = (
      <>
      </>
      )
      break;
    case 'RsltLow':
      content= (
      <>
      {/* test */}
      </>
      )
      break;
  }

  return (
    <>
    <TitleContainer>
      <PageTitle pageTitle="FOOTNOTES" />
    </TitleContainer>
    <ScrollableView>
      {content}
    </ScrollableView>
    </>
  );
}
