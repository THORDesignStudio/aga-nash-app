import React from 'react'
import Button from '../primitives/button'
import styled from 'styled-components'

const Container = styled.View`
  marginBottom: 10;
`

export default function BackButton ({navigation}) {

  return(
    <Container>
      <Button buttonText='BACK' buttonBgClr='#E49917' onPress={() => navigation.goBack()} textClr='white' borderWidth={.05}  />
    </Container>
  )
}