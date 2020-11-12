import React, { useContext, useState } from "react";
import appStyle from "../Themes/Application.module.css";
import { DarkContext } from "../App";
import homeStyle from "../Themes/Home.module.css";
import SideBar from "../Components/SideBar";
import StatusBar from "../Components/StatusBar";
import AlertMsg from '../Components/AlertMsg';
import { SUCCESS_MSG, ERROR_MSG } from '../Constants/ApplicationAlertMsg';

const darkBtnStyle = {
  color: "#fff",
  backgroundColor: "#2D3436",
  boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.25)"
}

const ligntBtnStyle = {
    backgroundColor: "#fff",
    boxShadow: "0px 10px 25px rgba(181, 173, 243, 0.5)"
}

export default function Application() {
  const [darkMode] = useContext(DarkContext);
  const [subTitle, setSubTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false)
  const pageName = "Application";

  // clear the input Field
  const reset = () => {
    setSuccess(false);
    setError(false);
    setSubTitle("");
    setDesc("");
  }

  // run after sent button is clicked
  const sentHandler = () => {
    if ((subTitle === "") || (desc === "")){
      setError(true);
      setTimeout(() => {
        setError(false)
      }, 4000);
    }else{
      setSuccess(true)
      setSubTitle("");
      setDesc("");
      setError(false);
      setTimeout(() => {
        setSuccess(false)
      }, 4000)
    }
  }

  
  // 
  const resetHandler = () => {
    reset();
  }


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
        <StatusBar pageName={pageName} />

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

          <label>
            <h2 className={appStyle.mt_50}>Description</h2>
          </label>
          <textarea
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
            className={`${appStyle.textArea} ${
              darkMode ? appStyle.lightInput : ""
            }
            ${appStyle.mx_20}`}
          ></textarea>

          <button
          onClick={() => sentHandler()}
          className={appStyle.btnStyle}
          style={darkMode ? ligntBtnStyle : darkBtnStyle}>Send</button>
          
          <button
          onClick={() => resetHandler()}
          className={appStyle.btnStyle}
          style={darkMode ? ligntBtnStyle : darkBtnStyle}>Reset</button>

          {/* alert message */}
          { error && 
            <AlertMsg setFunction={setError} alertInfo={{msg: ERROR_MSG, type: "error"}} />
          }
          {
            success &&
            <AlertMsg setFunction={setSuccess} alertInfo={{msg: SUCCESS_MSG, type: "success"}} />
          }
        </div>
      </div>
    </div>
  );
}
