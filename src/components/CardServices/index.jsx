import React from 'react';
import { Container, Image, ImageWrapper, Label } from './style';

export function CardServices({label, image}){
  return(
    <Container>
      <ImageWrapper>
        {<Image src={image}/>}
      </ImageWrapper>
      <Label>{label}</Label>
    </Container>
  )
}