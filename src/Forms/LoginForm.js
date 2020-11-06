import React, { useState, useContext } from 'react'
import style from '../Themes/LoginStyle.module.css'
import Switch from '@material-ui/core/Switch';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import InputField from '../Components/InputField';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import Button from '@material-ui/core/Button';
import { DarkContext } from '../App';

export default function LoginForm() {

  const [email, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [darkMode,setDarkMode] = useContext(DarkContext)

  const toggleBtn = () => {
    setDarkMode((s) => !s)
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
            <h3>Good Afternoon !</h3>
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
          <div className={`${style.switch} ${darkMode ? style.switchLight : ''}`}>
            <div>
            <Brightness7Icon />
              
            </div>
              <div className={style.togglebtn}>
              <Switch
                onClick={() => toggleBtn()}
                defaultChecked={false}
                color="primary"
                inputProps={{ 'aria-label': 'checkbox with default color' }}
              />
              </div>
            <div>
            <NightsStayIcon />
            </div>
          </div>

          {/* form */}
          <div className={`${style.form} ${darkMode ? style.formLight: ''}`}>

            {/* heading */}
            <div>
              <h2>Login</h2>
            </div>

            {/* inputfield */}
            <InputField
            type="text"
            placeholder="Username"
            onChange={() => setUsername}
            />
            <InputField
            type="password"
            placeholder="Password"
            onChange={() => setPassword}
            />
            <Button>
            <div className={`${style.doubleArrow} ${darkMode ? style.doubleArrowLight : ''}`} >
                <DoubleArrowIcon />  
            </div>
            </Button>
          </div>

          {/* Link */}
          <div className={`${style.uppercase} ${style.link} ${darkMode ? style.linkLight : ''} `}>
            back to website
          </div>

        </div>
      </div>
    </div>
  )
}
