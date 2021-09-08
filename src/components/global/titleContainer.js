import React from "react";
import styled from 'styled-components/native'


/**
 * Container to set the right layout for plain titles on pages.
 * 
 * @param {number} paddingBottom - additional space given to the title container as needed
 */

const Title = styled.View`
  backgroundColor: ${(props) => props.backgroundColor || 'transparent'};  
  marginBottom: ${(props) => props.marginBottom || '0px'};
  paddingTop: 50px;
  paddingHorizontal: 20px;
  paddingBottom: ${(props) => props.paddingBottom || '0px'};
`

export default function TitleContainer({
  backgroundColor,
  children, 
  paddingBottom, 
  marginBottom
}) {

  return (
    <Title 
      backgroundColor={backgroundColor}
      paddingBottom={paddingBottom} 
      marginBottom={marginBottom}
    >
      {children}
    </Title>
  );

}
