import React, { useContext } from 'react'
import style from '../Themes/LoginStyle.module.css'
import { DarkContext } from '../App'


export default function InputField({placeholder, type, onChange}) {
    
    const [dark] = useContext(DarkContext)
   
    return (
        <div>
            <input
                className={`${style.inputField} ${dark ? style.inputDark : ''}`}
                placeholder={placeholder}
                type={type}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
}
