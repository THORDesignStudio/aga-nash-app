import React from "react";
import { View, Image, StyleSheet } from "react-native";
import footer from '../../assets/images/footer.png'

export default function NashFooter() {
  return (
  <View style={styles.footer}>
    <Image source={footer} style={styles.img}/>
  </View>
  )}

const styles = StyleSheet.create({
footer: {
  justifyContent: "flex-end",
  alignItems: 'center',
  backgroundColor: 'white',
},
img:{
  resizeMode:'contain',
  width: 300,
}
});