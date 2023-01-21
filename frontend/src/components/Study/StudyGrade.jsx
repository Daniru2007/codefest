import React from "react";

import { BsFillArrowRightCircleFill, BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import Navbar from "../Utils/Navbar";
import "./StudyGrade.css";

function StudyGrade() {
  const links = [
    { science: "science" },
    { maths: "maths" },
    { english: "english" },
    { sinhala: "sinhala" },
    { buddhism: "buddhism" },
    { history: "history" },
    { civics: "Civics" },
    { geography: "geography" },
    { ICT: "ict" },
    { tamil: "tamil" },
    { health: "health" },
    { art: "art" },
    { "western music": "wmusic" },
    { eastern: "emusic" },
    { drama: "drama" },
    { dancing: "dancing" },
  ];
  return (
    <div className="study__main">
      <Navbar />
      <div className="back__img">
        <h2>Study like you have never done before.</h2>
        <p
          className="home-main__para"
          style={{
            color: "#eeffff",
            marginLeft: "30px",
            marginRight: "30px",
            marginTop: "1px",
            maxWidth: "555px",
            fontSize: "15px",
            width: "350px",
          }}
        >
          Take your subject skills to the next level. Improve greatly by taking
          advantage of our online learning platform.
        </p>
        <a
          className="link"
          style={{
            margin: "10px 30px",
            weight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h4 style={{ display: "inline-block" }}>Take me through!</h4>
          <BsFillArrowRightCircleFill className="link__icon" />
        </a>
      </div>
      <div className="topper"></div>
      <div className="subject__choose">
        {links.map((link) => {
          const [key, val] = Object.entries(link)[0];
          return (
            <Link to={val} className="subject__choose__item grade" key={key}>
              {key}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default StudyGrade;
