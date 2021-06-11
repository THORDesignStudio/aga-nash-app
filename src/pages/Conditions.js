import React, { useContext, useEffect } from "react";
import { View, StyleSheet, PixelRatio } from "react-native";
import Footer from "../components/global/footer";
import Pearls from "../components/global/abbreviationsFootnotes";
import PageTitle from "../components/global/pageTitle";
import NextBack from "../components/global/nextBackButtons";
import { useFonts } from "expo-font";
import styled from "styled-components";
import { ApplicationContext } from "../applicationProvider/applicationProvider";
import TitleContainer from "../components/global/titleContainer";

const Condition = styled.Text`
  fontSize: 18;
  paddingEnd: 2;
  fontFamily: "NunitoSans-Regular";
`;

export default function Conditions({ navigation }) {
  const { setPageId, pageId } = useContext(ApplicationContext);

  useEffect(() => {
    navigation.addListener('focus', () => {
      setPageId("Conditions");
    });
  }, [navigation])

  

  let [fontsLoaded] = useFonts({
    "NunitoSans-Regular": require("../assets/fonts/NunitoSans-Regular.ttf"),
  });

  return (
    <>
      <View style={styles.container}>
        <TitleContainer>
          <PageTitle pageTitle="Patients with these conditions are at greatest risk of advanced fibrosis related to NAFLD/NASH:" />
        </TitleContainer>
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
      <NextBack navigation={navigation} nextPage="FIB4" backPage='Navigate'/>
      <Pearls navigation={navigation} />
      <Footer navigation={navigation} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  conditions: {
    flex: 1,
    justifyContent: "space-evenly",
    marginHorizontal: 20,
  },
  singleCondition: {
    flexDirection: "row",
  },
});
