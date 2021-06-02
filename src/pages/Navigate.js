import React from "react";
import GoldenTitle from "../components/global/goldenTitle";
import Banner from "../components/global/banner";
import Footer from "../components/global/footer";
import ScrollableView from "../components/global/scrollableContainer";
import Button from '../components/primitives/button'

export default function Navigate({ navigation }) {
  return (
    <>
      <GoldenTitle>
        <Button buttonText='START FROM BEGINNING' textClr='#FAA719' textWidth='75%' buttonHeight={60} />
      </GoldenTitle>
      <ScrollableView></ScrollableView>
      <Banner />
      <Footer navigation={navigation} />
    </>
  );
}
