import React, { useContext, useEffect, useState } from "react";
import Footer from "../components/global/footer";
import AbbreviationsFootnotes from "../components/global/abbreviationsFootnotes";
import NextBack from "../components/global/nextBackButtons";
import PageContainer from "../components/primitives/container";
import { useFonts } from "expo-font";
import LowRiskContent from "../components/content/results/LowRisk";
import { ApplicationContext } from "../applicationProvider/applicationProvider";
import { Text } from "react-native";

export default function Results({ navigation }) {
  const { fib4, setPageId, alt } = useContext(ApplicationContext);
  const [ resultContent, setResultContent] = useState(<></>)

  useEffect(() => {
    navigation.addListener("focus", () => {
      if (fib4 < 1.3) {
        setPageId("ResultLow");
        setResultContent(<LowRiskContent />)
      } else if (1.3 < fib4 < 2.67) {
        setPageId("ResultIndeterminat");
        setResultContent (<Text>Indeterminate</Text>);
      } else if (fib4 > 2.67) {
        setPageId("ResultHigh");
        setResultContent(<Text>High</Text>);
      }
    });
  }, [navigation, fib4]);

  let [fontsLoaded] = useFonts({
    "NunitoSans-Bold": require("../assets/fonts/NunitoSans-Bold.ttf"),
    "NunitoSans-Regular": require("../assets/fonts/NunitoSans-Regular.ttf"),
  });

  return (
    <>
      <PageContainer justifyContent="flex-start" marginTop={40} flex={1}>
        {resultContent}
      </PageContainer>
      <NextBack navigation={navigation} nextPage="RiskManagement" marginVertical={10} />
      <AbbreviationsFootnotes navigation={navigation} />
      <Footer navigation={navigation} />
    </>
  );
}
