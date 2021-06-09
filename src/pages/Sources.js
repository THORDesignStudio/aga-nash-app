import React from "react";
import styled from "styled-components/native";
import GoldenTitle from "../components/global/goldenTitle";
import Footer from "../components/global/footer";
import { PixelRatio } from "react-native";
import BackButton from '../components/global/backButton'

/**
 * Sources
 *
 * Currently there is no content. Waiting to hear from Colby about what's going to end up here.
 */

const Container = styled.ScrollView`
  flex: 1;
  display: flex;
  marginVertical: 20;
`;

const HeaderTextContainer = styled.View`
  flex: 0.6;
  width: 75%;
  backgroundColor: rgba(255, 255, 255, 0.8);
  marginHorizontal: 50;
  justifyContent: space-evenly;
`;

const style = {
  wrapper: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
};

const Title = styled.Text`
  fontSize: ${PixelRatio.getPixelSizeForLayoutSize(16)};
  textAlign: center;
`;

const Paragraph = styled.Text`
  marginHorizontal: 20;
  marginBottom: 10;
`;

const BackContainer = styled.View`
  justifyContent: flex-end;
`

export default function About({ navigation }) {
  return (
    <>
      <GoldenTitle>
        <HeaderTextContainer>
          <Title>SOURCES</Title>
        </HeaderTextContainer>
      </GoldenTitle>
      <Container contentContainerStyle={style.wrapper}>
      </Container>
      <BackButton navigation={navigation}/>
      <Footer navigation={navigation} />
    </>
  );
}
