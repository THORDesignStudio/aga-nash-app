import React from "react";
import PageTitle from "../components/global/pageTitle";
import styled from 'styled-components'

const TitleContainer = styled.View`
  flex: 1;
  paddingTop: 40;
  paddingHorizontal: 40;
`

export default function Footnotes() {
  return (
    <>
    <TitleContainer>
      <PageTitle pageTitle="FOOTNOTES" />
    </TitleContainer>
    </>
  );
}
