import React from 'react'
import styled from 'styled-components/native'

/**
 * This container is used only to wrap around the content for Abbreviations and Footnotes. It formats the
 * layout properly for you.
 */

const Content = styled.Text`
  fontSize: 16px;
  marginHorizontal: 20px;
  marginBottom: 20px;
`

export default function ContentContainer ({children}){


  return(
    <Content>
      {children}
    </Content>
  )
}