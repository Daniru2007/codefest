import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const links = [
    { Home: "home" },
    { Study: "study" },
    { "Time Management": "time" },
    { "About Us": "aboutus" },
  ];

  window.onscroll = () => {
    scrollFunc();
  };

  const scrollFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolling ? "scrolled" : ""}`}>
      <div>
        <div className="logo"></div>
      </div>
      <div className={`navbar__links ${menuOpen ? "open" : ""}`}>
        {links.map((link) => {
          const [key, val] = Object.entries(link)[0];
          return (
            <Link className="navbar__links__item" to={`/${val}`} key={val}>
              {key}
            </Link>
          );
        })}
      </div>
      <div className="navbar__right">
        <div className="navbar__profile"></div>

        <div className="menu-button">
          <div
            className={`menu-icon ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="menu-ani ani1"></span>
            <span className="menu-ani ani2"></span>
            <span className="menu-ani ani3"></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
