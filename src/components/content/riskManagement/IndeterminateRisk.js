import React from "react";
import styled from "styled-components/native";

import TextBasic from "../../global/textBasic"

const RiskMngHeader = styled.View`
  height: 320px;
  backgroundColor: #E49917;
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

export default function IndeterminateRiskManagement() {
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
              Indeterminate Risk Management
            </TextBasic>            
          </MainHeaderBox>
          <SecondaryHeaderBox>
            <TextBasic>FIB-4 1.3 - 2.67</TextBasic>
            <TextBasic>LSM 8 - 12 kPa and</TextBasic>
            <TextBasic>liver biopsy not available</TextBasic>
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
          {`\u2022 Lifestyle intervention: Yes. All patients require regular physical activity, healthy diet, avoid excess alcohol intake `}
        </TextBasic>
        <TextBasic 
          marginVertical={5}
          textAlign="left"
        >
          {`\u2022 Weight loss recommended if overweight or obese\u00B9: Yes. Greater need for structured weight loss programs, anti-obesity medications, bariatric surgery `}
        </TextBasic>
        <TextBasic 
          marginVertical={5}
          textAlign="left"
        >
          {`\u2022 Pharmacotherapy for NASH: Yes\u00B2. Individualize based on further work-up and efforts to confirm the diagnosis of NASH. A liver biopsy provides helpful information and should be considered for cases where there is a diagnostic doubt such as patients with indeterminate, unreliable, or conflicting non-invasive assessments or as part of phase 2 or 3 clinical trials `}
        </TextBasic>
        <TextBasic 
          marginVertical={5}
          textAlign="left"
        >
          {`\u2022 CVD risk reduction\u00B3: Yes `}
        </TextBasic>
        <TextBasic 
          marginVertical={5}
          textAlign="left"
        >
          {`\u2022 Diabetes care: Prefer medications with efficacy in NASH (pioglitazone, GLP-1 RA) `}
        </TextBasic>
      </MainContent>
      <BottomContent>
        <TextBasic 
          marginVertical={5}
          textAlign="left"
        >
          Refer to hepatologist for liver biopsy or MR elastography or monitoring with re-evaluation of risk in 2-3 years
        </TextBasic>
      </BottomContent>
    </>
  );
}
