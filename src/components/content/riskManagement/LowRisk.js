import React from "react";
import styled from "styled-components/native";

import TextBasic from "../../global/textBasic"

const RiskMngHeader = styled.View`
  height: 320px;
  backgroundColor: #77c83f;
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

export default function LowRiskManagement() {
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
              Low Risk Management
            </TextBasic>
          </MainHeaderBox>
          <SecondaryHeaderBox>
            <TextBasic>FIB-4 {"<"} 1.3 or</TextBasic>
            <TextBasic>LSM {"<"} 8 kPa or</TextBasic>
            <TextBasic>liver biopsy F0-F1</TextBasic>
          </SecondaryHeaderBox>
        </MngHeaderBox>
      </RiskMngHeader>
      <MainContent>
        <TextBasic 
          marginVertical={5}
          textAlign="left"
        >
         {`\u2022 Management by PCP, dietician, endocrinologist, cardiologist, others`}
        </TextBasic>
        <TextBasic 
          marginVertical={5}
          textAlign="left"
        >
          {`\u2022 Lifestyle intervention: Yes. All patients require regular physical activity, healthy diet, avoid excess alcohol intake`}
        </TextBasic>
        <TextBasic 
          marginVertical={5}
          textAlign="left"
        >
          {`\u2022 Weight loss recommended if overweight or obese\u00B9: Yes. May benefit from structured weight loss programs, anti-obesity medications, bariatric surgery`}
        </TextBasic>
        <TextBasic 
          marginVertical={5}
          textAlign="left"
        >
          {`\u2022 Pharmacotherapy for NASH: Not recommended`}
        </TextBasic>
        <TextBasic 
          marginVertical={5}
          textAlign="left"
        >
          {`\u2022 CVD risk reduction\u00B2: Yes`}
        </TextBasic>
        <TextBasic 
          marginVertical={5}
          textAlign="left"
        >
          {`\u2022 Diabetes care: Standard of care`}
        </TextBasic>        
      </MainContent>
      <BottomContent>
        <TextBasic 
          marginVertical={5}
          textAlign="left"
        >
          Repeat NIT in 2-3 years unless clinical circumstances change
        </TextBasic>
      </BottomContent>
    </>
  );
}
