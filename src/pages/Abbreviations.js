import React, { useContext } from "react";
import styled from "styled-components/native";
import { ApplicationContext } from "../applicationProvider/applicationProvider";
import ScrollableView from "../components/primitives/scrollableContainer";
import PageTitle from "../components/global/pageTitle";
import Footer from "../components/global/footer";
import BackButton from "../components/global/backButton";
import ConditionContent from "../components/content/abbreviations/conditions";
import Fib4Content from "../components/content/abbreviations/fib4";
import LowRisk from "../components/content/abbreviations/lowRisk";
import OtherDiseases from "../components/content/abbreviations/otherDiseases";
import LowRiskMng from "../components/content/abbreviations/lowRiskMng";
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
      content = <LowRisk />;
      break;
    case "OtherDiseases":
      content = <OtherDiseases />;
      break;
    case "LowRiskMng":
      content = <LowRiskMng />;
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
