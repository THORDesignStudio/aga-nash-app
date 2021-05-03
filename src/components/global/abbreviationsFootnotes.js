import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

export default function AbbreviationsFootnotes (){
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
      <TouchableOpacity>
      <Text style={styles.text}>
        FOOTNOTES
      </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 50,
    alignItems: 'center',
  },
  text:{
    color: "white",
  }
})