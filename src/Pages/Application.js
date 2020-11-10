import React, { useContext, useState } from "react";
import appStyle from "../Themes/Application.module.css";
import { DarkContext } from "../App";
import homeStyle from "../Themes/Home.module.css";
import SideBar from "../Components/SideBar";
import StatusBar from "../Components/StatusBar";

export default function Application() {
  const [darkMode] = useContext(DarkContext);
  const [subTitle, setSubTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <div
      className={`${appStyle.applicationPage} ${
        darkMode ? homeStyle.lightTheme : homeStyle.darkTheme
      }`}
    >
      {/* sidebar */}
      <SideBar />

      <div className={appStyle.mainContainer}>
        {/* statusBar */}
        <StatusBar />

        {/* application form */}

        <div className={appStyle.applicationForm}>
            {/* <div> */}
              <label htmlFor="title">
                <h2>Subject Title</h2>
              </label>
              <input
                onChange={(e) => setSubTitle(e.target.value)}
                value={subTitle}
                className={`${appStyle.mt_20} ${appStyle.input} ${
                  darkMode ? appStyle.lightInput : ""
                }`}
                id="title"
                placeholder="e.g. Application for sick leave."
              />
            {/* </div> */}

          
              <label><h2 className={appStyle.mt_50}>Description</h2></label>
              <textarea
                onChange={(e) => setDesc(e.target.value)}
                value={desc}
                className={`${appStyle.textArea} ${
                  darkMode ? appStyle.lightInput : ""
                }
            ${appStyle.mt_20}`}
              ></textarea>
            
          </div>
      </div>
    </div>
  );
}
