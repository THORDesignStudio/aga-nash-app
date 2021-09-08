import React from "react";
import styled from "styled-components/native";
import { Text, Linking } from "react-native";

import GoldenTitle from "../components/global/goldenTitle";
import Footer from "../components/global/footer";
import ScrollableView from '../components/primitives/scrollableContainer'
import TextBasic from "../components/global/textBasic";
import BackButton from '../components/global/backButton';

const HeaderTextContainer = styled.View`
  backgroundColor: rgba(255, 255, 255, 0.8);
  flex: 0.5;
  width: 75%;
  marginHorizontal: 50px;
  justifyContent: space-evenly;
`;

const TextContainer = styled.View`
  marginHorizontal: 20px;
  marginVertical: 20px;
`

const ParagraphContainer = styled.View`
  marginVertical: 10px;
`

/**
 * <About>
 * 
 * Static page that doesn't have anything major going on in it at the moment.
 */
export default function About({ navigation }) {
  return (
    <>
      <GoldenTitle flex={0.6}>
        <HeaderTextContainer>
          <TextBasic fontSize={32} fontWeight='bold'>ABOUT</TextBasic>
        </HeaderTextContainer>
      </GoldenTitle>
      <ScrollableView>
        <TextContainer>
          <ParagraphContainer>
            <TextBasic textAlign='left' fontSize={18} >
              This clinical tool is based on the “Clinical Care Pathway for the Risk Stratification and Management of Patients with Nonalcoholic Fatty Liver Disease” publication [Kanwal et al. 2021]. 
            </TextBasic>
          </ParagraphContainer>
          <ParagraphContainer>
            <TextBasic textAlign='left' fontSize={18} >
              AGA assembled a multidisciplinary panel of experts to develop the clinical care pathway and app applicable for use in any setting in any setting where care for patients with NAFLD is provided, including primary care, endocrine, obesity medicine and gastroenterology practices.
            </TextBasic>
          </ParagraphContainer>
          <ParagraphContainer>
            <TextBasic textAlign='left' fontSize={18} >
              This initiative is supported by independent medical education grants from Intercept Pharmaceuticals, Inc., Pfizer Inc., and Allergan and Genfit.
            </TextBasic>
          </ParagraphContainer>
          <ParagraphContainer>
            <TextBasic textAlign='left' fontSize={18} >
              For more information visit 
              <TextBasic fontColor="#69badf">
                <Text 
                  style={{ fontSize: 16 }}
                  onPress={() => Linking.openURL('https://nash.gastro.org')}>
                  {`\u00a0`}NASH.gastro.org
                </Text>
              </TextBasic>              
              {`.`}
            </TextBasic>
          </ParagraphContainer>
        </TextContainer>
        <BackButton 
          destination="Navigate"
          navigation={navigation}
        />
      </ScrollableView>
      <Footer navigation={navigation} />
    </>
  );
}
