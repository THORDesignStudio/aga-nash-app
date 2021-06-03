import React from "react";
import GoldenTitle from "../components/global/goldenTitle";
import styled from "styled-components";
import Footer from "../components/global/footer";
import Button from "../components/primitives/button";
import Container from "../components/primitives/container";
import { PixelRatio } from "react-native";

const SectionContainer = styled.View`
  flexDirection: column;
  alignItems: center;
  justifyContent: flex-start;
  textAlign: center;
`;
const TextContainer = styled.View`
  marginTop: 10;
  textAlign: center;
`;

const SectionText = styled.Text`
  fontSize: ${PixelRatio.getPixelSizeForLayoutSize(10)};
`;
const ButtonContainer = styled.View`
  alignItems: center;
  marginVertical: 10;
  width: 100;
`;

export default function Navigate({ navigation }) {
  return (
    <>
      <GoldenTitle>
        <Button
          buttonText="START FROM BEGINNING"
          textClr="#FAA719"
          textWidth="75%"
          buttonHeight={60}
          borderStyle="solid"
          onPress={() => navigation.navigate("Conditions")}
        />
      </GoldenTitle>
      <Container justifyContent="space-evenly">
        <SectionContainer>
          <TextContainer>
            <SectionText>EXPLORE:</SectionText>
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
            />
          </ButtonContainer>
          <ButtonContainer>
            <Button
              buttonText="HIGHT RISK MANAGEMENT"
              buttonBgClr="#FC1B1F"
              borderRadius={30}
              borderWidth={0.1}
              textClr="white"
              buttonHeight={60}
              textWidth="75%"
            />
          </ButtonContainer>
        </SectionContainer>
        <SectionContainer>
          <TextContainer>
            <SectionText>JUMP TO:</SectionText>
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
            />
          </ButtonContainer>
        </SectionContainer>
      </Container>
      <Footer navigation={navigation} />
    </>
  );
}
