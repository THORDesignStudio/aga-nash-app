import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

export default function AbbreviationsFootnotes ({navigation}){
  return(
    <View style={styles.container}>
      <TouchableOpacity>
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
  }
})