import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
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
 */

export default function TextBasic({ 
  children,
  fontSize = 18,
  fontWeight
 }) {

  let [fontsLoaded] = useFonts({
    'NunitoSans-Bold': require('../../assets/fonts/NunitoSans-Bold.ttf'),
    "NunitoSans-Light": require("../../assets/fonts/NunitoSans-Light.ttf"),
    'NunitoSans-Regular': require('../../assets/fonts/NunitoSans-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={ [styles.container, styles.horizontal] }>
        <ActivityIndicator size="large" color="#122033" />
      </View>
    )
  } 

  else if( fontWeight.toLowercase().trim() === 'bold' ) {
    return (
      <Text style={ [ styles.textBold, { fontSize: fontSize } ] }>
        { children }
      </Text>
    );
  }

  else if( fontWeight.toLowercase().trim() === 'light' ) {
    return (
      <Text style={ [ styles.textLight, { fontSize: fontSize } ]}>
        { children }
      </Text>
    );
  }

  else {
    return (
      <Text style={ [ styles.text, { fontSize: fontSize } ] }>
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
    fontFamily: 'NunitoSans-Regular',
    fontWeight: "500",
  },
  textBold: {
    fontFamily: 'NunitoSans-Bold',
    fontWeight: "700",
  },
  textLight: {
    fontFamily: 'NunitoSans-Light'
  },
});