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

export default function Home() {
  const [darkMode, setDarkMode] = useContext(DarkContext);
  const [loginStatus, setLoginStatus] = useContext(LoginContext);

  return (
    // main page
    <div
      className={`${homeStyle.homePage} ${
        darkMode ? homeStyle.lightTheme : ""
      }`}
    >
      {/* home sidebar */}
      <div
        className={`${homeStyle.sidebar} ${
          darkMode ? homeStyle.lightTheme : ""
        }`}
      >
        <div className={`${homeStyle.sidebarholder}
          ${darkMode ? '' : homeStyle.whiteColor} 
        `}>
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
          className={`${homeStyle.statusBar} ${
            darkMode ? homeStyle.lightTheme : ""
          }`}
        >
          {/* left section */}
          <section className={homeStyle.leftSection}>
            <div>
              <h1>Nagarjuna College of IT</h1>
            </div>
            <div>
              <h3>System Overview</h3>
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
              <div className={homeStyle.logoutBtn}>
                <ExitToAppIcon /> Logout
              </div>
            </div>
            
          </section>
        </div>

        {/* content */}
        <div className={`${homeStyle.content}`}>

        <Button
              onClick={() => setLoginStatus(false)}
              variant="contained"
              color="primary"
            >
              Logout
            </Button>
        </div>
      </div>
    </div>
  );
}
