import React, { useState } from 'react'
import InputField from '../Components/InputField'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import style from '../Themes/LoginStyle.module.css'
import NightsStayIcon from '@material-ui/icons/NightsStay';
import Brightness7Icon from '@material-ui/icons/Brightness7';
export default function LoginForm() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isNightMode, setNightMode] = useState(false)

    const toggleHandler = () =>{
        if (isNightMode){
            setNightMode(false)
        }else{
            setNightMode(true)
        }
    }

    return (
        <div className={isNightMode ? style.night_body : style.body}>
            <div className={style.container}>
            
            {/* left section */}
            <div className={style.left_section}>
                <div className={style.center}>
                    <h2>NCIT</h2>
                    <div className={style.vertical_center}>
                        <h1>Welcome,</h1>
                        <p>Good Afternoon</p>
                    </div>
                    <p>TERMS OF USE & CONTRACDICTIONS</p>
                    
                </div>
            </div>

            <div className={style.ncit}>
                <h1>NCIT</h1>
                
            </div>
            {/* toggle button */}
            <div className={style.toggle}>
                <input type="checkbox" id="checkbox" className={style.checkbox}/>
                <NightsStayIcon className={style.icon}/>
                    <label htmlFor="checkbox">
                    <div className={style.togglebtn}>
                        <div
                        onClick={() => toggleHandler()}
                        className={(isNightMode ? style.circle_right : style.circle)}></div>
                    </div>
                    </label>
                <Brightness7Icon className={style.icon}/>
            </div>


            {/* login-form */}
                <div className={style.form}>
                    <label htmlFor="username">Login</label>
                    <InputField
                        id="username"
                        placeholder="Username"
                        value={username}
                        onChange={setUsername}
                        type="text"
                    />
                    <InputField 
                        placeholder="Password"
                        value={password}
                        onChange={setPassword}
                        type="password"
                    />
                    <button
                        className={style.submit_btn}
                        onClick = {() => console.log(username, password)}
                    >
                        <ArrowForwardIosIcon />
                        <ArrowForwardIosIcon className={style.arrow}/>
                    </button>
                    <div className={style.backbtn}>
                        <p>BACK TO WEBSITE</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
