import React from 'react'
import {
  Route,
  BrowserRouter,
  Routes as RoutesContainer,
} from 'react-router-dom';

import { Contato } from '../pages/Contato';
import { Home } from '../pages/Home';
import { Sobre } from '../pages/Sobre';

export function Routes(){
  return (
    <BrowserRouter>
      <RoutesContainer>
        <Route element={<Home />} exact path="/" />
        <Route element={<Contato />} path="/contato"/>
        <Route element={<Sobre />} path="/sobre"/>
      </RoutesContainer>
    </BrowserRouter>
  )
}