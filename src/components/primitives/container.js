import React from 'react'
import styled from 'styled-components'

/**
 * @param flex - space the container takes up on the page
 * @param alignItems - align the content in the container horizontally
 * @param justifyContent - align the content in the container vertically
 * 
 */

const Wrapper = styled.View`
  flex: ${(props) => props.flex || 1};
  alignItems: ${(props) => props.alignItems || "center"} ;
  justifyContent: ${(props) => props.justifyContent || "center"};
`

export default function Container ({children, alignItems, justifyContent, flex}){
  return(
    <Wrapper justifyContent={justifyContent} alignItems={alignItems} flex={flex}> 
      {children}
    </Wrapper>
  )
}