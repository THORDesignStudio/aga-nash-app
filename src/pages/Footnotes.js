import React from "react";
import PageTitle from "../components/global/pageTitle";
import styled from 'styled-components'
import { useFonts, NunitoSans_700Bold } from "@expo-google-fonts/nunito-sans";

const TitleContainer = styled.View`
  flex: 1;
  paddingTop: 50;
  paddingHorizontal: 20;
`

export default function Footnotes({navigation}) {

  let [fontsLoaded] = useFonts({
    // NunitoSans_700Bold,
  });

  return (
    <>
    <TitleContainer>
      <PageTitle pageTitle="FOOTNOTES" />
    </TitleContainer>
    </>
  );
}
