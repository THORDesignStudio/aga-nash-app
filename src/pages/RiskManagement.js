import React, {useContext, useState, useEffect} from "react";
import Footer from "../components/global/footer";
import BackNext from "../components/global/nextBackButtons";
import AbbreviationsFootnotes from "../components/global/abbreviationsFootnotes";
import ScrollableView from "../components/primitives/scrollableContainer";
import { useFonts } from "expo-font";
import LowRiskMng from '../components/content/riskManagement/LowRisk'
import {ApplicationContext} from '../applicationProvider/applicationProvider'
import {Text} from 'react-native'

export default function RiskManagement({ navigation }) {
  const { fib4, setPageId, alt } = useContext(ApplicationContext);
  const [ riskMng, setRiskMng] = useState(<></>)

  useEffect(() => {
    navigation.addListener("focus", () => {
      if (fib4 < 1.3) {
        setPageId("LowRiskMng");
        setRiskMng(<LowRiskMng />)
      } else if (1.3 < fib4 < 2.67) {
        setPageId("InderterminateRiskMng");
        setRiskMng (<Text>Indeterminate</Text>);
      } else if (fib4 > 2.67) {
        setPageId("HighRiskMng");
        setRiskMng(<Text>High</Text>);
      }
    });
  }, [navigation, fib4]);
  
  let [fontsLoaded] = useFonts({
    "NunitoSans-SemiBold": require("../assets/fonts/NunitoSans-SemiBold.ttf"),
    "NunitoSans-Regular": require("../assets/fonts/NunitoSans-Regular.ttf"),
  });

  return (
    <>
      <ScrollableView>
        {riskMng}
      </ScrollableView>
      <BackNext navigation={navigation} marginVertical={10} nextPage='HomeScreen'/>
      <AbbreviationsFootnotes />
      <Footer navigation={navigation}/>
    </>
  );
}
