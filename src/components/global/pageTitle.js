import React from "react";
import { useFonts } from "expo-font";
import styled from 'styled-components/native'
import {View, StyleSheet, ActivityIndicator} from 'react-native'

/**
 * This is a simple wrapper component that formats the basic page titles you see in place like the
 * Conditions page or the Footnotes and Abbreviations pages.
 * 
 * @param {string} pageTitle - title of the page
 * @param {number} fontSize - size of the title text
 * @param {number} marginBottom - amount of space below title
 */

const Title = styled.Text`
 fontSize: ${(props) => props.fontSize || '25px'};
 fontFamily: 'NunitoSans-Bold';
 marginBottom: ${(props) => props.marginBottom || '0px'};
 marginHorizontal: ${(props) => props.marginHorizontal || '0px'};
 color: ${(props) => props.color || 'black'}
`

export default function PageTitle({ pageTitle, fontSize, marginBottom, marginHorizontal, color }) {
  let [fontsLoaded] = useFonts({
    'NunitoSans-Bold': require('../../assets/fonts/NunitoSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={ [styles.container, styles.horizontal] }>
        <ActivityIndicator size="large" color="#122033" />
      </View>
    )
  } else {return <Title fontSize={fontSize} marginBottom={marginBottom} marginHorizontal={marginHorizontal} color={color}>{pageTitle}</Title>};
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});