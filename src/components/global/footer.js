import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import footer from "../../assets/images/footer.png";
import SectionsIcon from "../../assets/images/sectionsIcon";
import OnlineIcon from "../../assets/images/onlineIcon"
import ShareIcon from "../../assets/images/shareIcon"

export default function NashFooter() {
  return (
    <>
      <View style={styles.footer}>
        <Image source={footer} style={styles.img} />
      </View>
      <View style={styles.iconContainer}>
        <View style={styles.sectionView}>
          <SectionsIcon />
          <Text style={styles.iconText}>Sections</Text>
        </View>
        <View style={styles.onlineView}>
          <OnlineIcon/>
          <Text style={styles.iconText}>Online</Text>
        </View>
        <View style={styles.shareView}>
          <ShareIcon/>
          <Text style={styles.iconText}>Share</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  footer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: 100,
  },
  img: {
    resizeMode: "contain",
    width: 300,
  },
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
    textAlign:'center',
  },
  sectionView: {
    justifyContent: "center",
    marginStart: 20,
  },
  onlineView:{
    justifyContent: 'center'
  },
  shareView:{
    justifyContent:'center',
    marginEnd: 20,
  }
});
