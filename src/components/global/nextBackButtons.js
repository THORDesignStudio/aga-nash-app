import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, ActivityIndicator } from "react-native";
import { useFonts } from 'expo-font'
import styled from 'styled-components/native'

import NextIcon from "../../assets/images/nextIcon";
import BackIcon from "../../assets/images/backIcon";


/**
 * This component is used to go from one step of the path to the next, or to allow the user to move back to the last step.
 * 
 * @param {function} navigation - this allows the app to navigate between screens and is used for the navigation functionality
 * @param {string}  nextPage - specifies what page to set as next
 */

const Container = styled.View`
  flexDirection: row;
  justifyContent: center;
  marginVertical: ${(props) => props.marginVertical || '50px'};
  backgroundColor: ${(props) => props.backgroundColor || '#F2F2F2'};
  paddingVertical: ${(props) => props.paddingVertical || '0px'};
`

export default function NextBack({ 
  nextPage, 
  navigation, 
  marginVertical, 
  backgroundColor, 
  paddingVertical 
}) {

  let [fontsLoaded] = useFonts({
    'NunitoSans-Regular': require('../../assets/fonts/NunitoSans-Regular.ttf'),
    'NunitoSans-Bold': require('../../assets/fonts/NunitoSans-Bold.ttf'),
  });
  
  if (!fontsLoaded) {
    return (
      <View style={ [styles.container, styles.horizontal] }>
        <ActivityIndicator size="large" color="#122033" />
      </View>
    )
  } 

  else {
    return (
      <>
        <Container marginVertical={marginVertical} backgroundColor={backgroundColor} paddingVertical={paddingVertical}>
          <View style={ styles.backContainer }>
            <Text style={ styles.backText }>
              Back
            </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <BackIcon />
            </TouchableOpacity>
          </View>
          <View style={ styles.nextContainer }>
            <TouchableOpacity onPress={() => navigation.navigate(nextPage)}>
              <NextIcon />
            </TouchableOpacity>
            <Text style={ styles.nextText }>
              Next
            </Text>
          </View>
        </Container>
      </>
    );
  }
}

const styles = StyleSheet.create({
  nextContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 100,
    marginHorizontal: 30,
  },
  backContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 100,
    marginHorizontal: 30,
  },
  backText: {
    color: "#faa61a",
    fontFamily: 'NunitoSans-Bold',
    fontSize: 16,
    fontWeight: "500",
    paddingHorizontal: 10,
    textTransform: "uppercase",
  },
  nextText: {
    color: "#faa61a",
    fontFamily: 'NunitoSans-Bold',
    fontSize: 16,
    fontWeight: "500",
    paddingHorizontal: 10,
    marginStart: -95,
    textTransform: "uppercase",
  },
});
