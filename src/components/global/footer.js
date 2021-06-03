import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import NavigateIcon from "../../assets/images/NAVIGATE";
import SourcesIcon from "../../assets/images/SOURCES";
import AboutIcon from "../../assets/images/ABOUT";

export default function NashFooter({ navigation }) {
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
    fontSize: 12,
    textAlign: "center",
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
