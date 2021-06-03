import React from "react";
import styled from "styled-components/native";
import GoldenTitle from "../components/global/goldenTitle";
import Banner from "../components/global/banner";
import Footer from "../components/global/footer";
import ScrollableView from '../components/primitives/scrollableContainer'
import { PixelRatio, Text } from "react-native";



const HeaderTextContainer = styled.View`
  flex: 0.6;
  width: 75%;
  backgroundColor: rgba(255, 255, 255, 0.8);
  marginHorizontal: 50;
  justifyContent: space-evenly;
`;


const Title = styled.Text`
  fontSize: ${PixelRatio.getPixelSizeForLayoutSize(16)};
  textAlign: center;
`;

const Paragraph = styled.Text`
  marginHorizontal: 20;
  marginBottom: 10;
`;

export default function About({ navigation }) {
  return (
    <>
      <GoldenTitle>
        <HeaderTextContainer>
          <Title>ABOUT</Title>
        </HeaderTextContainer>
      </GoldenTitle>
      <ScrollableView>
        <Paragraph>
          Non-alcoholic fatty liver disease (NAFLD) currently affects
          approximately 37% of U.S. adults.
        </Paragraph>
        <Paragraph>
          NAFLD is most often managed in primary care or endocrine clinics,
          where clinicians must determine which patients may benefit from
          secondary care to address hepatic manifestations, comorbid metabolic
          traits, and cardiovascular risk of the disease. Because NAFLD is
          largely asymptomatic, and because optimal timing of treatment depends
          on accurate staging of fibrosis risk, screening at the primary care
          level is critical, together with consistent, timely, evidence-based,
          widely accessible as well as testable management processes.
        </Paragraph>
        <Paragraph>
          To achieve these goals, the American Gastroenterological Association
          assembled a multidisciplinary panel of experts to develop a clinical
          care pathway providing explicit guidance on the screening, diagnosis,
          and treatment of NAFLD. This Pathway is intended to be applicable in
          any setting where care for patients with NAFLD is provided, including
          primary care, endocrine, obesity medicine and gastroenterology
          practices.
        </Paragraph>
        <Paragraph>
          This clinical tool is based on the recently published Clinical Care
          Pathway for the Risk Stratification and Management of Patients with
          Nonalcoholic Fatty Liver Disease [Kanwal et al. 2021] (LINK TO
          PUBLICATION) For more information on NAFLD/NASH please visit
          NASH.gastro.org.
        </Paragraph>
        <Paragraph>
          This initiative is supported by independent medical education grants
          from Intercept Pharmaceuticals, Inc., Pfizer Inc., Allergan and
          Genfit.
        </Paragraph>
        </ScrollableView>
      <Footer navigation={navigation} />
    </>
  );
}