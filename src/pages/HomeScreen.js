import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import Footer from "../components/global/footer";
import Banner from "../components/global/banner";
import Button from "../components/global/button";

export default function HomeScreen({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/images/NASH_bkgd.png")}
          style={styles.background}
        >
          <View style={styles.box}>
            <View>
              <Text style={styles.nash}>
                NONALCOHOLIC FATTY LIVER DISEASE (NASH)
              </Text>
            </View>
            <View style={styles.criticalCareContainer}>
              <Text style={styles.criticalCareText}>
                Critical Care Pathway for Risk Stratification and Patient
                Management
              </Text>
            </View>
            <Text style={styles.splashText}>
              For use in primary care, endocrine, obesity medicine and
              gastroenterology practices
            </Text>
          </View>
          <Button
            buttonText="START"
            onPress={() => navigation.navigate("Conditions")}
            textClr="#faa61a"
          />
          {/* <View style={styles.riskContainer}>
            <TouchableOpacity style={styles.risk} onPress={() => navigation.navigate('Conditions')}>
              <Text style={styles.riskText}>LOW RISK NASH MANAGEMENT</Text>
            </TouchableOpacity>
          </View> */}
        </ImageBackground>
      </View>
      <Banner />
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
    flex: 0.75,
    backgroundColor: "rgba(255,255,255,0.8)",
    marginHorizontal: 50,
    justifyContent: "space-evenly",
  },
  nash: {
    fontSize: 32,
    marginHorizontal: 20,
    fontWeight: "700",
    textAlign: "center",
  },
  criticalCareContainer: {
    borderBottomColor: "black",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginHorizontal: 20,
  },
  splashText: {
    textAlign: "center",
    fontSize: 18,
    marginHorizontal: 15,
    fontWeight: "500",
  },
  riskContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  risk: {
    marginVertical: 25,
    backgroundColor: "white",
    width: 250,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    height: 75,
  },
  riskText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#faa61a",
    textAlign: "center",
    marginVertical: 10,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
  },
  criticalCareText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
    marginVertical: 10,
    color: "#faa61a",
  },
});
