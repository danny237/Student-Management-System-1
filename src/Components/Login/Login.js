import React, { useContext } from "react";
import { themeContext } from "../../Contexts/ThemeContext";
import styles from "./Login.module.css";
import LoginForm from "./LoginForm";
import LoginInfo from "./LoginInfo"

export default function Login() {
  const [theme] = useContext(themeContext);

  const loginStyle = {
    background: `${theme.background}`,
    color: `${theme.color}`,
  };

  return (
    <div className={styles.login} style={loginStyle}>
      <div style={
        theme.name === "dark" ?
          { 
            boxShadow: "0px 15px 32px 0px rgba(0, 0, 0, 0.25)" 
          } :
          {
            boxShadow: "0px 15px 32px 0px rgba(181,173,243,0.25)"
          }
      } className={styles.loginContainer}>
        {/* left */}
        <div className={styles.loginInfo}>
          <LoginInfo />
        </div>

        {/* right */}
        <div className={styles.loginForm}>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
