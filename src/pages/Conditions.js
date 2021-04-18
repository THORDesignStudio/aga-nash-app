import React from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import Footer from "../components/global/footer";
import Pearls from "../components/global/abbreviationsFootnotes"

export default function HomeScreen() {
  return (
    <>
      <View style={styles.container}>
      </View>
      <Pearls/>
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});
