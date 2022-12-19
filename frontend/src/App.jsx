import { useState } from "react";
import classNames from "classnames";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Tilty from "react-tilty";

import Button from "./components/Button";
import SVGBlob from "./components/SVGBlob";

import "./style/App.css";
import "./style/library.css";
import React from "react";

function App() {
  // change theme
  const [darkTheme, updateDarkTheme] = useState(true);
  const theme = classNames({ dark: darkTheme, light: !darkTheme });
  var themeIcon = darkTheme ? (
    <BsFillMoonFill style={{ fontSize: "25px", color: "e6bb00" }} />
  ) : (
    <BsFillSunFill style={{ fontSize: "25px", color: "yellow" }} />
  );

  return (
    <div className={`App ${theme}`}>
      <Router>
        <nav className={`navbar ${theme}`}>
          <div className={`navbar__logo ${theme}`}></div>
          <ul className={`navbar__links ${theme}`}>
            <li className={`navbar__links__item ${theme}`}>
              <Link to="/home">Home</Link>
            </li>
            <li className={`navbar__links__item ${theme}`}>
              <Link to="/about-us">About us</Link>
            </li>
            <li className={`navbar__links__item ${theme}`}>
              <Link to="/study">Study</Link>
            </li>
            <li className={`navbar__links__item ${theme}`}>
              <Link to="/time">Time</Link>
            </li>
          </ul>
          <div className={`navbar__right ${theme}`}>
            <label className="switch">
              <input
                type={"checkbox"}
                defaultChecked={darkTheme}
                onChange={() => updateDarkTheme(!darkTheme)}
              ></input>
              <span className="slider"></span>
            </label>
            <div className={`navbar__right__user ${theme}`}>
              <FaUser fill="#1a1d22" fontSize="20px" />
            </div>
          </div>
        </nav>
        <section className="main">
          <div className="main__head">
            <div className={`main__head__heading ${theme}`}>
              <h1>The Best </h1>
              <h1 style={{ color: "#39B8C9" }}>E-Learning </h1>
              <h1>Website</h1>
            </div>
            <Button theme={theme}>Hi</Button>
          </div>
        </section>
      </Router>
    </div>
  );
}

export default App;
