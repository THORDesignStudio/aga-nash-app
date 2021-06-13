import React from "react";
import Footer from "../components/global/footer";
import BackNext from "../components/global/nextBackButtons";
import AbbreviationsFootnotes from "../components/global/abbreviationsFootnotes";
import ScrollableView from "../components/primitives/scrollableContainer";
import styled from 'styled-components'
import {Text} from 'react-native'

const RiskMngHeader = styled.View`
  height: 200;
  background-color: #77C83F;
  justifyContent: center;
  alignItems: center;
`
const MngHeaderBox = styled.View`
  height: 150;
  width: 80%;
  backgroundColor: #FFFFFF;
  justifyContent: center;
  alignItems: center;
`

export default function RiskManagement({navigation}) {
  return (
    <>
      <ScrollableView>
        <RiskMngHeader><MngHeaderBox><Text>HelloWorld</Text></MngHeaderBox></RiskMngHeader>
      </ScrollableView>
      <BackNext navigation={navigation}/>
      <AbbreviationsFootnotes />
      <Footer />
    </>
  );
}
