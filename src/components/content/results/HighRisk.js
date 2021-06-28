import React, {useContext} from "react";
import styled from "styled-components/native";
import HighRisk from '../../../assets/images/highRisk'
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
const HighRiskDial = styled.View`
  marginVertical: 40;
`;

const YellowText = styled.Text`
  fontFamily: "NunitoSans-Regular";
  fontSize: 20;
  color: #FC1B1F;
`;

export default function HighRiskContent({ navigation }) {
const {alt} = useContext(ApplicationContext);



  return (
    <>
        <FibText>
        FIB-4 {'>'} 2.67
        </FibText>
        {alt < 40 && <AltText>ALT {"<"} 40 U/L</AltText>}
        {alt >= 40 && <AltText>ALT ≥ 40 U/L</AltText>}
        <HighRiskDial>
          <HighRisk />
        </HighRiskDial>
        <FibText>
          <YellowText>High RISK</YellowText> of
        </FibText>
        <FibText>advanced fibrosis related</FibText>
        <FibText>to NAFLD/NASH</FibText>
    </>
  );
}
