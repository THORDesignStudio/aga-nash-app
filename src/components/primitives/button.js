import React from "react";
import styled from "styled-components/native";

const ButtonView = styled.View`
  alignItems: center;
  justifyContent: center;
  height: ${(props) => props.buttonHeight || 60};
  marginTop: ${(props) => props.marginTop || 0};
`;

const ButtonOpacity = styled.TouchableOpacity`
  flex: 1;
  backgroundColor: ${(props) => props.buttonBgClr || 'white'};
  width: 250;
  borderStyle: ${(props) => props.borderStyle || 'solid'};
  borderColor: black;
  borderWidth: ${(props) => props.borderWidth || 1 };
  borderRadius: ${(props) => props.borderRadius || 20};
  justifyContent: center;
  alignItems: center;
`;

const TextContianer = styled.View`
  width: ${(props) => props.width || '100%'};
  justifyContent: center;
  alignItems: center;
`

const ButtonText = styled.Text`
  fontSize: ${(props) => props.fontSize || 20};
  fontWeight: 500;
  color: ${(props) => props.textClr || 'black'};
  textAlign: center;
  justifyContent: center;
  alignItems: center;
`;

export default function HomeScreen({
  onPress,
  buttonText,
  buttonBgClr,
  textClr,
  textWidth,
  fontSize,
  buttonHeight,
  marginTop,
  borderRadius,
  borderWidth,
  borderStyle
}) {
  return (
    <>
      <ButtonView buttonHeight={buttonHeight} marginTop={marginTop}>
        <ButtonOpacity buttonBgClr={buttonBgClr} onPress={onPress} borderRadius={borderRadius} borderWidth={borderWidth} borderStyle={borderStyle}>
          <TextContianer width={textWidth} >
          <ButtonText textClr={textClr} fontSize={fontSize}>{buttonText}</ButtonText>
          </TextContianer>
        </ButtonOpacity>
      </ButtonView>
    </>
  );
}


