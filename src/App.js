import React, { useState } from "react";
import LoginForm from './Forms/LoginForm'

export const DarkContext = React.createContext()

export default function App() {

  const [dark, setDarkMode] = useState(false)
  return (
    <DarkContext.Provider value={[dark,setDarkMode]}>
      <LoginForm />
      </DarkContext.Provider>
  );
}
