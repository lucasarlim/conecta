import React from 'react'
import { Container, Main, OptionsMenu, PageName} from './style'
import logo from './../../assets/brand/blackLogo.png';
import { PrimaryButton } from '../PrimaryButton';

export function NavMenu(){
  return(
    <Container>
      <Main>
        <img src={logo} alt="Contect@ - Terapia Online"/>

        <OptionsMenu>  
          <PageName>Home</PageName>
          <PageName>Sobre nós</PageName>
          <PageName>Contato</PageName>
        </OptionsMenu>

        <PrimaryButton label="Cadastre-se"/>
      </Main>
    </Container>
  )
}