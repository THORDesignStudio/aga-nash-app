import React from 'react'
import { Text, StyleSheet} from 'react-native'

export default function PageTitle ({pageTitle}){
  return(
      <Text style={styles.title}>
        {pageTitle}
      </Text>
  )
}

const styles = StyleSheet.create({
  title:{
    fontWeight:"700",
    fontSize: 20,
    color: "black",
  }
})