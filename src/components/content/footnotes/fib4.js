import React from "react";
import ContentContainer from "../../global/contentContainer";

export default function Fib4Footnotes() {
  return (
    <>
      <ContentContainer>
        {`\u00B9 For patients 65+, use FIB-4 < 2.0 as the lower cutoff. Higher cutoff does not change. `}
      </ContentContainer>
      <ContentContainer>
        {`\u00B2 Other NITs derived from routine laboratories can be used instead of FIB-4, such as the NAFLD fibrosis score (NFS) and AST to platelet ratio index (APRI). `}
      </ContentContainer>
      <ContentContainer>
        {`\u00B3 Many online FIB-4 calculators are available such as the MDCalc FIB-4 Index for Liver Fibrosis. `}
      </ContentContainer>
    </>
  );
}
