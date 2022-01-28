import React from 'react'
import { Container, Label } from './style'

export function PrimaryButton({label}){
  return(
    <Container>
      <Label>{label}</Label>
    </Container>
  )
}