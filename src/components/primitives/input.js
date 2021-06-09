import React from "react";
import styled from "styled-components/native";
import {PixelRatio} from 'react-native'
import {useFonts} from 'expo-font'

const Container = styled.View`
  flexDirection: row;
  justifyContent: center;
  alignItems: center;
  marginVertical: 10;
`;

const Input = styled.TextInput`
  width: 250;
  height: 50;
  borderStyle: solid;
  borderColor: black;
  borderWidth: 1;
  borderRadius: 20;
  fontFamily: 'NunitoSans-Regular';
`;
const InputText = styled.Text`
  fontSize: ${PixelRatio.getPixelSizeForLayoutSize(8)};
  fontWeight: 700;
  marginStart: 10;
  fontFamily: 'NunitoSans-Regular';
`;

export default function InputBox({ placeholder, text, value, onChangeText }) {

  let [fontsLoaded] = useFonts({
    'NunitoSans-Regular': require('../../assets/fonts/NunitoSans-Regular.ttf'),
  });


  return (
    <Container>
      <Input
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
      <InputText>{text}</InputText>
    </Container>
  );
}
