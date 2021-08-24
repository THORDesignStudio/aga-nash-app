import React from "react";
import styled from "styled-components/native";
import { useFonts } from 'expo-font'

/**
 * @param buttonHeight - height of the button
 * @param marginTop - space between the top of the button and the above component
 * @param buttonBgClr - background color of the button
 * @param borderStyle - there are only 3 styles you can pass here: solid, dashed and dotted.
 * @param borderWidth - width of the border
 * @param borderRadius - border radius
 * @param fontSize - size of the text
 * @param width - width of the container that holds the text within the button
 * @param textClr - color of the text
 * 
 */



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
  alignItems: center;
  color: ${(props) => props.textClr || 'black'};
  fontFamily: 'NunitoSans-Bold';
  fontSize: ${(props) => props.fontSize || '18px' };
  fontWeight: bold;
  justifyContent: center;
  textAlign: center;
`

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

  let [fontsLoaded] = useFonts({
    'NunitoSans-Regular': require('../../assets/fonts/NunitoSans-Regular.ttf'),
  });

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


