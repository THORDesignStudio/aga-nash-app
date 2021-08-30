import React from "react";
import styled from "styled-components/native";


const RiskMngHeader = styled.View`
  height: 320px;
  backgroundColor: #E49917;
  justifyContent: center;
  alignItems: center;
`;
const MngHeaderBox = styled.View`
  height: 180px;
  width: 80%;
  backgroundColor: #ffffff;
  justifyContent: center;
  alignItems: center;
`;

const MainHeaderBox = styled.View`
  borderBottomWidth: 1px;
  borderBottomColor: #d8d8d8;
  marginHorizontal: 20px;
  width: 80%;
  justifyContent: center;
  alignItems: center;
`;

const MainHeaderText = styled.Text`
  fontFamily: "NunitoSans-SemiBold";
  fontSize: 20px;
  width: 200px;
  textAlign: center;
  marginBottom: 10px;
`;

const SecondaryHeaderBox = styled.View`
  justifyContent: center;
  alignItems: center;
  textAlign: center;
  marginTop: 10px;
`;

const SecondaryHeaderText = styled.Text`
  fontSize: 16px;
  fontFamily: "NunitoSans-Regular";
  textAlign: center;
`;
const MainContent = styled.ScrollView`
  borderBottomWidth: 1px;
  borderBottomColor: #D8D8D8;
  marginHorizontal: 20px;
  marginVertical: 20px;
  paddingBottom: 20px;
`;

const MainText = styled.Text`
  fontFamily: "NunitoSans-Regular";
  fontSize: 16px;
  marginVertical: 6px;
  textAlign: left;
`;

const BottomContent = styled.View`
  marginHorizontal: 20px;
  marginVertical: 20px;
`;

const BottomText = styled.Text`
  fontFamily: "NunitoSans-Regular";
  fontSize: 16px;
  textAlign: left;
`;

export default function IndeterminateRiskManagement() {
  

  return (
    <>
      <RiskMngHeader>
        <MngHeaderBox>
          <MainHeaderBox>
            <MainHeaderText>Indeterminate Risk Management</MainHeaderText>
          </MainHeaderBox>
          <SecondaryHeaderBox>
            <SecondaryHeaderText>FIB-4 1.3 - 2.67</SecondaryHeaderText>
            <SecondaryHeaderText>LSM 8 - 12 kPa and</SecondaryHeaderText>
            <SecondaryHeaderText>liver biopsy not available</SecondaryHeaderText>
          </SecondaryHeaderBox>
        </MngHeaderBox>
      </RiskMngHeader>
      <MainContent>
        <MainText>
          {`\u2022 Management by hepatologist with multidisciplinary team (PCP, dietician, endocrinologist, cardiologist, others)`}
        </MainText>
        <MainText>
          {`\u2022 Lifestyle intervention `}
        </MainText>
        <MainText>
          {`\u2022 Greater need for structured weight loss programs, anti-obesity medications, bariatric surgery `}
        </MainText>
        <MainText>
          {`\u2022 Pharmacotherapy for NASH `}
        </MainText>
        <MainText>
          {`\u2022 CVD risk reduction `}
        </MainText>
        <MainText>
          {`\u2022 Diabetes care - Prefer medications with efficacy in NASH (pioglitazone, GLP-1RA) `}
        </MainText>
      </MainContent>
      <BottomContent>
        <BottomText>
        Refer to hepatologist for liver biopsy or MR elastography or monitoring with re-eval or risk in 2 - 3 years
        </BottomText>
      </BottomContent>
    </>
  );
}
