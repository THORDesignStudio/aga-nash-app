import React, { useContext } from "react";
import PageTitle from "../components/global/pageTitle";
import { ApplicationContext } from "../applicationProvider/applicationProvider";
import ScrollableView from "../components/primitives/scrollableContainer";
import TitleContainer from "../components/global/titleContainer";
import BackButton from "../components/global/backButton";
import Footer from "../components/global/footer";
import ConditionContent from "../components/content/footnotes/conditions";
import Fib4Content from "../components/content/footnotes/fib4";
import LowRiskResult from "../components/content/footnotes/lowRiskResult";
import IndeterminateRiskResult from '../components/content/footnotes/indeterminateRiskResult'
import HighRiskResult from '../components/content/footnotes/highRiskResult'
import OtherDiseases from "../components/content/footnotes/otherDiseases";
import LowRiskMng from '../components/content/footnotes/lowRiskMng'
import IndeterminateRiskMng from '../components/content/footnotes/indeterminateRiskMng'
import HighRiskMng from '../components/content/footnotes/highRiskMng'
import LSM from '../components/content/footnotes/lsm'

/**
 * <Footnotes>
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
      content = <LowRiskMng />
      break;
    case "ResultIndeterminate":
      content = <IndeterminateRiskResult />
      break;
    case 'IndeterminateRiskMng':
      content = <IndeterminateRiskMng />
      break;
    case 'LSM':
      content = <LSM />
    case "ResultHigh":
      content = <HighRiskResult />
      break;
    case 'HighRiskMng':
      content = <HighRiskMng />
      break;
  }

  return (
    <>
      <TitleContainer marginBottom="20px">
        <PageTitle pageTitle="FOOTNOTES" color='#122033'/>
      </TitleContainer>
      <ScrollableView>{content}</ScrollableView>
      <BackButton navigation={navigation} />
      <Footer navigation={navigation} />
    </>
  );
}
