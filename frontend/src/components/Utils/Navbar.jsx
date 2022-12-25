import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ setCursorOnLinks }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const cursor = {
        onMouseEnter: () => setCursorOnLinks(true),
        onMouseLeave: () => setCursorOnLinks(false),
    };

    const links = [
        { Home: "home" },
        { Study: "study" },
        { "Time Management": "time" },
        { "About Us": "aboutus" },
    ];

    return (
        <>
            <Router>
                <nav className="navbar">
                    <div>
                        <div className="logo"></div>
                    </div>
                    <div className={`navbar__links ${menuOpen ? "open" : ""}`}>
                        {links.map((link) => {
                            const [key, val] = Object.entries(link)[0];
                            return (
                                <Link
                                    className="navbar__links__item"
                                    to={`/${val}`}
                                    key={val}
                                    {...cursor}
                                >
                                    {key}
                                </Link>
                            );
                        })}
                    </div>
                    <div className="navbar__right">
                        <div className="navbar__profile"></div>

                        <div className="menu-button">
                            <div
                                className={`menu-icon ${
                                    menuOpen ? "open" : ""
                                }`}
                                onClick={() => setMenuOpen(!menuOpen)}
                                {...cursor}
                            >
                                <span className="menu-ani ani1"></span>
                                <span className="menu-ani ani2"></span>
                                <span className="menu-ani ani3"></span>
                            </div>
                        </div>
                    </div>
                </nav>
            </Router>
        </>
    );
}

export default Navbar;
