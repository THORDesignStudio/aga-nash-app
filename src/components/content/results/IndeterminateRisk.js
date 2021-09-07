import React, {useContext} from "react";
import styled from "styled-components/native";
import IndeterminateRisk from '../../../assets/images/indeterminateRisk'
import {ApplicationContext} from '../../../applicationProvider/applicationProvider'
import TextBasic from "../../global/textBasic";


const IndeterminateRiskDial = styled.View`
  marginVertical: 40px;
`;



export default function IndeterminateRiskContent({ navigation }) {
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
      <IndeterminateRiskDial>
        <IndeterminateRisk />
      </IndeterminateRiskDial>
      <TextBasic
        fontSize={20}
        marginHorizontal={50}
        fontColor="#E49917"
        fontWeight="bold"
      >
        INDETERMINATE RISK
      </TextBasic>
    </>
  );
}
