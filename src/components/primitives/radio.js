import React, { useState, useEffect } from "react";
import styled from "styled-components/native";

/**
 * @param label - label of the radio button
 * 
 */

const Container = styled.View`
  marginBottom: 5;
  alignItems: center;
  flexDirection: row;
  marginHorizontal: ${(props) => props.marginHorizontal || 0};
`;

const RadioText = styled.Text`
  marginLeft: 5;
  fontSize: 16;
  color: black;
`;

const RadioCircle = styled.TouchableOpacity`
  width: 30;
  height: 30;
  borderRadius: 100;
  borderWidth: 0.5;
  borderColor: black;
  alignItems: center;
  justifyContent: center;
`;

const SelectedRadio = styled.View`
  width: 20;
  height: 20;
  borderRadius: 50;
  backgroundColor: #00ff00;
`;

export default function Radio({ label, onPressSelected, marginHorizontal, onPressUnselected }) {
  const [selected, setSelected] = useState(false);

  const handleOnPress = () => {
      setSelected(!selected);
    
  };

  useEffect(() => {
      if (selected) {
        onPressSelected();
      } else if(!selected){
        onPressUnselected()
      }
    }, [selected]);


  return (
    <Container marginHorizontal={marginHorizontal}>
      <RadioCircle onPress={handleOnPress}>
        {selected && <SelectedRadio />}
      </RadioCircle>
      <RadioText>{label}</RadioText>
    </Container>
  );
}
