import React, {useContext} from "react";
import styled from "styled-components/native";
import IndeterminateRisk from '../../../assets/images/indeterminateRisk'
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
const IndeterminateRiskDial = styled.View`
  marginVertical: 40;
`;

const YellowText = styled.Text`
  fontFamily: "NunitoSans-Regular";
  fontSize: 20;
  color: #E49917;
`;

const GreaterFourtyText = styled.Text`
  fontFamily: "NunitoSans-Regular";
  fontSize: 16;
`

export default function IndeterminateRiskContent({ navigation }) {
const {alt, fib4} = useContext(ApplicationContext);



  return (
    <>
        <FibText>
        FIB4 = {fib4.toFixed(2)}
        </FibText>
        {alt >= 40 && <AltText>ALT ≥ 40 U/L</AltText>}
        <IndeterminateRiskDial>
          <IndeterminateRisk />
        </IndeterminateRiskDial>
        <FibText>
          <YellowText>INDETERMINATE RISK</YellowText>
        </FibText>
    </>
  );
}
