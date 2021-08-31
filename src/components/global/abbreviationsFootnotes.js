import React from 'react'
import {TouchableOpacity} from 'react-native'
import styled from 'styled-components/native'
import TextBasic from './textBasic'


/**
 * This is the gray bar at the bottom of most pages that allows users to go to the associated abbreviations and footnotes of a page.
 * This is static, the logic happens in the context that wraps the entire app and in the Footnotes and Abbreviations pages.
 */

const Container = styled.View`
  backgroundColor: #676767;
  flexDirection: row;
  justifyContent: space-evenly;
  height: 50px;
  alignItems: center;
`

export default function AbbreviationsFootnotes ({navigation}){

  return(
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate("Abbreviations")}>
      <TextBasic fontColor="white">
        ABBREVIATIONS
      </TextBasic>
      </TouchableOpacity>
      <TextBasic fontColor="white">
        |
      </TextBasic>
      <TouchableOpacity onPress={() => navigation.navigate("Footnotes")} > 
      < TextBasic fontColor="white">
        FOOTNOTES
      </TextBasic>
      </TouchableOpacity>
    </Container>
  )
}
