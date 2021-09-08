import React, { useContext, useEffect, useState } from "react";

import { ApplicationContext } from "../applicationProvider/applicationProvider";

import Footer from "../components/global/footer";
import AbbreviationsFootnotes from "../components/global/abbreviationsFootnotes";
import NextBack from "../components/global/nextBackButtons";
import Container from "../components/primitives/container";
import LowRiskContent from "../components/content/results/LowRisk";
import IndeterminateRiskContent from "../components/content/results/IndeterminateRisk";
import HighRiskContent from "../components/content/results/HighRisk";


export default function Results({ navigation }) {
  const { fib4, setPageId, alt, age } = useContext(ApplicationContext);
  const [resultContent, setResultContent] = useState(<></>);
  const [nextPage, setNextPage] = useState("");

  function LowResult() {
    setPageId("ResultLow");
    setResultContent(<LowRiskContent />);
    if (alt >= 40) {
      setNextPage("OtherDiseases");
    } else {
      setNextPage("RiskManagement");
    }
  }

  function IndeterminateResult() {
    setPageId("ResultIndeterminate");
    setResultContent(<IndeterminateRiskContent />);
    if (alt >= 40) {
      setNextPage("OtherDiseases");
    } else {
      setNextPage("LSM");
    }
  }

  /**
   * NOTE: React native seems to compile if else statements strangely. 
   *       In this case, you must have the Low Risk case and High Risk cases first (the two extremes).
   *       This can then be followed by the catch all case. Not sure why it acts this way. 
   *       When you don't have it in this format and hit the High Risk Management handler, 
   *       it'll render the page meant for Indeterminate Risk.
   */
  useEffect(() => {
    /**
     * NOTE: React native seems to compile if else statments strangely. In this case, you must have the Low Risk case and High Risk cases first (the two extremes).
     *       This can then be followed by the catch all case. Not sure why it acts this way. When you don't have it in this format, when you hit the High Risk Management handler, it'll render
     *       the page meant for Indeterminate Risk.
     * */
    navigation.addListener("focus", () => {
      if (fib4 < 1.3 && age <= 65) {
        LowResult();
      } else if (fib4 < 2 && age >= 65) {
        LowResult();
      } else if (fib4 > 2.67) {
        setPageId("ResultHigh");
        setResultContent(<HighRiskContent />);
        if (alt >= 40) {
          setNextPage("OtherDiseases");
        } else {
          setNextPage("RiskManagement");
        }
      } else if (age <= 65 && 1.3 < fib4 < 2.67) {
        IndeterminateResult();
      } else if (age >= 65 && 2 < fib4 < 2.67) {
        IndeterminateResult();
      }
    });
  }, [navigation, fib4]);

  return (
    <>
      <Container 
        backgroundColor="#fff"
        flex={1}
        justifyContent="center" 
        marginTop={40}
      >
        {resultContent}
      </Container>
      <NextBack
        navigation={navigation}
        nextPage={nextPage}
        marginVertical="0px"
        paddingVertical="20px"
        backgroundColor="#F1F6F8"
      />
      <AbbreviationsFootnotes navigation={navigation} />
      <Footer navigation={navigation} />
    </>
  );
}
