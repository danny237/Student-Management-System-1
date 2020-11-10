import React, { useContext } from "react";
import { DarkContext } from '../App';
import homeStyle from '../Themes/Home.module.css';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Button from "@material-ui/core/Button";

export default function Notification({className}) {

    const [darkMode, setDarkMode] = useContext(DarkContext);

  return (
    <div className={`${className ? className : homeStyle.notification}`}>
      <Button style={{ color: `${darkMode ? "" : "#fff"}` }}>
        <NotificationsNoneIcon />
      </Button>
      <Button style={{ color: `${darkMode ? "" : "#fff"}` }}>
        <MailOutlineIcon />
      </Button>
      <p>Daniel Thapa Magar</p>
    </div>
  );
}
