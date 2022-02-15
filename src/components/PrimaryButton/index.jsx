import React from 'react'
import { Container, Label } from './style'

export function PrimaryButton({label}){
  return(
    <Container href="#message">
      <Label>{label}</Label>
    </Container>
  )
}