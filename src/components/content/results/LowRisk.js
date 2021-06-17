import React, {useContext} from "react";
import styled from "styled-components/native";
import LowRisk from '../../../assets/images/lowRisk'
import {ApplicationContext} from '../../../applicationProvider/applicationProvider'

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

const GreaterFourtyText = styled.Text`
  fontFamily: "NunitoSans-Regular";
  fontSize: 16;
`

export default function LowRiskContent({ navigation }) {
const {alt} = useContext(ApplicationContext);



  return (
    <>
        <FibText>
          FIB-4 {"<"} 1.25 (age {"<"}65)
        </FibText>
        <FibText>and FIB-4 {"<"} 2 (age 65+)</FibText>
        {alt < 40 && <AltText>ALT {"<"} 40 U/L</AltText>}
        {alt >= 40 && <AltText>ALT ≥ 40 U/L</AltText>}
        {alt >= 40 && <GreaterFourtyText>Risks of other forms of liver disease</GreaterFourtyText>}
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
