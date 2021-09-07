import React from "react";
import { View, 
         StyleSheet, 
         TouchableOpacity } from "react-native";
import styled from 'styled-components/native'

import TextBasic from '../global/textBasic'
import NextIcon from "../../assets/images/nextIcon";
import BackIcon from "../../assets/images/backIcon";


/**
 * <NextBack>
 * 
 * This component is used to go from one step of the path to the next.
 * It also allows the user to move back to the last step.
 * 
 * @param {function} navigation - this allows the app to navigate between screens 
 * @param {string}  nextPage - specifies what page to set as next
 */

const Container = styled.View`
  flexDirection: row;
  justifyContent: center;
  marginVertical: ${(props) => props.marginVertical || '50px'};
  backgroundColor: ${(props) => props.backgroundColor || '#F2F2F2'};
  paddingVertical: ${(props) => props.paddingVertical || '0px'};
`

export default function NextBack({ 
  nextPage, 
  navigation, 
  marginVertical, 
  backgroundColor = "#F1F6F8", 
  paddingVertical 
}) {

  return (
    <Container 
      marginVertical={marginVertical} 
      backgroundColor={backgroundColor} 
      paddingVertical={paddingVertical}
    >
      <View style={ styles.backContainer }>
        <TextBasic
          fontColor="#faa61a"
          fontSize={ 16 }
          fontWeight="bold"
          marginHorizontal={ 10 }
          textTransform="uppercase"
        >
          Back
        </TextBasic>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon />
        </TouchableOpacity>
      </View>
      <View style={ styles.nextContainer }>
        <TouchableOpacity onPress={() => navigation.navigate(nextPage)}>
          <NextIcon />
        </TouchableOpacity>
        <View style={ styles.nextText }>
          <TextBasic
            fontColor="#faa61a"
            fontSize={ 16 }
            fontWeight="bold"
            marginHorizontal={ 10 }
            textTransform="uppercase"
          >
            Next
          </TextBasic>
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  nextContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 100,
    marginHorizontal: 30,
  },
  backContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 100,
    marginHorizontal: 30,
  },
  nextText: {
    marginStart: -95,
  },
});
