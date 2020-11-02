import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Login from './Components/Login/Login'
import ThemeContext from './Contexts/ThemeContext'

export default function App() {
  return (
    <ThemeContext>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
        </Switch>
      </Router>
    </ThemeContext>
  )
}
