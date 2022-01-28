import React from 'react'
import { NavMenu } from '../../components/NavMenu'
import { Container, Content, InfoWrapper, Main, Subtitle, Title } from './style'
import image from './../../assets/coffe.png'

export function Home(){
  return(
    <Container>
      <NavMenu />
        <Main>
          <Content>
            <InfoWrapper>
              <Title>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam maecenas non.</Title>
              <Subtitle>In integer nunc tristique risus, bibendum leo turpis enim faucibus. Eu, dictum nulla vitae sed posuere.</Subtitle>
            </InfoWrapper>
            <img src={image} />
          </Content>
        </Main>
    </Container>
  )
}

