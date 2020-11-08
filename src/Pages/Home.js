import React, { useEffect, useContext } from "react";
import { DarkContext, LoginContext } from "../App";
import Button from "@material-ui/core/Button";
import Switcher from "../Components/Switcher";
import style from "../Themes/LoginStyle.module.css";
import homeStyle from "../Themes/Home.module.css";

export default function Home() {
  const [darkMode, setDarkMode] = useContext(DarkContext);
  const [loginStatus, setLoginStatus] = useContext(LoginContext);

  return (
    // main page
    <div className={`${homeStyle.homePage} ${darkMode ? homeStyle.lightTheme : ''}`}>
      {/* home sidebar */}
      <div className={`${homeStyle.sidebar} ${darkMode ? homeStyle.lightTheme : ''}`}></div>

      <div className={homeStyle.mainContainer}>
        {/* status bar */}
        <div className={`${homeStyle.statusBar} ${darkMode ? homeStyle.lightTheme : ''}`}>
        {/*  switch */}
          <Switcher />
                <Button
                onClick={() => setLoginStatus(false)}
                variant="contained"
                color="primary">
                    Logout
                </Button>
                <h1>Welcome to home page !</h1>
        </div>

        {/* content */}
        <div className={`${homeStyle.content}`}></div>
      </div>
    </div>
  );
}
