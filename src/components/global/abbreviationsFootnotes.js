import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import TextBasic from './textBasic'


/**
 * This is the gray bar at the bottom of most pages that allows users to go to the associated abbreviations and footnotes of a page.
 * This is static, the logic happens in the context that wraps the entire app and in the Footnotes and Abbreviations pages.
 */

const Container = styled.View`
  alignItems: center;
  backgroundColor: #676767;
  flexDirection: row;
  justifyContent: center;
  height: 50px;
`

export default function AbbreviationsFootnotes ({navigation}){

  return(
    <Container>
      <TouchableOpacity 
        onPress={() => navigation.navigate("Abbreviations")}
      >
        <TextBasic 
          fontColor="white" 
          fontSize={ 14 }
          marginHorizontal={ 20 }
        >
          ABBREVIATIONS
        </TextBasic>
      </TouchableOpacity>
      <TextBasic fontColor="white" fontSize={ 14 }>
        |
      </TextBasic>
      <TouchableOpacity 
        onPress={() => navigation.navigate("Footnotes")} 
      > 
        <TextBasic 
          fontColor="white" 
          fontSize={ 14 }
          marginHorizontal={ 20 }
        >
          FOOTNOTES
        </TextBasic>
      </TouchableOpacity>
    </Container>
  )
}
