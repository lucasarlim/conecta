import React from 'react'
import { Image, Navbar, NavLink, OptionsMenu} from './style'
import logo from './../../assets/brand/blackLogo.png';
import { PrimaryButton } from '../PrimaryButton';

export function NavMenu(){
  return(
    <Navbar className="navbar navbar-light">
      
      <Image src={logo} alt="Contect@ - Terapia Online"/>
   
      <OptionsMenu>  
        <NavLink to="/">Home</NavLink>
        <NavLink to="/sobre">Sobre nós</NavLink>
        <NavLink to="/contato">Contato</NavLink>
      </OptionsMenu>

      <PrimaryButton label="Cadastre-se"/>
    </Navbar>
  )
}