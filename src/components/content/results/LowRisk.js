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
const {alt, fib4} = useContext(ApplicationContext);



  return (
    <>
        <FibText>
          FIB4 = {fib4.toFixed(2)}
        </FibText>
        {alt >= 40 && <AltText>ALT ≥ 40 U/L</AltText>}
        <LowRiskDial>
          <LowRisk />
        </LowRiskDial>
        <FibText>
          <GreenText>LOW RISK</GreenText>
        </FibText>
    </>
  );
}
