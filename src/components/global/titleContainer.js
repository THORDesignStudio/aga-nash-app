import React from "react";
import styled from 'styled-components/native'


/**
 * Container to set the right layout for plain titles on pages.
 * 
 * @param {number} paddingBottom - additional space given to the title container as needed
 */

const Title = styled.View`
  paddingTop: 50px;
  paddingHorizontal: 20px;
  paddingBottom: ${(props) => props.paddingBottom || 0};
  marginBottom: ${(props) => props.marginBottom || 0}
`

export default function TitleContainer({children, paddingBottom, marginBottom}) {

  return (
    <Title paddingBottom={paddingBottom} marginBottom={marginBottom}>
      {children}
    </Title>
  );

}
