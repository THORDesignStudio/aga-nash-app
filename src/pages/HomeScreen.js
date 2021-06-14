import React,{useContext, useEffect} from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  PixelRatio,
} from "react-native";
import Footer from "../components/global/footer";
import Banner from "../components/global/banner";
import Button from "../components/primitives/button";
import Container from "../components/primitives/container";
import styled from "styled-components/native";
import {useFonts} from 'expo-font'
import { ApplicationContext } from "../applicationProvider/applicationProvider";

/**
 * Homescreen
 * 
 * This is the first page that users see. This takes them to the @param {page} Navigate page. 
 * Other than that, note there's some mixture of stylesheet and styled components here. That's because I haven't
 * gotten around to converting things yet.
 */

const Header = styled.Text`
  fontSize: 25;
  marginHorizontal: 20px;
  fontWeight: 700;
  textAlign: center;
  fontFamily: 'NunitoSans-Bold';
`;

export default function HomeScreen({ navigation }) {
  const {setPageId} = useContext(ApplicationContext)

  useEffect(() => {
   navigation.addListener('focus', () => {
      setPageId("HomeScreen");
    });
  }, [navigation])

  let [fontsLoaded] = useFonts({
    'NunitoSans-Bold': require('../assets/fonts/NunitoSans-Bold.ttf'),
    'NunitoSans-Regular': require('../assets/fonts/NunitoSans-Regular.ttf'),
  });

  return (
    <>
      <Container>
        <ImageBackground
          source={require("../assets/images/NASH_bkgd.png")}
          style={styles.background}
        >
          <View style={styles.box}>
            <View>
              <Header>NONALCOHOLIC FATTY LIVER DISEASE (NASH)</Header>
            </View>
            <View style={styles.criticalCareContainer}>
              <Text style={styles.criticalCareText}>
                Critical Care Pathway for Risk Stratification and Patient
                Management
              </Text>
            </View>
            <Text style={styles.splashText}>
              For use in primary care, endocrine, obesity medicine and
              gastroenterology practices
            </Text>
          </View>
          <Button
            buttonText="START"
            onPress={() => navigation.navigate("Navigate")}
            textClr="#faa61a"
            marginTop="20"
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
  box: {
    flex: 0.75,
    backgroundColor: "rgba(255,255,255,0.8)",
    marginHorizontal: 50,
    justifyContent: "space-evenly",
  },
  criticalCareContainer: {
    borderBottomColor: "black",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginHorizontal: 20,
  },
  splashText: {
    textAlign: "center",
    fontSize: 18,
    marginHorizontal: 15,
    fontWeight: "500",
    fontFamily: 'NunitoSans-Regular',
  },
  riskContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
  },
  criticalCareText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
    marginVertical: 10,
    color: "#faa61a",
    fontFamily: 'NunitoSans-Regular',
  },
});
