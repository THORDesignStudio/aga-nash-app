import React from "react";
import { View, StyleSheet, Text, TouchableOpacity} from "react-native";
import NavigateIcon from "../../assets/images/NAVIGATE";
import SourcesIcon from "../../assets/images/SOURCES";
import AboutIcon from "../../assets/images/ABOUT";
import TextBasic from "./textBasic";

/**
 * This footer is static. It's seen throughout the entire app to allow the user to quickly get to a few key pages.
 *
 */

export default function NashFooter({ navigation }) {


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
          <TextBasic fontColor='white' fontSize='14'>Navigate</TextBasic>
        </View>
        <View style={styles.sectionView}>
          <TouchableOpacity 
            onPress={() => navigation.navigate("Sources")} 
            style={styles.icon}
          >
            <SourcesIcon />
          </TouchableOpacity>
          <TextBasic fontColor='white' fontSize='14'>Sources</TextBasic>
        </View>
        <View style={styles.sectionView}>
          <TouchableOpacity 
            onPress={() => navigation.navigate("About")}
            style={styles.icon}
          >
            <AboutIcon />
          </TouchableOpacity>
          <TextBasic fontColor='white' fontSize='14'>About</TextBasic>
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
});
