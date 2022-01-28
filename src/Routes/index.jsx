import React from 'react'
import { Routes as Switch, Route } from 'react-router-dom';
import { Home } from '../pages/Home'

export function Routes(){
  return (
    <Switch>
        <Route path='/' exact components={Home}/>
    </Switch>
  )
}