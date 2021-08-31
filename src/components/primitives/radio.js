import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import TextBasic from '../global/textBasic'

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

const RadioTextContainer = styled.View`
  marginLeft: 5px;
`


const RadioCircle = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  borderRadius: 100px;
  borderWidth: 0.5px;
  borderColor: black;
  alignItems: center;
  justifyContent: center;
`;

const SelectedRadio = styled.View`
  width: 20px;
  height: 20px;
  borderRadius: 50px;
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
      <RadioTextContainer>
        <TextBasic fontSize='16'>{label}</TextBasic>
      </RadioTextContainer>
    </Container>
  );
}
