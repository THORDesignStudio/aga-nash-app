import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import footer from "../../assets/images/footer.png";

export default function NashFooter() {
  return (
    <>
      <View style={styles.footer}>
        <Image source={footer} style={styles.img} />
      </View>
      <View style={styles.iconContainer}>
        <Text style={styles.iconText}>Section</Text>
        <Text style={styles.iconText}>Online</Text>
        <Text style={styles.iconText}>Share</Text>
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
    fontSize: 20,
  },
});
