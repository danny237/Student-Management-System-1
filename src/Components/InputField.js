import React from 'react'
import style from '../Themes/LoginStyle.module.css'

export default function InputField({placeholder, type, onChange,id}) {
    return (
        <div>
            <input
                id={id}
                className={style.input}
                placeholder={placeholder}
                type={type}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
}
