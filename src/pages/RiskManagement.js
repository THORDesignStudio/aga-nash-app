import React from "react";
import Footer from "../components/global/footer";
import BackNext from "../components/global/backButton";
import AbbreviationsFootnotes from "../components/global/abbreviationsFootnotes";
import ScrollableView from "../components/primitives/scrollableContainer";

export default function RiskManagement({navigation}) {
  return (
    <>
      <ScrollableView></ScrollableView>
      <BackNext />
      <AbbreviationsFootnotes />
      <Footer />
    </>
  );
}
