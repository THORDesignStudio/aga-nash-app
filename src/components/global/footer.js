import React from "react";
import { View, StyleSheet, Text, TouchableOpacity} from "react-native";
import NavigateIcon from "../../assets/images/NAVIGATE";
import SourcesIcon from "../../assets/images/SOURCES";
import AboutIcon from "../../assets/images/ABOUT";
import {useFonts} from 'expo-font'

/**
 * This footer is static. It's seen throughout the entire app to allow the user to quickly get to a few key pages.
 *
 */

export default function NashFooter({ navigation }) {

  let [fontsLoaded] = useFonts({
    'NunitoSans-Bold': require('../../assets/fonts/NunitoSans-Bold.ttf'),
    'NunitoSans-Regular': require('../../assets/fonts/NunitoSans-Regular.ttf'),
  });

  return (
    <>
      <View style={styles.iconContainer}>
        <View style={styles.sectionView}>
          <TouchableOpacity 
            onPress={() => navigation.navigate("Navigate")}
            style={styles.icon}
          >
            <NavigateIcon />
          </TouchableOpacity>
          <Text style={styles.iconText}>Navigate</Text>
        </View>
        <View style={styles.sectionView}>
          <TouchableOpacity 
            onPress={() => navigation.navigate("Sources")} 
            style={styles.icon}
          >
            <SourcesIcon />
          </TouchableOpacity>
          <Text style={styles.iconText}>Sources</Text>
        </View>
        <View style={styles.sectionView}>
          <TouchableOpacity 
            onPress={() => navigation.navigate("About")}
            style={styles.icon}
          >
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
    alignContent: "center",
    backgroundColor: "#122033",
    flexDirection: "row",
    justifyContent: "space-around",
    height: 110,
  },
  icon: {
    marginTop: 10,
    marginBottom: 5
  },
  iconText: {
    color: "white",
    fontSize: 14,
    fontFamily: 'NunitoSans-Regular',
    textAlign: "center"
  },
});
