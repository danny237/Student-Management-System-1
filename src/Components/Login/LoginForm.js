import React, { useEffect, useState, useContext } from "react";
import Switch from "@material-ui/core/Switch";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import styles from "./Login.module.css";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { Button } from "@material-ui/core";
import { themeContext } from "../../Contexts/ThemeContext";

export default function LoginForm() {
  const [currentTheme, setCurrentTheme] = useState("dark");
  const [theme, dispatchTheme] = useContext(themeContext);

  useEffect(() => {}, [currentTheme]);
  return (
    <>
      {/* switch */}
      <div className={styles.themeSwticher}>
        <NightsStayIcon />
        <Switch
          color="default"
          inputProps={{ "aria-label": "checkbox with default color" }}
          onChange={() => {
            setCurrentTheme((prev) => (prev === "dark" ? "light" : "dark"));
            dispatchTheme({ type: currentTheme === "dark" ? "LIGHT" : "DARK" });
          }}
        />
        <WbSunnyIcon />
      </div>

      {/* form */}
      <form className={styles.loginInputs}>
        <h1>Login</h1>
        <input
          style={
            theme.name === "dark"
              ? {
                  background: "#3f484b",
                  color: "#dddddd",
                }
              : {
                  background: "#f1f1f1",
                  color: "#3a3a3a",
                }
          }
          type="text"
          name="username"
          placeholder="Username"
        />
        <br />
        <input
          style={
            theme.name === "dark"
              ? {
                  background: "#3f484b",
                  color: "#dddddd",
                }
              : {
                  background: "#f1f1f1",
                  color: "#3a3a3a",
                }
          }
          type="password"
          name="password"
          placeholder="Password"
        />
        <Button
          style={{ background: "#fff!important", color: "#3a3a3a" }}
          className={
            theme.name === "dark"
              ? styles.loginDarkButton
              : styles.loginLightButton
          }
        >
          <DoubleArrowIcon
            className={
              theme.name === "dark"
                ? styles.loginButtonDarkIcon
                : styles.loginButtonLightIcon
            }
          />
        </Button>
      </form>

      {/* login footer */}
      <div className="backToSite">BACK TO WEBSITE</div>
    </>
  );
}
