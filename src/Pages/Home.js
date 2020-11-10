import React, { useContext } from "react";
import { DarkContext, LoginContext } from "../App";

import homeStyle from "../Themes/Home.module.css";
import SideBar from '../Components/SideBar';

import StatusBar from "../Components/StatusBar";
import NoticeBoard from "../Components/NoticeBoard";
import RecentActivities from "../Components/RecentActivities";

export default function Home() {
  const [darkMode, setDarkMode] = useContext(DarkContext);

  return (
    // main page
    <div
      className={`${homeStyle.homePage} ${darkMode ? homeStyle.lightTheme : homeStyle.darkTheme
        }`}
    >
      {/* Side Bar */}
      <SideBar />

      <div className={homeStyle.mainContainer}>
        
        {/* Status Bar */}
        <StatusBar />

        {/* content */}
        <div className={`${homeStyle.content}`}>

          {/* Date Info */}
          <div className={homeStyle.dateInfo}>

            <div className={homeStyle.attendance}>
              <div className=
              {`${homeStyle.attendenceCard}
              ${darkMode ? homeStyle.lightHorizontalBorder : homeStyle.darkTheme}
              `}>
                <p>Total School Days</p>
                <h1>285Days</h1>
              </div>
              <div className={`${homeStyle.attendenceCard}
              ${darkMode ? homeStyle.lightHorizontalBorder : homeStyle.darkTheme}
              `}>
                <p>Total Present Days</p>
                <h1>285Days</h1>
              </div>
            </div>

            <div className={`${homeStyle.calender}
            ${darkMode ? homeStyle.lightHorizontalBorder : homeStyle.darkTheme}
            `}>
             <p>This is calender</p>
            </div>
          </div>

          {/* Notice board */}
          <NoticeBoard />

          {/* Recent Activities */}
          <RecentActivities />

        </div>
      </div>

    </div>
  );
}
