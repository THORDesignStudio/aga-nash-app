import React from "react";
import styled from "styled-components/native";


const RiskMngHeader = styled.View`
  height: 250;
  backgroundColor: #E49917;
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
  width: 200px;
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
            Management by hepatologist with multidisciplinary team (PCP, dietician, endocrinologist, cardiologist, others)
          </MainText>
          <MainText>Lifestyle intervention</MainText>
          <MainText>
            Greater need for structured weight loss programs, ati-obesity medications, bariatric surgery
          </MainText>
          <MainText>Pharmacotherapy for NASH</MainText>
          <MainText>CVD risk reduction</MainText>
          <MainText>Diabetes care - Prefer medications with efficacy in NASH (pioglitazone, GLP-1RA)</MainText>
        </MainContent>
        <BottomContent>
          <BottomText>
          Refer to hepatologist for liver biopsy or MR elastography or monitoring with re-eval or risk in 2 - 3 years
          </BottomText>
        </BottomContent>
    </>
  );
}
