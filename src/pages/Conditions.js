import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import Footer from "../components/global/footer";
import Pearls from "../components/global/abbreviationsFootnotes";
import PageTitle from "../components/global/pageTitle";
import NextBack from "../components/global/nextBackButtons";
import Radio from "../components/primitives/radio";

export default function Conditions({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <PageTitle pageTitle="Patients with these conditions are at greatest risk of advanced fibrosis related to NAFLD/NASH:" />
        <View style={styles.conditions}>
          <View style={styles.singleCondition}>
            <Text style={styles.text}>Two or more metabollic risk factors</Text>
            <TouchableOpacity></TouchableOpacity>
          </View>
          <View style={styles.singleCondition}>
            <Text style={styles.text}>Type 2 diabetes</Text>
            <TouchableOpacity></TouchableOpacity>
          </View>
          <View style={styles.singleCondition}>
            <Text style={styles.text}>Steatosis on any imaging modality</Text>
            <TouchableOpacity></TouchableOpacity>
          </View>
        </View>
        <Radio label="Hello World" onPress={() => {alert("Hello")}} />
      </View>
      <NextBack backOnpress={() => navigation.goBack()} />
      <Pearls />
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  conditions: {
    flex: 0.6,
    justifyContent: "space-evenly",
  },
  singleCondition: {
    flexDirection: "row",
  },
  text: {
    fontSize: 16,
    paddingEnd: 2,
  },
});
