import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components/native";
import Input from "../components/primitives/input";
import Footer from "../components/global/footer";
import NextBack from "../components/global/nextBackButtons";
import { ScrollView } from "react-native";
import PageTitle from "../components/global/pageTitle";
import AbbreviationsFootnotes from "../components/global/abbreviationsFootnotes";
import TitleContainer from "../components/global/titleContainer";
import { ApplicationContext } from "../applicationProvider/applicationProvider";
import TextBasic from "../components/global/textBasic";

/**
 * FIB4
 *
 * The brains of the operation here. I'm using various state variables to continually calculate the FIB4 calculation of the user.
 * I use the useEffect to constantly monitor the input of the user and make the calculations as they go. Then when all the required inputs
 * have been made we use another state variable, disabled, to enable the next button on the page. Until all the required fields have been filled out
 * the button won't navigate anywhere for the user.
 */

const CalcContainer = styled.View`
  flex: 1;
  marginVertical: 20px;
  alignItems: center;
`;

const TextContainer = styled.View`
  marginHorizontal: 20px;
  marginVertical: 10px;
`

export default function Fib4({ navigation }) {
  const { setPageId, setFib4, alt, setAlt, age, setAge } =
    useContext(ApplicationContext);

  useEffect(() => {
    navigation.addListener("focus", () => {
      setPageId("FIB4");
    });
  }, [navigation]);

  const [ast, setAst] = useState();
  const [plt, setPlt] = useState();
  const [disabled, setDisabled] = useState(true);
  const [nextPage, setNextPage] = useState();

  useEffect(() => {
    setFib4((age * ast) / (plt * Math.sqrt(alt)));

    if (age && ast && alt && plt) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }

    if (!disabled) {
      setNextPage("Results");
    } else setNextPage("");

  }, [age, alt, ast, plt, disabled]);
  

  return (
    <>
      <ScrollView
        contentContainerStyle={{ justifyContent: "space-evenly" }}
        persistentScrollbar={true}
      >
        <TitleContainer paddingBottom={0}>
          <PageTitle
            pageTitle="Enter the following lab results for Non Invasive Testing (NIT) for fibrosis"
            fontSize="20px"
          />
        </TitleContainer>

        <CalcContainer>
          <Input
            text="*Age"
            onChangeText={(text) => setAge(parseInt(text))}
            placeholder=""
            keyboardType="decimal-pad"
            hasUnit={ true }
            unit="Years"
          />
          <Input
            text="*ALT"
            onChangeText={(text) => setAlt(parseInt(text))}
            placeholder="(Norm: 1-35)"
            keyboardType="decimal-pad"
            hasUnit={ true }
            unit="U/L"
          />
          <Input
            text="*AST"
            onChangeText={(text) => setAst(parseInt(text))}
            placeholder="(Norm: 15-41)"
            keyboardType="decimal-pad"
            hasUnit={ true }
            unit="U/L"
          />
          <Input
            text="*PLT"
            onChangeText={(text) => setPlt(parseInt(text))}
            placeholder="(Norm: 150-350)"
            keyboardType="decimal-pad"
            hasUnit={ true }
            unit="10^9/L"
          />
        </CalcContainer>
        <TextContainer>
        <TextBasic fontSize={16} textAlign='left'>
          Note: AST and ALT can easily be confused. Please confirm your entries before proceeding.
        </TextBasic>
        </TextContainer>
      </ScrollView>
      <NextBack
        navigation={navigation}
        nextPage={nextPage}
        backPage="Conditions"
        marginVertical='10px'
      />
      <AbbreviationsFootnotes navigation={navigation} />
      <Footer navigation={navigation} />
    </>
  );
}
