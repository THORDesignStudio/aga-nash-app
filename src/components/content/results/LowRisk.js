import React from "react";
import styled from "styled-components";
import { useFonts } from "expo-font";
import LowRisk from '../../../assets/images/lowRisk'

const FibText = styled.Text`
  fontFamily: "NunitoSans-Regular";
  fontSize: 20;
`;
const AltText = styled.Text`
  fontFamily: "NunitoSans-Regular";
  fontSize: 20;
  marginVertical: 10;
`;
const LowRiskDial = styled.View`
  marginVertical: 40;
`;

const GreenText = styled.Text`
  fontFamily: "NunitoSans-Regular";
  fontSize: 20;
  color: #77c83f;
`;

export default function LowRiskContent({ navigation }) {


  return (
    <>
        <FibText>
          FIB-4 {"<"} 1.25 (age {"<"}65)
        </FibText>
        <FibText>and FIB-4 {"<"} 2 (age 65+)</FibText>
        <AltText>ALT {"<"} 40 U/L</AltText>
        <LowRiskDial>
          <LowRisk />
        </LowRiskDial>
        <FibText>
          <GreenText>LOW RISK</GreenText> of
        </FibText>
        <FibText>advanced fibrosis related</FibText>
        <FibText>to NAFLD/NASH</FibText>
    </>
  );
}
