import React, { useContext } from 'react'
import teacherStyle from '../Themes/Teachers.module.css';
import { DarkContext } from '../App';


export default function TeacherCard({teacher}) {

    const [darkMode] = useContext(DarkContext)

    // get first letter
    const getFirstLetter = () => {
        let name = teacher.name
        return name[0]
    }

    const firstLetter = getFirstLetter()

    return (
        <div className={`${teacherStyle.teacherCard} ${darkMode ? teacherStyle.lightTheme : teacherStyle.darkTheme}`}>
             <div classname={`${teacherStyle.firstLetter}`}>
                <h1>{firstLetter}</h1>   
             </div>
             <div className={`${teacherStyle.teacherInfo}`}>
                <h4>{teacher.name}, {teacher.subject}</h4>
                <p>{teacher.email}</p>
                <p>{teacher.phone_number}</p>
             </div>

        </div>
    )
}
