import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import Footer from "../components/global/footer";
import Pearls from "../components/global/abbreviationsFootnotes";
import PageTitle from "../components/global/pageTitle";
import NextBack from "../components/global/nextBackButtons";
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from "@expo-google-fonts/nunito-sans";

export default function Conditions({ navigation }) {

  let [fontsLoaded] = useFonts({
    NunitoSans_700Bold,
  });

  return (
    <>
      <View style={styles.container}>
        <PageTitle pageTitle="Patients with these conditions are at greatest risk of advanced fibrosis related to NAFLD/NASH:" />
        <View style={styles.conditions}>
          <View style={styles.singleCondition}>
            <Text style={styles.text}>Two or more metabollic risk factors</Text>
          </View>
          <View style={styles.singleCondition}>
            <Text style={styles.text}>Type 2 diabetes</Text>
          </View>
          <View style={styles.singleCondition}>
            <Text style={styles.text}>Steatosis on any imaging modality</Text>
          </View>
        </View>
      </View>
      <NextBack backOnpress={() => navigation.goBack()} />
      <Pearls navigation={navigation} />
      <Footer navigation={navigation}/>
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
    flex: 1,
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
