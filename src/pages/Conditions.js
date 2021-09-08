import React, { useContext, useEffect } from "react";
import { ApplicationContext } from "../applicationProvider/applicationProvider";

import { ScrollView, View, StyleSheet } from "react-native";

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
      <ScrollView 
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <TitleContainer>
          <PageTitle 
            pageTitle="Screen for advanced fibrosis related to NAFLD/NASH in patients with any of these conditions:" 
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
                Two or more metabolic risk factors{ `\u00B9` } 
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
                Steatosis on any imaging modality or elevated aminotransferases
              </TextBasic>
            </View>
          </View>
          <TextBasic 
            marginVertical={15}
            textAlign='left'
          >
            Tap Next to assess risk.
          </TextBasic>
          <TextBasic textAlign='left'>          
            Tap Navigate for guidance on management of patients at low, indeterminate and high risk.
          </TextBasic>
        </View>
      </ScrollView>

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
