import React from "react";
import { View, Image, StyleSheet} from "react-native";
import banner from "../../assets/images/banner.png";

/**
 * AGA banner that goes at the bottom of some pages. Static component.
 * 
 */


export default function Banner() {
  return (
    <>
      <View style={styles.banner}>
        <Image source={banner} style={styles.img} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  banner: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: 100,
  },
  img: {
    resizeMode: "contain",
    width: 300,
  },
});
