import React from "react";
import styled from "styled-components";


const RiskMngHeader = styled.View`
  height: 250;
  backgroundColor: #77c83f;
  justifyContent: center;
  alignItems: center;
`;
const MngHeaderBox = styled.View`
  height: 180;
  width: 80%;
  backgroundColor: #ffffff;
  justifyContent: center;
  alignItems: center;
`;

const MainHeaderBox = styled.View`
  borderBottomWidth: 1px;
  borderBottomColor: #d8d8d8;
  marginHorizontal: 20;
  width: 80%;
  justifyContent: center;
  alignItems: center;
`;

const MainHeaderText = styled.Text`
  fontFamily: "NunitoSans-SemiBold";
  fontSize: 20;
  width: 120px;
  textAlign: center;
  marginBottom: 10;
`;

const SecondaryHeaderBox = styled.View`
  justifyContent: center;
  alignItems: center;
  textAlign: center;
  marginTop: 10;
`;

const SecondaryHeaderText = styled.Text`
  fontSize: 16;
  fontFamily: "NunitoSans-Regular";
  textAlign: center;
`;
const MainContent = styled.View`
  borderBottomWidth: 1px;
  borderBottomColor: #D8D8D8;
  marginHorizontal: 20;
  marginVertical: 20;
  paddingBottom: 20;
`;

const MainText = styled.Text`
  fontFamily: "NunitoSans-Regular";
  fontSize: 16;
  marginVertical: 20;
  textAlign: left;
`;

const BottomContent = styled.View`
  marginHorizontal: 20;
  marginVertical: 20;
`;

const BottomText = styled.Text`
  fontFamily: "NunitoSans-Regular";
  fontSize: 16;
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
            Management by PCP, dietician, endocrinologist, cardiologist, others
          </MainText>
          <MainText>Lifestyle intervention</MainText>
          <MainText>
            May benefit from structured weight loss programs, anti-obesity
            medications, bariatric surgery
          </MainText>
          <MainText>CVD risk reduction2</MainText>
          <MainText>Diabetes care</MainText>
        </MainContent>
        <BottomContent>
          <BottomText>
          Repeat NIT in 2-3 years unless clinical circumstances change
          </BottomText>
        </BottomContent>
    </>
  );
}
