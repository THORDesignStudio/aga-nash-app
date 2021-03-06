import React from "react";
import { View, Text, PixelRatio, StyleSheet, ActivityIndicator } from "react-native";
import { useFonts } from 'expo-font'

/**
 * 
 * <TextBasic>
 * 
 * Just a really simple text component that fixes the font problem across the app. 
 * To handle the custom fonts, we have the hook useFonts from expo:  https://docs.expo.dev/guides/using-custom-fonts/
 * The idea is we're using a prop to fix a font, and use that
 * 
 * @param { object } children - react pass-through component
 * @param { number } fontSize - how big should the font be? (default 18)
 * @param { string } fontWeight - way to indicate how heavy of a font we want
 * @param { string } fontColor - way to choose the color of the text. Defaults to black.
 * @param { number } marginHorizontal - space you want on each text unit
 * @param { number } marginVertical - space you want on each text unit
 * @param { obj } onPress - destination function for an active user selection
 * @param { string } textAlign - align text in the container. Defaults to center.
 * @param { string } textTransform - change capitalization if you're feeling it.
 */

export default function TextBasic({ 
  children,
  fontSize = 18,
  fontWeight,
  fontColor,
  marginHorizontal = 0,
  marginVertical = 0,
  onPress,
  textAlign,
  textDecoration,
  textTransform = 'none',
  width
 }) {
  
  let [fontsLoaded] = useFonts({
    "NunitoSans-Bold": require('../../assets/fonts/NunitoSans-Bold.ttf'),
    "NunitoSans-Light": require("../../assets/fonts/NunitoSans-Light.ttf"),
    "NunitoSans-Regular": require('../../assets/fonts/NunitoSans-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={ [styles.container, styles.horizontal] }>
        <ActivityIndicator size="large" color="#122033" />
      </View>
    )
  } 

  else if( fontWeight === 'bold' ) {
    return (
      <Text style={ [ 
        styles.textBold, 
        { 
          color: fontColor, 
          fontSize: fontSize / PixelRatio.getFontScale(), 
          marginVertical: marginVertical, 
          paddingHorizontal: marginHorizontal, 
          textAlign: textAlign || 'center',
          textDecorationLine: textDecoration,
          textTransform: textTransform,
          width: width
        }
      ]}
        onPress={ onPress }
      >
        { children }
      </Text>
    );
  }

  else if( fontWeight === 'light' ) {
    return (
      <Text style={ [ 
        styles.textLight, 
        { 
          color: fontColor, 
          fontSize: fontSize / PixelRatio.getFontScale(), 
          marginVertical: marginVertical, 
          paddingHorizontal: marginHorizontal, 
          textAlign: textAlign || 'center',
          textDecorationLine: textDecoration,
          textTransform: textTransform,
          width: width
        }
      ]}
        onPress={ onPress }
      >
        { children }
      </Text>
    );
  }

  else {
    return (
      <Text style={ [ 
        styles.text, 
        { 
          color: fontColor, 
          fontSize: fontSize / PixelRatio.getFontScale(), 
          marginVertical: marginVertical, 
          paddingHorizontal: marginHorizontal, 
          textAlign: textAlign || 'center',
          textDecorationLine: textDecoration,
          textTransform: textTransform,
          width: width
        }
      ]}
        onPress={ onPress }
      >
        { children }
      </Text>
    );
  }
  
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
  },
  text: {
    fontFamily: "NunitoSans-Regular",
    fontWeight: "500",
  },
  textBold: {
    fontFamily: "NunitoSans-Bold",
    fontWeight: "700",
  },
  textLight: {
    fontFamily: "NunitoSans-Light"
  },
});