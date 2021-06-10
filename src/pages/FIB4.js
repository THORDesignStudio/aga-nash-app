import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Input from "../components/primitives/input";
import Footer from "../components/global/footer";
import NextBack from "../components/global/nextBackButtons";
import PageContainer from "../components/primitives/container";
import PageTitle from "../components/global/pageTitle";
import AbbreviationsFootnotes from "../components/global/abbreviationsFootnotes";
import TitleContainer from "../components/global/titleContainer";
import { ApplicationContext } from "../applicationProvider/applicationProvider";


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
  justifyContent: space-evenly;
  alignItems: center;
`;

export default function Fib4({ navigation }) {
  const { setPageId, setFib4 } = useContext(ApplicationContext);
  setPageId("FIB4");

  const [age, setAge] = useState();
  const [alt, setAlt] = useState();
  const [ast, setAst] = useState();
  const [plt, setPlt] = useState();
  const [disabled, setDisabled] = useState(true)
  const [nextPage, setNextPage] = useState()


  useEffect(() => {  
    setFib4((age * ast) / (plt * Math.sqrt(alt)));

    if(age && ast && alt && plt){
      setDisabled(false)
    } else{
      setDisabled(true)
    }

    if(!disabled){
      setNextPage("ResultLow")
    } else(
      setNextPage('')
    )
  }, [age, alt, ast, plt, disabled]);


  


  return (
    <>
      <PageContainer justifyContent="flex-start">
        <TitleContainer paddingBottom={30}>
          <PageTitle
            pageTitle="Enter the following lab results for Non Invasive Testing (NIT) for fibrosis"
            fontSize={10}
          />
        </TitleContainer>
        <CalcContainer>
          <Input text="Age" onChangeText={(text) => setAge(parseInt(text))} placeholder='Required' />
          <Input text="ALT" onChangeText={(text) => setAlt(parseInt(text))} placeholder='Required'/>
          <Input text="AST" onChangeText={(text) => setAst(parseInt(text))} placeholder='Required'/>
          <Input text="PLT" onChangeText={(text) => setPlt(parseInt(text))} placeholder='Required'/>
        </CalcContainer>
      </PageContainer>
      <NextBack navigation={navigation} nextPage={nextPage} />
      <AbbreviationsFootnotes navigation={navigation} />
      <Footer navigation={navigation} />
    </>
  );
}
