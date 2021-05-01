import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import NextIcon from "../../assets/images/nextIcon";
import BackIcon from "../../assets/images/backIcon";

export default function NextBack({ nextOnpress, backOnpress }) {
  return (
    <>
      <View style={styles.nextBackContainer}>
        <View style={styles.backContainer}>
          <Text style={styles.backText}>Back</Text>
          <TouchableOpacity onPress={backOnpress}>
            <BackIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.nextContainer}>
          <TouchableOpacity onPress={nextOnpress}>
            <NextIcon />
          </TouchableOpacity>
          <Text style={styles.nextText}>Next</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  nextBackContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 50,
  },
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
  backText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#faa61a",
    paddingHorizontal: 10,
  },
  nextText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#faa61a",
    paddingHorizontal: 10,
    marginStart: -95,
  },
});
