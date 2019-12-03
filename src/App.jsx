import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import ResultComponent from './components/ResultComponent'
import KeypadComponent from './components/KeypadComponent'

import HomePage from './pages/HomePage'

const App = () => {
  return (
    <Router>
      <header>
        <h1>Simple Calculater</h1>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
      </Switch>
    </Router>
  )
}

export default App
