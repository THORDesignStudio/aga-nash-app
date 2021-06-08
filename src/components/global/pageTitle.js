import React from "react";
import { useFonts } from "expo-font";
import styled from 'styled-components'

const Title = styled.Text`
 fontSize: 20;
 fontFamily: 'NunitoSans-Bold';
`

export default function PageTitle({ pageTitle }) {
  let [fontsLoaded] = useFonts({
    'NunitoSans-Bold': require('../../assets/fonts/NunitoSans-Bold.ttf'),
  });

  return <Title>{pageTitle}</Title>;
}


