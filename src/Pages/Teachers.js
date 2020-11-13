import React, { useContext } from 'react';
import teacherStyle from '../Themes/Teachers.module.css';
import SideBar from '../Components/SideBar';
import StatusBar from '../Components/StatusBar';
import TeacherCard from '../Components/TeacherCard';
import { DarkContext } from '../App';
import { teachersList } from '../Constants/RawData';

const pageName = "Teachers";

export default function Teachers() {

    const [darkMode] = useContext(DarkContext)

    const teacherCards = teachersList.map((teacher, index) => (
            <TeacherCard key={index} teacher={teacher} />
    ))

    return (
        <div className={`${teacherStyle.teachersPage} ${darkMode ? teacherStyle.lightTheme : teacherStyle.darkTheme}`}>
            <SideBar />

            {/* main container */}
            <div className={`${teacherStyle.mainContainer} ${darkMode ? teacherStyle.lightTheme : teacherStyle.darkTheme}`}>

                {/* status bar */}
                <StatusBar pageName={pageName} />

                {/* content */}
                <div className={`${teacherStyle.content} ${darkMode ? teacherStyle.lightBackground : teacherStyle.darkBackground}`}>
                    { teacherCards }
                </div>


            </div>
        </div>
    )
}
