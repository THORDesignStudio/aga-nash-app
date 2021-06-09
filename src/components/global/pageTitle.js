import React from "react";
import { useFonts } from "expo-font";
import {PixelRatio} from 'react-native'
import styled from 'styled-components'

/**
 * This is a simple wrapper component that formats the basic page titles you see in place like the
 * Conditions page or the Footnotes and Abbreviations pages.
 * 
 * @param {string} pageTitle - title of the page
 * @param {number} fontSize - size of the title text
 * @param {number} marginBottom - amount of space below title
 */

const Title = styled.Text`
 fontSize: ${ (props) => PixelRatio.getPixelSizeForLayoutSize(props.fontSize) || PixelRatio.getPixelSizeForLayoutSize(10)};
 fontFamily: 'NunitoSans-Bold';
 marginBottom: ${(props) => props.marginBottom || 0}
`

export default function PageTitle({ pageTitle, fontSize, marginBottom }) {
  let [fontsLoaded] = useFonts({
    'NunitoSans-Bold': require('../../assets/fonts/NunitoSans-Bold.ttf'),
  });

  return <Title fontSize={fontSize} marginBottom={marginBottom}>{pageTitle}</Title>;
}


