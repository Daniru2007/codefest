import { useState } from "react";
import classNames from "classnames";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Tilty from "react-tilty";

import ToggleButton from "./components/ToggleButton";
import SVGBlob from "./components/SVGBlob";

import "./style/App.css";
import "./style/library.css";

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
        <nav className="navbar">
          <div className="navbar__logo"></div>
          <ul className="navbar__links">
            <li className="navbar__links__item">
              <Link to="/home">Home</Link>
            </li>
            <li className="navbar__links__item">
              <Link to="/about-us">About us</Link>
            </li>
            <li className="navbar__links__item">
              <Link to="/study">Study</Link>
            </li>
            <li className="navbar__links__item">
              <Link to="/time">Time</Link>
            </li>
          </ul>
          <div className="navbar__right">
            <label className="switch">
              <input
                type={"checkbox"}
                defaultChecked={darkTheme}
                onChange={() => updateDarkTheme(!darkTheme)}
              ></input>
              <span className="slider"></span>
            </label>
            <div className="navbar__right__user">
              <FaUser fill="#1a1d22" fontSize="20px" />
            </div>
          </div>
        </nav>
      </Router>
    </div>
  );
}

export default App;
