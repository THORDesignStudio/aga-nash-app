import React from "react";
import { Text, StyleSheet } from "react-native";
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from "@expo-google-fonts/nunito-sans";
import styled from 'styled-components'

const Title = styled.Text`
 fontSize: 20;
 fontFamily: NunitoSans_700Bold;
`

export default function PageTitle({ pageTitle }) {
  let [fontsLoaded] = useFonts({
    NunitoSans_700Bold,
  });

  return <Title>{pageTitle}</Title>;
}


