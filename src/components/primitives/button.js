import React from "react";
import styled from "styled-components/native";
import TextBasic from '../global/textBasic'

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
  height: ${(props) => props.buttonHeight || '60px'};
  marginTop: ${(props) => props.marginTop || '0px'};
`;

const ButtonOpacity = styled.TouchableOpacity`
  flex: 1;
  backgroundColor: ${(props) => props.buttonBgClr || 'white'};
  width: 250;
  borderStyle: ${(props) => props.borderStyle || 'solid'};
  borderColor: black;
  borderWidth: ${(props) => props.borderWidth || '1px' };
  borderRadius: ${(props) => props.borderRadius || '20px'};
  justifyContent: center;
  alignItems: center;
`;

const TextContainer = styled.View`
  width: ${(props) => props.width || '100%'};
  justifyContent: center;
  alignItems: center;
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

  return (
    <>
      <ButtonView buttonHeight={buttonHeight} marginTop={marginTop}>
        <ButtonOpacity 
          buttonBgClr={buttonBgClr} 
          onPress={onPress} 
          borderRadius={borderRadius} 
          borderWidth={borderWidth} 
          borderStyle={borderStyle}
        >
          <TextContainer width={textWidth} >
            <TextBasic fontWeight='bold' fontColor={textClr} fontSize={fontSize}>{buttonText}</TextBasic>
          </TextContainer>
        </ButtonOpacity>
      </ButtonView>
    </>
  );
}


