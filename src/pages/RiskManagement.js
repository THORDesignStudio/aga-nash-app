import React, { useContext, useState, useEffect } from "react";
import Footer from "../components/global/footer";
import BackNext from "../components/global/nextBackButtons";
import AbbreviationsFootnotes from "../components/global/abbreviationsFootnotes";
import ScrollableView from "../components/primitives/scrollableContainer";
import LowRiskMng from "../components/content/riskManagement/LowRisk";
import IndeterminateRiskManagement from "../components/content/riskManagement/IndeterminateRisk";
import HighRiskManagement from "../components/content/riskManagement/HighRisk";
import { ApplicationContext } from "../applicationProvider/applicationProvider";

export default function RiskManagement({ navigation }) {
  const { fib4, setPageId, age } = useContext(ApplicationContext);
  const [riskMng, setRiskMng] = useState(<></>);

  useEffect(() => {
    navigation.addListener("focus", () => {
      /**
       * NOTE: React native seems to compile if else statments strangely. In this case, you must have the Low Risk case and High Risk cases first (the two extremes).
       *       This can then be followed by the catch all case. Not sure why it acts this way. When you don't have it in this format, when you hit the High Risk Management handler, it'll render
       *       the page meant for Indeterminate Risk.
       * */

      if (fib4 < 1.3 || (fib4 < 2 && age >= 65)) {
        setPageId("LowRiskMng");
        setRiskMng(<LowRiskMng />);
      } else if (fib4 > 2.67) {
        setPageId("HighRiskMng");
        setRiskMng(<HighRiskManagement />);
      } else if (1.3 < fib4 < 2.67 || (age >= 65 && 2 < fib4 < 2.67)) {
        setPageId("IndeterminateRiskMng");
        setRiskMng(<IndeterminateRiskManagement />);
      }
    });
  }, [navigation, fib4]);


  return (
    <>
      <ScrollableView>{riskMng}</ScrollableView>
      <BackNext
        navigation={navigation}
        marginVertical="0px"
        paddingVertical="20px"
        nextPage="Navigate"
        backgroundColor="#F1F6F8"
      />
      <AbbreviationsFootnotes navigation={navigation} />
      <Footer navigation={navigation} />
    </>
  );
}