import React, { useState, useEffect } from "react";
import LoginForm from './Forms/Login'

export const DarkContext = React.createContext()

export default function App() {

  const [darkMode, setDarkMode] = useState(getInitialMode)

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  },[darkMode])

  function getInitialMode(){
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    return savedMode || false;
  }

  return (
    <DarkContext.Provider value={[darkMode,setDarkMode]}>
      <LoginForm />
    </DarkContext.Provider>
  );
}
