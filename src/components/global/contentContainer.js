import React from 'react'
import styled from 'styled-components/native'
import {useFonts} from 'expo-font'

/**
 * This container is used only to wrap around the content for Abbreviations and Footnotes. It formats the
 * layout properly for you.
 */

const Content = styled.Text`
  fontSize: 16px;
  marginHorizontal: 20px;
  fontFamily: 'NunitoSans-Regular';
  marginBottom: 20px;
`

export default function ContentContainer ({children}){

  let [fontsLoaded] = useFonts({
    'NunitoSans-Regular': require('../../assets/fonts/NunitoSans-Regular.ttf'),
  });
  return(
    <Content>
      {children}
    </Content>
  )
}