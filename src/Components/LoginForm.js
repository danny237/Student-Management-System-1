import React, { useState, useContext } from 'react'
import InputField from '../Components/InputField';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import Button from '@material-ui/core/Button';
import style from '../Themes/LoginStyle.module.css'
import { DarkContext } from '../App'
import isAuthenticate from '../Auth/isAuthenticate'

export default function LoginForm() {

    const [darkMode] = useContext(DarkContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = () => {
        
        const user = {
          username,
          password
        }
    
        if ((username !== "") && (password !== "")){
            if (isAuthenticate(user)){
                console.log("authenticated")
              }else{
                console.log("not authenticated")
              }
            }
        }

    return (
        <div>
            <div className={`${style.form} ${darkMode ? style.formLight : ''}`}>

                {/* heading */}
                <div>
                    <h2>Login</h2>
                </div>

                {/* inputfield */}
                <InputField
                    type="text"
                    placeholder="Username"
                    onChange={setUsername}
                />
                <InputField
                    type="password"
                    placeholder="Password"
                    onChange={setPassword}
                />
                <Button onClick={() => submitHandler()}>
                    <div className={`${style.doubleArrow} ${darkMode ? style.doubleArrowLight : ''}`} >
                        <DoubleArrowIcon />
                    </div>
                </Button>
            </div>
        </div>
    )
}
