import React, { useContext } from "react";
import styled from "styled-components/native";
import { ApplicationContext } from "../applicationProvider/applicationProvider";
import ScrollableView from "../components/primitives/scrollableContainer";
import PageTitle from "../components/global/pageTitle";
import Footer from "../components/global/footer";
import BackButton from "../components/global/backButton";
import ConditionContent from "../components/content/abbreviations/conditions";
import Fib4Content from "../components/content/abbreviations/fib4";
import LowRiskResult from "../components/content/abbreviations/lowRiskResult";
import IndeterminateRiskResult from "../components/content/abbreviations/indeterminateRiskResult";
import HighRiskResult from "../components/content/abbreviations/highRiskResult"
import OtherDiseases from "../components/content/abbreviations/otherDiseases";
import LowRiskMng from "../components/content/abbreviations/lowRiskMng";
import IndeterminateRiskMng from "../components/content/abbreviations/indeterminateRiskMng";
import HighRiskMng from '../components/content/abbreviations/highRiskMng'
import LSM from "../components/content/abbreviations/lsm";
import { useFonts } from "expo-font";

/**
 * Abbreviation
 *
 * This works the same way footnotes does.
 *
 * This page is set up to be reusable across the app. It would suck to have to create a new page for every
 * set of Abbreviations.
 *
 * The way this works:
 * When every page in a path renders, I assign a unique @param pageId to it. This is used in turn on the switch statement below.
 * Depending on the pageId, we render different content. Pretty simple concept.
 */

const TitleContainer = styled.View`
  flex: 0.1;
  paddingTop: 50;
  paddingHorizontal: 20;
`;

export default function Abbreviations({ navigation }) {
  const { pageId } = useContext(ApplicationContext);

  let [fontsLoaded] = useFonts({
    "NunitoSans-Bold": require("../assets/fonts/NunitoSans-Bold.ttf"),
    "NunitoSans-Regular": require("../assets/fonts/NunitoSans-Regular.ttf"),
  });

  let content;

  switch (pageId) {
    case "Conditions":
      content = <ConditionContent />;
      break;
    case "FIB4":
      content = <Fib4Content />;
      break;
    case "ResultLow":
      content = <LowRiskResult />;
      break;
    case "OtherDiseases":
      content = <OtherDiseases />;
      break;
    case "LowRiskMng":
      content = <LowRiskMng />;
      break;
    case "ResultIndeterminate":
      content = <IndeterminateRiskResult />;
      break;
    case "IndeterminateRiskMng":
      content = <IndeterminateRiskMng />;
      break;
    case "LSM":
      content = <LSM />;
    case "ResultHigh":
      content = <HighRiskResult />
      break;
    case 'HighRiskMng':
      content = <HighRiskMng />
      break;
  }

  return (
    <>
      <TitleContainer>
        <PageTitle pageTitle="ABBREVIATIONS" />
      </TitleContainer>
      <ScrollableView>{content}</ScrollableView>
      <BackButton navigation={navigation} />
      <Footer navigation={navigation} />
    </>
  );
}
