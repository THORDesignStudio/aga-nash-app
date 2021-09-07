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
  const { setPageId } = useContext(ApplicationContext);

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

        <View style={styles.conditionsContainer}>
          {/* 1 */}
          <View style={styles.singleConditionContainer}>
            <View style={styles.numberButton}>
              <TextBasic
                fontColor="#fff"
                fontWeight="bold"
              >
                1
              </TextBasic>
            </View>
            <View style={styles.singleCondition}>
              <TextBasic textAlign='left'>
                Two or more metabolic risk factors
              </TextBasic>
            </View>            
          </View>

          {/* 2 */}
          <View style={styles.singleConditionContainer}>
            <View style={styles.numberButton}>
              <TextBasic
                fontColor="#fff"
                fontWeight="bold"
              >
                2
              </TextBasic>
            </View>
            <View style={styles.singleCondition}>
              <TextBasic textAlign='left'>
                Type 2 diabetes
              </TextBasic>
            </View>
          </View>

          {/* 3 */}
          <View style={styles.singleConditionContainer}>
            <View style={styles.numberButton}>
              <TextBasic
                fontColor="#fff"
                fontWeight="bold"
              >
                3
              </TextBasic>
            </View>
            <View style={styles.singleCondition}>
              <TextBasic textAlign='left'>
                Steatosis on any imaging modality
              </TextBasic>
            </View>
          </View>
        </View>
      </View>

      <NextBack 
        navigation={navigation} 
        nextPage="FIB4" 
        backPage='Navigate' 
        marginVertical="0px"
        paddingVertical="20px"
        backgroundColor="#F1F6F8"
      />
      <Pearls navigation={navigation} />
      <Footer navigation={navigation} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1
  },
  conditionsContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 15
  },
  numberButton: {
    backgroundColor: "#faa61a",
    borderRadius: 20,
    height: 40,
    marginEnd: 10,
    paddingVertical: 7,
    width: 40
  },
  singleCondition: {
    borderColor: "#222",
    borderRadius: 20,
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    minHeight: 70,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  singleConditionContainer: {
    alignItems: 'center',
    flexDirection: "row",
    marginVertical: 8
  }
});
