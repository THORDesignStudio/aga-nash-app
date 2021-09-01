import React, { useContext, useEffect } from "react";
import { ApplicationContext } from "../applicationProvider/applicationProvider";

import { View, StyleSheet } from "react-native";

import Footer from "../components/global/footer";
import Pearls from "../components/global/abbreviationsFootnotes";
import PageTitle from "../components/global/pageTitle";
import NextBack from "../components/global/nextBackButtons";
import TextBasic from "../components/global/textBasic";
import TitleContainer from "../components/global/titleContainer";

/**
 * <Conditions>
 * 
 * 2nd step in the NASH pathway, gives a high level overview of the condition
 * 
 * @param { object } navigation - gives app prev/next page assignments
 */
export default function Conditions({ navigation }) {
  const { setPageId, pageId } = useContext(ApplicationContext);

  useEffect(() => {
    navigation.addListener('focus', () => {
      setPageId("Conditions");
    });
  }, [navigation])

  return (
    <>
      <View style={styles.container}>
        <TitleContainer>
          <PageTitle 
            pageTitle="Patients with these conditions are at greatest risk of advanced fibrosis related to NAFLD/NASH:" 
          />
        </TitleContainer>
        <View style={styles.conditions}>
          <View style={styles.singleCondition}>
            <TextBasic>Two or more metabolic risk factors</TextBasic>
          </View>
          <View style={styles.singleCondition}>
            <TextBasic>Type 2 diabetes</TextBasic>
          </View>
          <View style={styles.singleCondition}>
            <TextBasic>Steatosis on any imaging modality</TextBasic>
          </View>
        </View>
      </View>
      <NextBack 
        navigation={navigation} 
        nextPage="FIB4" 
        backPage='Navigate' 
        marginVertical="10px"
      />
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
    marginHorizontal: 20,
  },
  singleCondition: {
    flexDirection: "row",
    marginVertical: 20,
  },
});
