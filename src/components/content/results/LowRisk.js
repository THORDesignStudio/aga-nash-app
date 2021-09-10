import React, {useContext} from "react";
import styled from "styled-components/native";
import { ApplicationContext } from '../../../applicationProvider/applicationProvider'
import LowRisk from '../../../assets/images/lowRisk'

import TextBasic from "../../global/textBasic"

const LowRiskDial = styled.View`
  marginVertical: 40px;
`;


export default function LowRiskContent({ navigation }) {
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

      <LowRiskDial>
        <LowRisk />
      </LowRiskDial>
      <TextBasic fontSize={20} marginHorizontal={50} fontColor="#77c83f" fontWeight='bold'>
        LOW RISK
      </TextBasic>
    </>
  );
}
