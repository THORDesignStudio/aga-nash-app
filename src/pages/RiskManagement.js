import React, {useContext, useState, useEffect} from "react";
import Footer from "../components/global/footer";
import BackNext from "../components/global/nextBackButtons";
import AbbreviationsFootnotes from "../components/global/abbreviationsFootnotes";
import ScrollableView from "../components/primitives/scrollableContainer";
import { useFonts } from "expo-font";
import LowRiskMng from '../components/content/riskManagement/LowRisk'
import IndeterminateRiskManagement from "../components/content/riskManagement/IndeterminateRisk";
import HighRiskManagement from '../components/content/riskManagement/HighRisk'
import {ApplicationContext} from '../applicationProvider/applicationProvider'

export default function RiskManagement({ navigation }) {
  const { fib4, setPageId, alt } = useContext(ApplicationContext);
  const [ riskMng, setRiskMng] = useState(<></>)

  useEffect(() => {
    navigation.addListener("focus", () => {
      if (fib4 < 1.3) {
        setPageId("LowRiskMng");
        setRiskMng(<LowRiskMng />)
      } else if (fib4 > 2.67) {
        setPageId("HighRiskMng");
        setRiskMng(<HighRiskManagement />);
      }else {
        setPageId("IndeterminateRiskMng");
        setRiskMng (<IndeterminateRiskManagement />);
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
      <BackNext navigation={navigation} marginVertical={10} nextPage='Navigate'/>
      <AbbreviationsFootnotes navigation={navigation}/>
      <Footer navigation={navigation}/>
    </>
  );
}
