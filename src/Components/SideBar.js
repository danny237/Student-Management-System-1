import React, { useContext } from "react";
import HouseIcon from "@material-ui/icons/House";
import MarkunreadIcon from "@material-ui/icons/Markunread";
import AssignmentIcon from "@material-ui/icons/Assignment";
import FormatListNumbered from "@material-ui/icons/FormatListNumbered";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import SettingIcon from "@material-ui/icons/Settings";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import homeStyle from "../Themes/Home.module.css";
import { Link } from "react-router-dom";

import { DarkContext } from "../App";

const darkBtn = {
  color: "#2D3436",
}

const whiteBtn = {
  color: "#fff"
}


export default function SideBar() {
  const [darkMode] = useContext(DarkContext);

  return (
    <div
      className={`${homeStyle.sidebar} ${darkMode ? homeStyle.lightTheme : ""}`}
    >
      <div className={`${homeStyle.sidebarholder}`}>
        <Link to="/">
          <div style={{ color: `${darkMode ? darkBtn.color : whiteBtn.color}` }}>
            <HouseIcon />
          </div>
        </Link>

        <Link to="/application">
          <div style={{color: `${darkMode ? darkBtn.color : whiteBtn.color }` }}>
            <MarkunreadIcon />
          </div>
        </Link>
        <div style={{ color: `${darkMode ? darkBtn.color : whiteBtn.color }` }}>
          <AssignmentIcon />
        </div>
        <div style={{ color: `${darkMode ? darkBtn.color : whiteBtn.color }` }}>
          <FormatListNumbered />
        </div>
        <div style={{ color: `${darkMode ? darkBtn.color : whiteBtn.color }` }}>
          <SupervisorAccountIcon />
        </div>
        <div style={{ color: `${darkMode ? darkBtn.color : whiteBtn.color }` }}>
          <SettingIcon />
        </div>
        <div style={{ color: `${darkMode ? darkBtn.color : whiteBtn.color }` }}>
          <AssignmentTurnedInIcon />
        </div>
      </div>
    </div>
  );
}
