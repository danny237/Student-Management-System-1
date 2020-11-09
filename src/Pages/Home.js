import React, { useEffect, useContext } from "react";
import { DarkContext, LoginContext } from "../App";
import Button from "@material-ui/core/Button";
import Switcher from "../Components/Switcher";
import homeStyle from "../Themes/Home.module.css";

import HouseIcon from "@material-ui/icons/House";
import MarkunreadIcon from '@material-ui/icons/Markunread';
import AssignmentIcon from "@material-ui/icons/Assignment";
import FormatListNumbered from "@material-ui/icons/FormatListNumbered";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import SettingIcon from "@material-ui/icons/Settings";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

import { NoticeBoard, Activities } from '../Constants/RawData';

export default function Home() {
  const [darkMode, setDarkMode] = useContext(DarkContext);
  const [loginStatus, setLoginStatus] = useContext(LoginContext);


  // notices
  let notices = NoticeBoard.map((item, index) => (
    <>
      <div className={`${homeStyle.noticeHolder}
      ${darkMode ? homeStyle.lightVerticalBoder : homeStyle.darkTheme}
      `}>
        <div className={homeStyle.notice} key={index}>
          {item.notice}
              </div>
        <div className={homeStyle.postedTime}>
          <AccessTimeIcon fontSize="small" />
          <p>{item.posted_at}</p>
        </div>
      </div>
    </>
  ))

  // Recent Activities
  let recentActivities = Activities.map((item, index) => (
    <li key={index} className={homeStyle.activity}>
      {item.activity}
    </li>
  ))



  return (
    // main page
    <div
      className={`${homeStyle.homePage} ${darkMode ? homeStyle.lightTheme : homeStyle.darkTheme
        }`}
    >
      {/* home sidebar */}
      <div
        className={`${homeStyle.sidebar} ${darkMode ? homeStyle.lightTheme : ""
          }`}
      >
        <div className={`${homeStyle.sidebarholder}`}>
          <HouseIcon />
          <MarkunreadIcon />
          <AssignmentIcon />
          <FormatListNumbered />
          <SupervisorAccountIcon />
          <SettingIcon />
          <AssignmentTurnedInIcon />
        </div>
      </div>

      <div className={homeStyle.mainContainer}>
        {/* status bar */}
        <div
          className={`${homeStyle.statusBar} ${darkMode ? homeStyle.lightTheme : ""
            }`}
        >
          {/* left section */}
          <section className={homeStyle.leftSection}>
            <div>
              <h1>Nagarjuna College of IT</h1>
            </div>
            <div>
              <h3 style={{lineHeight: "25px"}}>System Overview</h3>
              <p>Last logged in 4 hours age.</p>
            </div>
          </section>

          {/* right section */}
          <section className={homeStyle.rightSection}>
            <div className={homeStyle.notification}>
              <NotificationsNoneIcon />
              <MailOutlineIcon />
              <p>Daniel Thapa Magar</p>
            </div>

            <div className={homeStyle.statusBtn}>
              {/*  switch */}
              <Switcher />
              <div>
                <Button
                style={{color:`${darkMode ? '' : '#fff'}`}}
                  onClick={() => setLoginStatus(false)}
                >
                  <ExitToAppIcon /> Logout
                </Button>
              </div>
            </div>

          </section>
        </div>

        {/* content */}
        <div className={`${homeStyle.content}`}>

          {/* start activities */}
          <div className={homeStyle.activities}>

            <div className={homeStyle.attendance}>
              <div className=
              {`${homeStyle.attandenceCard}
              ${darkMode ? homeStyle.lightHorizontalBorder : homeStyle.darkTheme}
              `}>
                <p>Total School Days</p>
                <h1>285Days</h1>
              </div>
              <div className={`${homeStyle.attandenceCard}
              ${darkMode ? homeStyle.lightHorizontalBorder : homeStyle.darkTheme}
              `}>
                <p>Total Present Days</p>
                <h1>285Days</h1>
              </div>
            </div>

            <div className={`${homeStyle.calender}
            ${darkMode ? homeStyle.lightHorizontalBorder : homeStyle.darkTheme}
            `}>
              This is calender
            </div>
          </div>
          {/* end activities */}

          {/* Notice board */}
          <div className={`${homeStyle.noticeBoard}
          ${darkMode ? homeStyle.lightHorizontalBorder : homeStyle.darkTheme}
          `}>
            <h3>Notice Board</h3>
            {notices}
          </div>

          {/* Recent Activities */}
          <div className={`${homeStyle.recentActivities}
          ${darkMode ? homeStyle.lightHorizontalBorder : homeStyle.darkTheme}
          `}>
            <h3>Recent Activities</h3>
            {recentActivities}
          </div>

        </div>
      </div>

    </div>
  );
}
