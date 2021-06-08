import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, PixelRatio } from "react-native";
import NavigateIcon from "../../assets/images/NAVIGATE";
import SourcesIcon from "../../assets/images/SOURCES";
import AboutIcon from "../../assets/images/ABOUT";
import {useFonts} from 'expo-font'

export default function NashFooter({ navigation }) {

  let [fontsLoaded] = useFonts({
    'NunitoSans-Bold': require('../../assets/fonts/NunitoSans-Bold.ttf'),
    'NunitoSans-Regular': require('../../assets/fonts/NunitoSans-Regular.ttf'),
  });

  return (
    <>
      <View style={styles.iconContainer}>
        <View style={styles.sectionView}>
          <TouchableOpacity onPress={() => navigation.navigate("Navigate")}>
            <NavigateIcon />
          </TouchableOpacity>
          <Text style={styles.iconText}>Navigate</Text>
        </View>
        <View style={styles.onlineView}>
          <TouchableOpacity onPress={() => navigation.navigate("Sources")} >
            <SourcesIcon />
          </TouchableOpacity>
          <Text style={styles.iconText}>Sources</Text>
        </View>
        <View style={styles.shareView}>
          <TouchableOpacity onPress={() => navigation.navigate("About")}>
            <AboutIcon />
          </TouchableOpacity>
          <Text style={styles.iconText}>About</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: "#122033",
    height: 100,
    justifyContent: "space-between",
    alignContent: "center",
    flexDirection: "row",
  },
  iconText: {
    color: "white",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(8),
    textAlign: "center",
    fontFamily: 'NunitoSans-Regular'
  },
  sectionView: {
    justifyContent: "center",
    marginStart: 20,
  },
  onlineView: {
    justifyContent: "center",
  },
  shareView: {
    justifyContent: "center",
    marginEnd: 20,
  },
});
