import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import Footer from "./components/global/footer";
import BeginIcon from "./assets/images/BeginIcon";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.borderBottom}>
            <Text style={styles.nash}>NASH</Text>
          </View>
          <Text style={styles.goldText}>
            This app helps primary care physicians, endrinologists and
            gastroenterologists
          </Text>
          <Text style={styles.splashText}>
            screen for NAFLD with advanced fibrosis, manage patients at risk for
            NAFLD/NASH, know when to refer to a hepatologist
          </Text>
        </View>
        <View style={styles.begin}>
          <BeginIcon />
          <Text style={styles.beginText}>BEGIN</Text>
        </View>
      </View>
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#faa61a",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    flex: 0.45,
    backgroundColor: "rgba(255,255,255,0.8)",
    marginEnd: 50,
    marginStart: 50,
    paddingBottom: 30,
  },
  nash: {
    fontSize: 64,
    marginStart: 20,
    marginEnd: 20,
    marginBottom: 20,
    marginTop: 20,
    fontWeight: "700",
    textAlign: "center",
  },
  borderBottom: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginEnd: 20,
    marginStart: 20,
  },
  goldText: {
    color: "#faa61a",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
    marginTop: 25,
    marginEnd: 10,
    marginStart: 10,
  },
  splashText: {
    textAlign: "center",
    fontSize: 16,
    marginEnd: 10,
    marginStart: 10,
    fontWeight: "500",
  },
  begin: {
    marginTop: 20,
    alignContent: "center",
  },
  beginText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    marginTop: -10,
  },
});
