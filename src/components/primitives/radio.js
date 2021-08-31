import React, { useState, useEffect } from "react";
import styled from "styled-components/native";

/**
 * @param label - label of the radio button
 * 
 */

const Container = styled.View`
  marginBottom: 5px;
  alignItems: center;
  flexDirection: row;
  marginHorizontal: ${(props) => props.marginHorizontal || '0px'};
`;

const RadioText = styled.Text`
  marginLeft: 5px;
  fontSize: 16px;
  color: black;
`;

const RadioCircle = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  borderRadius: 100;
  borderWidth: 0.5px;
  borderColor: black;
  alignItems: center;
  justifyContent: center;
`;

const SelectedRadio = styled.View`
  width: 20px;
  height: 20px;
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
