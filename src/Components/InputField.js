import React, { useContext } from 'react'
import style from '../Themes/LoginStyle.module.css'
import { DarkContext } from '../App'


export default function InputField({placeholder, type, onChange,id}) {
    
    const [dark] = useContext(DarkContext)
    console.log(dark)
   
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