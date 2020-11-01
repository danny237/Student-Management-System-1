import React from "react";
import Logo from "./logo.png"; // remove logo

export default function App() {
  // remove this
  const style = {
    parent: {
      textAlign: "center",
      fontSize: "22px",
      margin: "3vh 4vw",
    },
    info: {
      textAlign: "left",
      margin: "0 4vw"
    }
  };
  return (
    // clear the parent div
    <div style={style.parent}>
      <img src={Logo} alt="CodewithSudeep" style={{ width: "250px" }} />
      <p>
        This is a starting boilerplate for building the student management
        system.
      </p>
      <hr />
      <div style={style.info}>
        <h3>Things to remember:</h3>
        <ol>
          <li>Use Raleway font for whole project.</li>
          <li>Do not use any other color palette except given palette.</li>
          <li>Consider using modular css, use either modular or styled component but only one.</li>
        </ol>
        <hr/>
        <h3 style={{textAlign: "center"}}>Happy Hacking!</h3>
      </div>
    </div>
  );
}
