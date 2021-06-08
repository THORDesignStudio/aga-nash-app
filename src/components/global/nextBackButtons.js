import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import NextIcon from "../../assets/images/nextIcon";
import BackIcon from "../../assets/images/backIcon";
import {useFonts} from 'expo-font'

export default function NextBack({ nextOnpress, backOnpress }) {

  let [fontsLoaded] = useFonts({
    'NunitoSans-Regular': require('../../assets/fonts/NunitoSans-Regular.ttf'),
  });

  return (
    <>
      <View style={styles.nextBackContainer}>
        <View style={styles.backContainer}>
          <Text style={styles.backText}>Back</Text>
          <TouchableOpacity onPress={backOnpress}>
            <BackIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.nextContainer}>
          <TouchableOpacity onPress={nextOnpress}>
            <NextIcon />
          </TouchableOpacity>
          <Text style={styles.nextText}>Next</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  nextBackContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 50,
  },
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
