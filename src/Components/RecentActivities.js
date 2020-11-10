import React, { useContext } from 'react';
import homeStyle from '../Themes/Home.module.css';
import { DarkContext } from '../App';
import { Activities } from '../Constants/RawData';

export default function RecentActivities() {

    const [darkMode, setDarkMode] = useContext(DarkContext);

    // Recent Activities
  let recentActivities = Activities.map((item, index) => (
    <li key={index} className={homeStyle.activity}>
      {item.activity}
    </li>
  ))

    return (
        <div className={`${homeStyle.recentActivities}
          ${darkMode ? homeStyle.lightHorizontalBorder : homeStyle.darkTheme}
          `}>
            <h3>Recent Activities</h3>
            {recentActivities}
          </div>
    )
}
