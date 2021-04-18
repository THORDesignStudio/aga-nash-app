import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import SectionsIcon from "../../assets/images/sectionsIcon";
import OnlineIcon from "../../assets/images/onlineIcon";
import ShareIcon from "../../assets/images/shareIcon";

export default function NashFooter() {
  return (
    <>
      <View style={styles.iconContainer}>
        <View style={styles.sectionView}>
          <TouchableOpacity>
            <SectionsIcon />
          </TouchableOpacity>
          <Text style={styles.iconText}>Sections</Text>
        </View>
        <View style={styles.onlineView}>
          <TouchableOpacity>
            <OnlineIcon />
          </TouchableOpacity>
          <Text style={styles.iconText}>Online</Text>
        </View>
        <View style={styles.shareView}>
          <TouchableOpacity>
            <ShareIcon />
          </TouchableOpacity>
          <Text style={styles.iconText}>Share</Text>
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
    marginTop: -20,
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
