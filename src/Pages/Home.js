import React, { useContext } from "react";
import { DarkContext } from "../App";

import homeStyle from "../Themes/Home.module.css";
import SideBar from '../Components/SideBar';

import StatusBar from "../Components/StatusBar";
import NoticeBoard from "../Components/NoticeBoard";
import RecentActivities from "../Components/RecentActivities";
import Calender from "../Components/Calender";

export default function Home() {
  const [darkMode] = useContext(DarkContext);
  const pageName = "System Overview"

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
        <StatusBar pageName={pageName} />

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

             {/* Calender */}
             <Calender />
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
