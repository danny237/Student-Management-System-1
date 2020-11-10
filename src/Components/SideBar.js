import React, { useContext } from "react";
import HouseIcon from "@material-ui/icons/House";
import MarkunreadIcon from "@material-ui/icons/Markunread";
import AssignmentIcon from "@material-ui/icons/Assignment";
import FormatListNumbered from "@material-ui/icons/FormatListNumbered";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import SettingIcon from "@material-ui/icons/Settings";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import homeStyle from "../Themes/Home.module.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import { DarkContext } from "../App";

export default function SideBar() {
  const [darkMode] = useContext(DarkContext);

  return (
    <div
      className={`${homeStyle.sidebar} ${darkMode ? homeStyle.lightTheme : ""}`}
    >
      <div className={`${homeStyle.sidebarholder}`}>
        <Link to="/">
          <Button style={{ color: `${darkMode ? "" : "#fff"}` }}>
            <HouseIcon />
          </Button>
        </Link>

        <Link to="/application">
          <Button style={{color: `${darkMode ? "" : "#fff"}` }}>
            <MarkunreadIcon />
          </Button>
        </Link>
        <Button style={{ color: `${darkMode ? "" : "#fff"}` }}>
          <AssignmentIcon />
        </Button>
        <Button style={{ color: `${darkMode ? "" : "#fff"}` }}>
          <FormatListNumbered />
        </Button>
        <Button style={{ color: `${darkMode ? "" : "#fff"}` }}>
          <SupervisorAccountIcon />
        </Button>
        <Button style={{ color: `${darkMode ? "" : "#fff"}` }}>
          <SettingIcon />
        </Button>
        <Button style={{ color: `${darkMode ? "" : "#fff"}` }}>
          <AssignmentTurnedInIcon />
        </Button>
      </div>
    </div>
  );
}
