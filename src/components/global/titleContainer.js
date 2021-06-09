import React, {useContext} from "react";
import styled from 'styled-components'


/**
 * Container to set the right layout for plain titles on pages.
 * 
 * @param {number} paddingBottom - additional space given to the title container as needed
 */

const Title = styled.View`
  paddingTop: 50;
  paddingHorizontal: 20;
  paddingBottom: ${(props) => props.paddingBottom || 0};
`


export default function TitleContainer({children, paddingBottom}) {


  return (
    <Title paddingBottom={paddingBottom}>
      {children}
    </Title>
  );
}
