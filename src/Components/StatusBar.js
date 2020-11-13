import React, {useContext} from "react";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from "@material-ui/core/Button";
import homeStyle from '../Themes/Home.module.css';

import Switcher from "../Components/Switcher";
import { DarkContext, LoginContext } from '../App';
import Notification from "./Notification";

export default function StatusBar({pageName}) {

    const [darkMode] = useContext(DarkContext);
    const [loginStatus, setLoginStatus] = useContext(LoginContext);
     
  return (
      <div
        className={`${homeStyle.statusBar} ${
          darkMode ? homeStyle.lightTheme : ""
        }`}
      >
        {/* left section */}
        <section className={homeStyle.leftSection}>
          <div>
            <h1>Nagarjuna College of IT</h1>
              <Notification className={homeStyle.notification2}/>
          </div>
          <div>
            <h3 style={{ lineHeight: "25px" }}>{pageName}</h3>
            <p>Last logged in 4 hours age.</p>
          </div>
        </section>

        {/* right section */}
        <section className={homeStyle.rightSection}>
          {/* notification */}
          <Notification />

          <div className={homeStyle.statusBtn}>
            {/*  switch */}
            <Switcher />
            <div>
              <Button
                style={{ color: `${darkMode ? "" : "#fff"}` }}
                onClick={() => setLoginStatus(false)}
              >
                <ExitToAppIcon /> Logout
              </Button>
            </div>
          </div>
        </section>
      </div>
  );
}
