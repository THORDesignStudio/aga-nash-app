import React from "react";
import styled from "styled-components/native";

import TextBasic from "../../global/textBasic"

const RiskMngHeader = styled.View`
  height: 320px;
  backgroundColor: #FC1B1F;
  justifyContent: center;
  alignItems: center;
`;
const MngHeaderBox = styled.View`
  width: 80%;
  backgroundColor: #ffffff;
  justifyContent: center;
  alignItems: center;
  padding: 30px;
`;
const MainHeaderBox = styled.View`
  borderBottomWidth: 1px;
  borderBottomColor: #d8d8d8;
  justifyContent: center;
  alignItems: center;
`;
const SecondaryHeaderBox = styled.View`
  justifyContent: center;
  alignItems: center;
  textAlign: center;
  marginTop: 10px;
`;
const MainContent = styled.View`
  backgroundColor: #fff;
  borderBottomWidth: 1px;
  borderBottomColor: #D8D8D8;
  paddingHorizontal: 20px;
  paddingVertical: 10px;
  paddingBottom: 20px;
`;
const BottomContent = styled.View`
  backgroundColor: #fff;
  padding: 20px;
`;

export default function HighRiskManagement() {
  return (
    <>
        <RiskMngHeader>
          <MngHeaderBox>
            <MainHeaderBox>
              <TextBasic
                fontSize={ 20 }
                fontWeight="bold"
                marginVertical={ 10 }
              >
                High Risk Management
              </TextBasic>
            </MainHeaderBox>
            <SecondaryHeaderBox>
              <TextBasic>FIB-4 {'>'} 2.67</TextBasic>
              <TextBasic>LSM {'>'} 12 kPa and</TextBasic>
              <TextBasic>liver biopsy F0-F1</TextBasic>
            </SecondaryHeaderBox>
          </MngHeaderBox>
        </RiskMngHeader>
        <MainContent>
          <TextBasic 
            marginVertical={5}
            textAlign="left"
          >
            {`\u2022 Management by hepatologist with multidisciplinary team (PCP, dietician, endocrinologist, cardiologist, others)`}
          </TextBasic>
          <TextBasic 
            marginVertical={5}
            textAlign="left"
          >
            {`\u2022 Lifestyle intervention `}
          </TextBasic>
          <TextBasic 
            marginVertical={5}
            textAlign="left"
          >
            {`\u2022 Strong need for structured weight loss programs, anti-obesity medications, bariatric surgery `}
          </TextBasic>
          <TextBasic 
            marginVertical={5}
            textAlign="left"
          >
            {`\u2022 Pharmacotherapy for NASH `}
          </TextBasic>
          <TextBasic 
            marginVertical={5}
            textAlign="left"
          >
          {`\u2022 CVD risk reduction `}
          </TextBasic>
          <TextBasic 
            marginVertical={5}
            textAlign="left"
          >
            {`\u2022 Diabetes care - Prefer medications with efficacy in NASH (pioglitazone, GLP-1RA)  `}
          </TextBasic>
        </MainContent>
        <BottomContent>
          <TextBasic 
            marginVertical={5}
            textAlign="left"
          >
            Refer to Hepatologist 
          </TextBasic>
        </BottomContent>
    </>
  );
}
