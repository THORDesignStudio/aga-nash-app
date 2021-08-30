import React, { useContext, useEffect } from "react";
import { PixelRatio } from "react-native";
import {useFonts} from 'expo-font'
import styled from "styled-components/native";

import { ApplicationContext } from "../applicationProvider/applicationProvider";

import GoldenTitle from "../components/global/goldenTitle";
import Footer from "../components/global/footer";
import Button from "../components/primitives/button";
import Container from "../components/primitives/container";
import TextBasic from "../components/global/textBasic";

/**
 * Navigate
 * 
 * This is kind of the like the central nervous system of the entire thing. It helps the user,
 * like the title of the page says, navigate between various areas of the app. Nothing super specail going on here.
 */

const SectionContainer = styled.View`
  flexDirection: column;
  alignItems: center;
  justifyContent: flex-start;
  textAlign: center;
`;
const TextContainer = styled.View`
  marginTop: 10px;
  textAlign: center;
`;
const ButtonContainer = styled.View`
  alignItems: center;
  marginVertical: 10px;
  width: 100px;
`;

export default function Navigate({ navigation }) {
  const {setPageId, setFib4} = useContext(ApplicationContext)
  useEffect(() => {
    navigation.addListener('focus', () => {
      setPageId("Navigate");
    });
  }, [navigation])

  let [fontsLoaded] = useFonts({
    'NunitoSans-Bold': require('../assets/fonts/NunitoSans-Bold.ttf'),
    'NunitoSans-Regular': require('../assets/fonts/NunitoSans-Regular.ttf'),
  });

  const handleLowRisk = () => {
    setFib4(1.29);
    navigation.navigate('RiskManagement')
  }

  const handleIndeterminateRisk = () => {
    setFib4(2);
    navigation.navigate('RiskManagement')
  }

  const handleHighRisk = () => {
    setFib4(3);
    navigation.navigate('RiskManagement')
  }
  return (
    <>
      <GoldenTitle>
        <Button
          buttonText="START FROM BEGINNING"
          textClr="#FAA719"
          textWidth="75%"
          buttonHeight={60}
          border="none"
          onPress={() => navigation.navigate("Conditions")}
        />
      </GoldenTitle>
      <Container justifyContent="space-evenly">
        <SectionContainer>
          <TextContainer>
            <TextBasic 
              fontSize={ 20 }
              fontWeight="bold"
            >
              EXPLORE:
            </TextBasic>
          </TextContainer>
          <ButtonContainer>
            <Button
              buttonText="LOW RISK MANAGEMENT"
              buttonBgClr="#77C83F"
              borderRadius={30}
              borderWidth={0.1}
              textClr="white"
              buttonHeight={60}
              textWidth="75%"
              onPress={handleLowRisk}
            />
          </ButtonContainer>
          <ButtonContainer>
            <Button
              buttonText="INDETERMINATE RISK MANAGEMENT"
              buttonBgClr="#E49917"
              borderRadius={30}
              borderWidth={0.1}
              textClr="white"
              buttonHeight={60}
              textWidth="75%"
              fontSize={18}
              onPress={handleIndeterminateRisk}
            />
          </ButtonContainer>
          <ButtonContainer>
            <Button
              buttonText="HIGH RISK MANAGEMENT"
              buttonBgClr="#FC1B1F"
              borderRadius={30}
              borderWidth={0.1}
              textClr="white"
              buttonHeight={60}
              textWidth="75%"
              onPress={handleHighRisk}
            />
          </ButtonContainer>
        </SectionContainer>
        <SectionContainer>
          <TextContainer>
            <TextBasic 
              fontSize={ 20 }
              fontWeight="bold"
            >
              JUMP TO:
            </TextBasic>
          </TextContainer>
          <ButtonContainer>
            <Button
              buttonText="LSM TEST"
              buttonBgClr="#112034"
              borderRadius={30}
              borderWidth={0.1}
              textClr="white"
              buttonHeight={60}
              textWidth="75%"
              onPress={() => navigation.navigate('LSM')}
            />
          </ButtonContainer>
        </SectionContainer>
      </Container>
      <Footer navigation={navigation} />
    </>
  );
}
