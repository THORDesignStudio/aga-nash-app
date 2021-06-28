import React from "react";
import ContentContainer from "../../global/contentContainer";

export default function LSMFootnotes() {
  return (
    <>
      <ContentContainer>
        1 Ultrasound acceptable if VCTE is not available. Consider referral to
        hepatologist for patients with hepatic steatosis on ultrasound who are
        indeterminate or high risk based on FIB-4.
      </ContentContainer>
      <ContentContainer>
        2 LSM values are for vibration controlled transient elastography
        (FibroScan®). Other techniques such as bidimensional shear wave
        elastography or point shear wave elastography can also be use used to
        measure LSM.
      </ContentContainer>
      <ContentContainer>
        3 Proprietary commercially available blood NITs may be considered for
        patients considered indeterminate or high risk based on FIB-4, NFS or
        APRI, or where LSM unavailable.
      </ContentContainer>
      <ContentContainer>
        4 Eddowes et al. uses 8.2 and 12.1 kPa as cutoffs for LSM. Validation of
        simple (rounded) cutoffs reported by Papatheodoridi et al. J Hepatol
        2020.
      </ContentContainer>
    </>
  );
}
