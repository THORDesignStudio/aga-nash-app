import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Footer from "./components/global/footer";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={require("./assets/images/NASH_bkgd.png")}
          style={styles.background}
        >
          <View style={styles.box}>
            <View>
              <Text style={styles.nash}>NASH</Text>
            </View>
            <View style={styles.criticalCareContainer}>
              <Text style={styles.criticalCareText}>
                CRITICAL CARE PATHWAY
              </Text>
            </View>
            <Text style={styles.boldText}>
              This app helps primary care physicians, endrinologists and
              gastroenterologists:
            </Text>
            <Text style={styles.splashText}>
              Screen for NAFLD with advanced fibrosis
            </Text>
            <Text style={styles.splashText}>
              Manage patients at risk for NAFL/NASH
            </Text>
            <Text style={styles.splashText}>
              Know when to refer to a hepaologist
            </Text>
          </View>
          
          <View style={styles.riskContainer}>
            <TouchableOpacity style={styles.risk}>
              <Text style={styles.riskText}>CALCULATE RISK</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    flex: 0.45,
    backgroundColor: "rgba(255,255,255,0.8)",
    paddingBottom: 150,
    marginHorizontal: 50,
  },
  nash: {
    fontSize: 64,
    marginStart: 20,
    marginEnd: 20,
    marginBottom: 20,
    marginTop: 20,
    fontWeight: "700",
    textAlign: "center",
  },
  criticalCareContainer: {
    borderBottomColor: "black",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginEnd: 20,
    marginStart: 20,
  },
  boldText: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "700",
    marginVertical: 10,
    marginEnd: 10,
    marginStart: 10,
  },
  splashText: {
    textAlign: "center",
    fontSize: 14,
    marginHorizontal: 15,
    marginVertical: 10,
    fontWeight: "500",
  },
  riskContainer:{
    alignItems: "center",
    justifyContent: "center",
  },
  risk: {
    marginTop: 40,
    backgroundColor: 'white',
    width: '60%',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
  },
  riskText: {
    fontSize: 20,
    fontWeight: '700',
    color: "#faa61a",
    textAlign: "center",
    paddingTop: 30,
    paddingBottom: 30,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: '100%',
  },
  criticalCareText:{
    textAlign: "center",
    fontSize: 16,
    fontWeight: '700',
    marginVertical: 10,
    color:"#faa61a",
  }
});
