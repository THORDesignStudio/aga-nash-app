import React from "react";
import styled from "styled-components/native";
import GoldenTitle from "../components/global/goldenTitle";
import Footer from "../components/global/footer";
import { PixelRatio, Text } from "react-native";

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
    justifyContent: "flex-start",
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
      <Footer navigation={navigation} />
    </>
  );
}
