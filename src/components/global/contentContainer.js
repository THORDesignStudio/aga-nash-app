import React from 'react'
import styled from 'styled-components'
import {useFonts} from 'expo-font'

const Content = styled.Text`
  fontSize: 20;
  marginHorizontal: 20;
  fontFamily: 'NunitoSans-Regular';
  marginBottom: 10;
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