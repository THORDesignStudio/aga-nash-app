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
const {alt} = useContext(ApplicationContext);



  return (
    <>
        <FibText>
          FIB-4 {"<"} 1.3 (age {"<"}65)
        </FibText>
        <FibText>and FIB-4 {"<"} 2 (age 65+)</FibText>
        {alt < 40 && <AltText>ALT {"<"} 40 U/L</AltText>}
        {alt >= 40 && <AltText>ALT ≥ 40 U/L</AltText>}
        {alt >= 40 && <GreaterFourtyText>Risks of other forms of liver disease</GreaterFourtyText>}
        <IndeterminateRiskDial>
          <IndeterminateRisk />
        </IndeterminateRiskDial>
        <FibText>
          <YellowText>INDETERMINATE RISK</YellowText> of
        </FibText>
        <FibText>advanced fibrosis related</FibText>
        <FibText>to NAFLD/NASH</FibText>
    </>
  );
}
