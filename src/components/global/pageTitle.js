import React from "react";
import { useFonts } from "expo-font";
import styled from 'styled-components/native'

/**
 * This is a simple wrapper component that formats the basic page titles you see in place like the
 * Conditions page or the Footnotes and Abbreviations pages.
 * 
 * @param {string} pageTitle - title of the page
 * @param {number} fontSize - size of the title text
 * @param {number} marginBottom - amount of space below title
 */

const Title = styled.Text`
 fontSize: ${(props) => props.fontSize || 25};
 fontFamily: 'NunitoSans-Bold';
 marginBottom: ${(props) => props.marginBottom || 0};
 marginHorizontal: ${(props) => props.marginHorizontal || 0};
`

export default function PageTitle({ pageTitle, fontSize, marginBottom, marginHorizontal }) {
  let [fontsLoaded] = useFonts({
    'NunitoSans-Bold': require('../../assets/fonts/NunitoSans-Bold.ttf'),
  });

  return <Title fontSize={fontSize} marginBottom={marginBottom} marginHorizontal={marginHorizontal} >{pageTitle}</Title>;
}


