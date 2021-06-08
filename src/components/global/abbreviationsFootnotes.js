import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {useFonts} from 'expo-font'

export default function AbbreviationsFootnotes ({navigation}){

  let [fontsLoaded] = useFonts({
    'NunitoSans-Regular': require('../../assets/fonts/NunitoSans-Regular.ttf'),
  });

  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Abbreviations")}>
      <Text style={styles.text}>
        ABBREVIATIONS
      </Text>
      </TouchableOpacity>
      <Text style={styles.text}>
        |
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Footnotes")} > 
      <Text style={styles.text}>
        FOOTNOTES
      </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#676767',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 50,
    alignItems: 'center',
  },
  text:{
    color: "white",
    fontFamily: 'NunitoSans-Regular',
  }
})