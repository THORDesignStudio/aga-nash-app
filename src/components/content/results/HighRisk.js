import React, {useContext} from "react";
import styled from "styled-components/native";
import HighRisk from '../../../assets/images/highRisk'
import {ApplicationContext} from '../../../applicationProvider/applicationProvider'
import TextBasic from "../../global/textBasic";

const HighRiskDial = styled.View`
  marginVertical: 40px;
`;


export default function HighRiskContent({ navigation }) {
  
  const {alt, fib4} = useContext(ApplicationContext);

  return (
    <>
      <TextBasic fontSize={24}>FIB4 = {fib4.toFixed(2)}</TextBasic>
      {alt >= 40 && (
        <>
          <TextBasic fontSize={24} marginVertical={5}>
            {`ALT \u2265 40 U/L`}
          </TextBasic>
          <TextBasic fontSize={14}>
            Risk of other forms of liver disease
          </TextBasic>
        </>
      )}
      {alt < 40 && (
        <TextBasic fontSize={24} marginVertical={5}>
          {`ALT \u003c 40 U/L`}
        </TextBasic>
      )}
      <HighRiskDial>
        <HighRisk />
      </HighRiskDial>
      <TextBasic
        fontSize={20}
        marginHorizontal={50}
        fontColor="#FC1B1F"
        fontWeight="bold"
      >
        HIGH RISK
      </TextBasic>
    </>
  );
}
