import React, { useContext } from "react";
import PageTitle from "../components/global/pageTitle";
import { ApplicationContext } from "../applicationProvider/applicationProvider";
import ScrollableView from "../components/primitives/scrollableContainer";
import TitleContainer from "../components/global/titleContainer";
import BackButton from "../components/global/backButton";
import Footer from "../components/global/footer";
import ConditionContent from "../components/content/footnotes/conditions";
import Fib4Content from "../components/content/footnotes/fib4";
import LowRisk from "../components/content/footnotes/lowRisk";
import OtherDiseases from "../components/content/footnotes/otherDiseases";
import LowRiskMng from '../components/content/footnotes/lowRiskMng'
import { useFonts } from "expo-font";

/**
 * Footnotes
 *
 * This page is set up to be reusable across the app. It would suck to have to create a new page for every
 * set of footnotes.
 *
 * The way this works:
 * When every page in a path renders, I assign a unique @param pageId to it. This is used in turn on the switch statement below.
 * Depending on the pageId, we render different content, which we get from the content folder in assets. Pretty simple concept.
 */

export default function Footnotes({ navigation }) {
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
      content = <LowRiskMng />
      break;

  }

  return (
    <>
      <TitleContainer>
        <PageTitle pageTitle="FOOTNOTES" />
      </TitleContainer>
      <ScrollableView>{content}</ScrollableView>
      <BackButton navigation={navigation} />
      <Footer navigation={navigation} />
    </>
  );
}
