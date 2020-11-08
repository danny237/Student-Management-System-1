import React, { useState, useContext } from 'react';
import InputField from '../Components/InputField';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import Button from '@material-ui/core/Button';
import style from '../Themes/LoginStyle.module.css';
import { DarkContext, LoginContext } from '../App';
import isAuthenticate from '../Auth/isAuthenticate';

// toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginForm() {

    const [loginStatus, setLoginStatus] = useContext(LoginContext)
    const [darkMode] = useContext(DarkContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const invalid = () => toast("Invalid Credential");
    const empty =() => toast("Please Enter Username and Password.");

    const submitHandler = () => {
        
        const user = {
          username,
          password
        }
    
        if ((username !== "") && (password !== "")){
            if (isAuthenticate(user)){
                setLoginStatus(true);
              }else{
                invalid()
              }
            }else{
                empty()
            }
        }

    return (
        <React.Fragment>
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
                
                {/* toastify */}
                <ToastContainer />

        </div>
        </React.Fragment>
    )
}
