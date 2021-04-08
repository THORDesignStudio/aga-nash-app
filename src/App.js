import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Footer from './components/global/footer'

export default function App() {
  return (
    <>
    <View style={styles.container} >
      <View style={styles.box}>
        <View style={styles.borderBottom} > 
        <Text style={styles.nash}>NASH</Text>
        </View>
        <Text style={styles.goldText}>This app helps primary care physicians, endrinologists and gastroenterologists</Text><Text>
          screen for NAFLD with advanced fibrosis, manage patients at risk for NAFLD/NASH, know when to refer to a hepatologist.
        </Text>
      </View>
    </View>
    <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#faa61a",
    alignItems: "center",
    justifyContent: "center",
  },
  box:{
    flex: .5,
    backgroundColor: 'rgba(20,16,26,0.3)',
    marginEnd: 50,
    marginStart: 50,
  },
  nash:{
    fontSize: 72,
    marginStart: 20,
    marginEnd:20,
    fontWeight: '700',
  },
  borderBottom:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginEnd: 20,
    marginStart: 20,
  },
  goldText:{
    color: 'white',
  }
});