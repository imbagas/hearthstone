import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Card from './Card'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/card' component={Card}/>
    </Switch>
  </main>
)

export default Main
