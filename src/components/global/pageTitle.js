import React from "react";
import { useFonts } from "expo-font";
import styled from 'styled-components'

/**
 * This is a simple wrapper component that formats the basic page titles you see in place like the
 * Conditions page or the Footnotes and Abbreviations pages.
 * 
 * @param {string} pageTitle - title of the page
 */

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


