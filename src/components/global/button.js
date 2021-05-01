import React from "react";
import styled from "styled-components/native";

const ButtonView = styled.View`
  alignItems: center;
  justifyContent: center;
  height: 100;
`;

const ButtonOpacity = styled.TouchableOpacity`
  flex: 1;
  marginVertical: 25;
  backgroundColor: ${(props) => props.buttonBgClr || 'white'};
  width: 250;
  borderStyle: solid;
  borderColor: black;
  borderWidth: 1;
  borderRadius: 20;
`;

const ButtonText = styled.Text`
  fontSize: 20;
  fontWeight: 700;
  color: ${(props) => props.textClr || 'black'};
  textAlign: center;
  marginVertical: 10;
`;

export default function HomeScreen({
  onPress,
  buttonText,
  buttonBgClr,
  textClr,
}) {
  return (
    <>
      <ButtonView>
        <ButtonOpacity buttonBgClr={buttonBgClr} onPress={onPress}>
          <ButtonText textClr={textClr}>{buttonText}</ButtonText>
        </ButtonOpacity>
      </ButtonView>
    </>
  );
}


