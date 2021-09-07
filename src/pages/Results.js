import React, { useContext, useEffect, useState } from "react";
import Footer from "../components/global/footer";
import AbbreviationsFootnotes from "../components/global/abbreviationsFootnotes";
import NextBack from "../components/global/nextBackButtons";
import PageContainer from "../components/primitives/container";
import LowRiskContent from "../components/content/results/LowRisk";
import IndeterminateRiskContent from "../components/content/results/IndeterminateRisk";
import HighRiskContent from "../components/content/results/HighRisk";
import { ApplicationContext } from "../applicationProvider/applicationProvider";

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

  useEffect(() => {
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
      <PageContainer justifyContent="center" marginTop={40} flex={1}>
        {resultContent}
      </PageContainer>
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
