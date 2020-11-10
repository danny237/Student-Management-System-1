import React, { useContext } from "react";
import homeStyle from '../Themes/Home.module.css';
import { Notices } from '../Constants/RawData';
import { DarkContext } from '../App';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

export default function NoticeBoard() {

    const [darkMode] = useContext(DarkContext); 

    // notices
  let notices = Notices.map((item, index) => (
      <div 
      key={index}
      className={`${homeStyle.noticeHolder}
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
  ))

  return (
      <div
        className={`${homeStyle.noticeBoard}
          ${darkMode ? homeStyle.lightHorizontalBorder : homeStyle.darkTheme}
          `}
      >
        <h3>Notice Board</h3>
        {notices}
      </div>
  );
}
