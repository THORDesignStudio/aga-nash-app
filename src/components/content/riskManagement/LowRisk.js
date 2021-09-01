import React from "react";
import styled from "styled-components/native";

const RiskMngHeader = styled.View`
  height: 320px;
  backgroundColor: #77c83f;
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
  fontFamily: "NunitoSans-Bold";
  fontSize: 20px;
  width: 120px;
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
const MainContent = styled.View`
  borderBottomWidth: 1px;
  borderBottomColor: #D8D8D8;
  marginHorizontal: 20px;
  marginVertical: 10px;
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

export default function LowRiskManagement() {

  return (
    <>
      <RiskMngHeader>
        <MngHeaderBox>
          <MainHeaderBox>
            <MainHeaderText>Low Risk Management</MainHeaderText>
          </MainHeaderBox>
          <SecondaryHeaderBox>
            <SecondaryHeaderText>FIB-4 {"<"} 1.3 or</SecondaryHeaderText>
            <SecondaryHeaderText>LSM {"<"} 8 kPa or</SecondaryHeaderText>
            <SecondaryHeaderText>liver biopsy F0-F1</SecondaryHeaderText>
          </SecondaryHeaderBox>
        </MngHeaderBox>
      </RiskMngHeader>
      <MainContent>
        <MainText>
         {`\u2022 Management by PCP, dietician, endocrinologist, cardiologist, others`}
        </MainText>
        <MainText>
          {`\u2022 Lifestyle intervention`}
        </MainText>
        <MainText>
          {`\u2022 May benefit from structured weight loss programs, anti-obesity medications, bariatric surgery`}
        </MainText>
        <MainText>
          {`\u2022 CVD risk reduction`}
        </MainText>
        <MainText>
          {`\u2022 Diabetes care`}
        </MainText>
      </MainContent>
      <BottomContent>
        <BottomText>
        Repeat NIT in 2-3 years unless clinical circumstances change
        </BottomText>
      </BottomContent>
    </>
  );
}
