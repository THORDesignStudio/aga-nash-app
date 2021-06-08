import React from "react";
import {
  View,
  StyleSheet,
  Text,
} from "react-native";
import Footer from "../components/global/footer";
import Pearls from "../components/global/abbreviationsFootnotes";
import PageTitle from "../components/global/pageTitle";
import NextBack from "../components/global/nextBackButtons";
import {useFonts} from 'expo-font'
import styled from 'styled-components'
import {PixelRatio} from 'react-native'

const Condition = styled.Text`
  fontSize: ${PixelRatio.getPixelSizeForLayoutSize(10)};
  paddingEnd: 2;
  fontFamily: 'NunitoSans-Regular';
`

export default function Conditions({ navigation }) {

  let [fontsLoaded] = useFonts({
    'NunitoSans-Regular': require('../assets/fonts/NunitoSans-Regular.ttf'),
  });

  return (
    <>
      <View style={styles.container}>
        <PageTitle pageTitle="Patients with these conditions are at greatest risk of advanced fibrosis related to NAFLD/NASH:" />
        <View style={styles.conditions}>
          <View style={styles.singleCondition}>
            <Condition>Two or more metabollic risk factors</Condition>
          </View>
          <View style={styles.singleCondition}>
            <Condition>Type 2 diabetes</Condition>
          </View>
          <View style={styles.singleCondition}>
            <Condition>Steatosis on any imaging modality</Condition>
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
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  conditions: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  singleCondition: {
    flexDirection: "row",
  },
});
