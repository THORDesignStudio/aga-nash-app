import React from "react";
import styled from "styled-components/native";

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
`;
const InputText = styled.Text`
  fontSize: 16;
  fontWeight: 700;
  marginStart: 10;
`;

export default function InputBox({ placeholder, text, value, onChangeText }) {
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
