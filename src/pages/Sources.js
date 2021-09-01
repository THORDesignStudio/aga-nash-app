import React from "react";
import styled from "styled-components/native";

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
 * <Sources>
 *
 * Currently there is no content. Waiting to hear from Colby about what's going to end up here.
 */
export default function Sources({ navigation }) {
  return (
    <>
      <GoldenTitle flex="0.6">
        <HeaderTextContainer>
          <TextBasic fontSize={32} fontWeight='bold'>SOURCES</TextBasic>
        </HeaderTextContainer>
      </GoldenTitle>
      <ScrollableView>
        <TextContainer>
          <ParagraphContainer>
            <TextBasic textAlign='left' fontSize={18} >
              Kanwal F, Shubrook J, Adams L, Pfotenhauer K, Wong V, Wright E, Abdelmalek M, Harrison S, Loomba R, Mantzoros C, Bugianesi E, Eckel R, Kaplan L, El-Serag H, Cusi K: Clinical Care Pathway for the Risk Stratification and Management of Patients with Nonalcoholic Fatty Liver Disease. Gastroenterology 2021; in press. 
            </TextBasic>
          </ParagraphContainer>
        </TextContainer>
      </ScrollableView>
      <BackButton 
        destination="Navigate"
        navigation={navigation}
      />
      <Footer navigation={navigation} />
    </>
  );
}

const style = {
  wrapper: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
};
