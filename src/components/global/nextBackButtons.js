import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import NextIcon from "../../assets/images/nextIcon";
import BackIcon from "../../assets/images/backIcon";
import {useFonts} from 'expo-font'
import styled from 'styled-components'

/**
 * This component is used to go from one step of the path to the next, or to allow the user to move back to the last step.
 * 
 * @param {function} navigation - this allows the app to navigate between screens and is used for the navigation functionality
 * @param {string}  nextPage - specifies what page to set as next
 */

const Container = styled.View`
  flexDirection: row;
  justifyContent: center;
  marginVertical: ${(props) => props.marginVertical || 50};
`

export default function NextBack({ nextPage, navigation, marginVertical }) {

  let [fontsLoaded] = useFonts({
    'NunitoSans-Regular': require('../../assets/fonts/NunitoSans-Regular.ttf'),
  });
  
  

  return (
    <>
      <Container marginVertical={marginVertical}>
        <View style={styles.backContainer}>
          <Text style={styles.backText}>Back</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.nextContainer}>
          <TouchableOpacity onPress={() => navigation.navigate(nextPage)}>
            <NextIcon />
          </TouchableOpacity>
          <Text style={styles.nextText}>Next</Text>
        </View>
        </Container>
    </>
  );
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
    fontSize: 20,
    fontWeight: "500",
    color: "#faa61a",
    paddingHorizontal: 10,
    fontFamily: 'NunitoSans-Regular',
  },
  nextText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#faa61a",
    paddingHorizontal: 10,
    marginStart: -95,
    fontFamily: 'NunitoSans-Regular',
  },
});
