import React, { useContext } from "react";
import { DarkContext } from '../App';
import homeStyle from '../Themes/Home.module.css';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

export default function Notification({className}) {

    const [darkMode] = useContext(DarkContext);

  return (
    <div className={`${className ? className : homeStyle.notification}`}>
      <div style={{ color: `${darkMode ? "" : "#fff"}` }}>
        <NotificationsNoneIcon />
      </div>
      <div style={{ color: `${darkMode ? "" : "#fff"}` }}>
        <MailOutlineIcon />
      </div>
      <p>Daniel Thapa Magar</p>
    </div>
  );
}
