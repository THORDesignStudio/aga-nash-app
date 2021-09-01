import React from "react";
import styled from "styled-components/native";
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { useFonts } from 'expo-font'

const Container = styled.ScrollView`
  marginVertical: 10px;
`;

const InputContainer = styled.View`
  alignItems: center;
  flexDirection: row;
  justifyContent: center;
`

const InnerContainer = styled.View`
  borderStyle: solid;
  borderColor: black;
  borderWidth: 1px;
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center;
`

const Input = styled.TextInput`
  width: 200px;
  height: 50px;
  borderStyle: solid;
  borderColor: black;
  borderWidth: ${ props => props.hasUnit === false ? '1px' : '0px'};
  fontFamily: 'NunitoSans-Regular';
  textAlign: left;
  paddingHorizontal: 10px;
`;
const InputText = styled.Text`
  fontSize: 16px;
  fontWeight: 700;
  marginStart: 15px;
  fontFamily: 'NunitoSans-Regular';
`;
const InputUnit = styled.Text`
  backgroundColor: #ddd;
  overflow: hidden;
  padding: 16px 10px;
  text-align: center;
  width: 70px;
`

export default function InputBox({ 
  keyboardType,
  onChangeText,
  placeholder, 
  text,
  unit, 
  hasUnit = false
}) {

  let [fontsLoaded] = useFonts({
    'NunitoSans-Regular': require('../../assets/fonts/NunitoSans-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={ [styles.container, styles.horizontal] }>
        <ActivityIndicator size="large" color="#122033" />
      </View>
    )
  } 

  else {
    return (
      <Container keyboardShouldPersistTaps='handled'>
        <InputContainer>
          { hasUnit !== false ? (
            <InnerContainer>
              <Input
                hasUnit={hasUnit}
                placeholder={placeholder}
                onChangeText={onChangeText}
                placeholderTextColor='grey'
                keyboardType={keyboardType}
              />
              <InputUnit>
                { unit }
              </InputUnit>
            </InnerContainer>
          ) : (
            <Input
              hasUnit={hasUnit}
              placeholder={placeholder}
              onChangeText={onChangeText}
              placeholderTextColor='grey'
              keyboardType={keyboardType}
            />
          )}
          <InputText>
            {text}
          </InputText>
        </InputContainer>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});