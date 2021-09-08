import React from "react";
import { Text, Linking } from "react-native";

import ContentContainer from "../../global/contentContainer";
import TextBasic from "../../global/textBasic";


export default function IndeterminateRiskMngFootnotes() {
  return (
    <>
      <ContentContainer>
        { `\u00B9` } Weight loss recommended for cardiometabolic benefit and reversal of steatosis. Greater weight loss is often associated with more benefit, such as reversal of steatohepatitis (usually with weight loss ≥7%) or fibrosis (usually with weight loss ≥10%).
      </ContentContainer>
      <ContentContainer>
        { `\u00B2` } No pharmacological agent is FDA-approved for the treatment of NASH. Patients with T2DM may benefit from some diabetes medications, such as and some GLP-1 RAs that have reported histological improvement in RCTs in patients with NASH, either with or without diabetes. Among GLP-1 RAs, semaglutide has the strongest evidence of liver histological benefit.
      </ContentContainer>
      <ContentContainer>
        { `\u00B3` } Vitamin E improves steatohepatitis in patients with NASH without diabetes 
        <TextBasic fontColor="#69badf">
          <Text 
            style={{ fontSize: 16 }}
            onPress={() => Linking.openURL('https://www.nejm.org/doi/10.1056/NEJMoa0907929')}>
            {`\u00a0`}[Sanyal AJ et al. 2010]
          </Text>
        </TextBasic>
        , with less evidence in patients with T2D 
        <TextBasic fontColor="#69badf">
          <Text 
            style={{ fontSize: 16 }}
            onPress={() => Linking.openURL('https://care.diabetesjournals.org/content/42/8/1481.long')}>
            {`\u00a0`}[Bril F et al. 2019]
          </Text>
        </TextBasic>
      </ContentContainer>
    </>
  );
}
