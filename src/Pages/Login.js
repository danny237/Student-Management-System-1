import React, { useContext, useState } from 'react'
import style from '../Themes/LoginStyle.module.css'
import { DarkContext} from '../App';
import LoginForm from '../Forms/LoginForm'
import Switcher from '../Components/Switcher'
import { MORNING,AFTERNOON,EVENING } from '../Constants/Greetings'

export default function Login() {
  const [darkMode] = useContext(DarkContext)
  
  function getGreetingMsg(){
    let currentHour = new Date().getHours()
    if (currentHour < 12){
      return MORNING;
    }else if(currentHour < 17){
      return AFTERNOON;
    }else{
      return EVENING
    }
  }
  
  return (
    // full page
    <div className={`${style.login} ${darkMode ? style.ligntTheme : style.darkTheme}`}>

      {/* container */}
      <div className={`${style.loginContainer} ${ darkMode ? style.lightTheme : style.darkTheme}`}>

        {/* NCIT */}
        <div className={`${style.ncit} ${darkMode ? style.ncitDark  : style.ncit}`}>
          <h1>NCIT</h1>
        </div>

        {/* login info */}
        <div className={style.loginInfo}>
          
          {/* title */}
          <div className={style.loginInfoTitle}>
            <h3>NCIT</h3>
          </div>

          {/* Greeting */}
          <div>
            <div className={style.loginInfoGreeting}>
            <h1>Welcome</h1>
            <h3>{getGreetingMsg()}</h3>
            </div>
          </div>

          {/* Terms and condition */}
          <div className={style.uppercase}>
            <p>terms of use contracditions</p>
          </div>
        </div>

        {/* login form */}
        <div className={style.loginForm}>

          {/* switcher */}
          <Switcher />

          {/* form */}
          <LoginForm />

          {/* Link */}
          <div className={`${style.uppercase} ${style.link} ${darkMode ? style.linkLight : ''} `}>
            back to website
          </div>

        </div>
      </div>
    </div>
  )
}
