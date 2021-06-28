import React from "react";
import ContentContainer from "../../global/contentContainer";

export default function IndeterminateRiskResultsFootnotes() {
  return (
    <>
      <ContentContainer>
        1 FIB-4, a simple non-proprietary fibrosis score is used to stratify
        risk: Age ([yr] x AST [U/L]) / ((PLT [10(9)/L]) x (ALT [U/L])(1/2))
      </ContentContainer>
      <ContentContainer>
        2 Low risk cut point: FIB-4 {"<"}1.3 ({"<"}2.0 for patients 65+)
        excludes advanced fibrosis
      </ContentContainer>
      <ContentContainer>
        3 ALT {">"} 40 indicates risk of other forms of liver disease
      </ContentContainer>
      <ContentContainer>
        4 Excessive alcohol intake {">"} 14 drinks/week for women or {">"} 21
        drinks/week for men
      </ContentContainer>
    </>
  );
}
