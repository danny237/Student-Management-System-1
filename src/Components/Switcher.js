import React, { useContext } from 'react'
import style from '../Themes/LoginStyle.module.css'
import Switch from '@material-ui/core/Switch';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { DarkContext } from '../App';


export default function Switcher() {

    const [darkMode,setDarkMode] = useContext(DarkContext)
    
    return (
        <div>
            <div className={`${style.switch} ${darkMode ? style.switchLight : ''}`}>
            <div>
                    <Brightness7Icon />
                </div>
                <div className={style.togglebtn}>
                    <Switch
                        onClick={() => setDarkMode(s => !s)}
                        checked={darkMode ? true : false}
                        color="primary"
                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                    />
                </div>
                <div>
                    <NightsStayIcon />
            </div>
          </div>
        </div>
    )
}
