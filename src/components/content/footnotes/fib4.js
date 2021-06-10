import React from "react";
import ContentContainer from "../../global/contentContainer";

export default function ConditionsFootnotes() {
  return (
    <>
      <ContentContainer>
        1 Other non-invasive tests (NITs) derived from routine laboratories can
        be used instead of FIB-4, such as the NAFLD fibrosis score (NFS) and AST
        to platelet ratio index (APRI).
      </ContentContainer>
      <ContentContainer>
        2 FIB-4, a simple non-proprietary fibrosis score is used to stratify
        risk: Age ([yr] x AST [U/L]) / ((PLT [10(9)/L]) x (ALT [U/L])(1/2))
      </ContentContainer>
      <ContentContainer>
        3 Excessive alcohol intake {'>'} 14 drinks/week for women or {'>'} 21
        drinks/week for men
      </ContentContainer>
    </>
  );
}
