import React from "react";
import ContentContainer from "../../global/contentContainer";
import { TouchableOpacity, Linking } from "react-native";

import TextBasic from "../../global/textBasic";

export default function LSMFootnotes() {
  return (
    <>
      <ContentContainer>
        { `\u00B9 Ultrasound acceptable if vibration-controlled transient elastography (VCTE, FibroScan®) is unavailable. Consider referral to hepatologist for patients with hepatic steatosis on ultrasound who are indeterminate or high risk based on FIB-4. ` } 
      </ContentContainer>
      <ContentContainer>
        { `\u00B2 LSM values are for VCTE (FibroScan®). Other techniques such as bidimensional shear wave elastography or point shear wave elastography can also be use used to measure LSM. Proprietary commercially available blood NITs may be considered for patients considered indeterminate or high risk based on FIB-4, NFS or APRI, or where LSM unavailable. ` } 
      </ContentContainer>
      <ContentContainer>
        { `\u00B3` } 
        <TouchableOpacity onPress={() => Linking.openURL('https://www.gastrojournal.org/article/S0016-5085(19)30105-2/fulltext')}>
          <TextBasic fontColor="#69badf">
            Eddowes et al.
          </TextBasic>
        </TouchableOpacity>
        used 8.2 and 12.1 kPa as cutoffs for LSM using VCTE. Validation of simple (rounded) cutoffs reported by 
        <TouchableOpacity onPress={() => Linking.openURL('https://www.journal-of-hepatology.eu/article/S0168-8278(20)33838-1/fulltext')}>
          <TextBasic fontColor="#69badf">
            Papatheodoridi et al.
          </TextBasic>
        </TouchableOpacity>        
      </ContentContainer>
    </>
  );
}

