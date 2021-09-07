import React, { useContext, useEffect } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";

import { ApplicationContext } from "../applicationProvider/applicationProvider";

import TextBasic from "../components/global/textBasic"
import Footer from "../components/global/footer";
import Banner from "../components/global/banner";
import Button from "../components/primitives/button";
import Container from "../components/primitives/container";

/**
 * <HomeScreen>
 * 
 * This is the first page that users see, kind of a modified splash screen
 * 
 * @param { object } navigation - object of destination pages 
 */

export default function HomeScreen({ navigation }) {
  const {setPageId} = useContext(ApplicationContext)

  useEffect(() => {
   navigation.addListener('focus', () => {
      setPageId("HomeScreen");
    });
  }, [navigation])

    return (
      <>
        <Container>
          <ImageBackground
            source={require("../assets/images/NASH_bkgd.png")}
            style={styles.background}
          >
            <View style={styles.box}>
              <TextBasic 
                fontSize={28}
                fontWeight="bold"
                textAlign="center"
              >
                NONALCOHOLIC FATTY LIVER DISEASE (NASH)
              </TextBasic>
              <View style={styles.rule} />
              <TextBasic 
                fontColor='#eb9705'
                fontSize={16}
                fontWeight="bold"
                marginHorizontal={ 30 }
                textAlign="center"              
              >
                Clinical Care Pathway for Risk Stratification and Patient Management
              </TextBasic>
              <View style={styles.rule} />
              <TextBasic
                fontSize={18}
                marginHorizontal={ 20 }
                textAlign="center"                                 
              >
                For use in primary care, endocrine, obesity medicine and gastroenterology practices
              </TextBasic>
            </View>
            <Button
              buttonText="START"
              onPress={() => navigation.navigate("Conditions")}
              textClr="#faa61a"
              marginTop="20px"
              borderStyle="solid"
            />
          </ImageBackground>
        </Container>
        <Banner />
        <Footer navigation={navigation} />
      </>
    );
  
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexShrink: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
  },
  box: {
    flex: 0.8,
    backgroundColor: "rgba(255,255,255,0.8)",
    marginHorizontal: 50,
    justifyContent: "space-evenly",
  },
  rule: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginHorizontal: 20,
  },
});
