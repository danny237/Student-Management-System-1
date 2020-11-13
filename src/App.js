import React, { useState, useEffect } from "react";
import Login from './Pages/Login'
import Home from './Pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Application from "./Pages/Application";
import Teachers from './Pages/Teachers';

export const DarkContext = React.createContext()
export const LoginContext = React.createContext()

export default function App() {

  const [loginStatus, setLoginStatus] = useState(getInitialLoginStatus())
  const [darkMode, setDarkMode] = useState(getInitialMode())

  const userDesc = {
    loginStatus,
    darkMode
  }
  
  useEffect(() => {
    localStorage.setItem('userDesc', JSON.stringify(userDesc))
  },[darkMode, loginStatus])

  function getInitialMode(){
    const userInfo = JSON.parse(localStorage.getItem('userDesc'))
    if (userInfo){
      return userInfo.darkMode
    }
    return false
  }

  function getInitialLoginStatus(){
    const userInfo = JSON.parse(localStorage.getItem('userDesc'))
    if (userInfo){
      return userInfo.loginStatus
    }
    return false
  }

  return (
    
    <Router>
      <Switch>
        <DarkContext.Provider value={[darkMode,setDarkMode]}>
          <LoginContext.Provider value={[loginStatus, setLoginStatus]}>

            <Route exact path="/" 
            render = {() => (loginStatus ? <Home /> : <Login />)}
            />

            <Route exact path="/application"
            render = {() => (loginStatus ? <Application /> : <Login />)}
            />

            <Route exact path="/teachers" component={Teachers} />
          </LoginContext.Provider>
        </DarkContext.Provider>
      </Switch>
    </Router>

  );
}
