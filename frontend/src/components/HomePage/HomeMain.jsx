import React from "react";
import { Link } from "react-router-dom";
import { BsFillArrowRightCircleFill, BsArrowRightCircle } from "react-icons/bs";
import Typing from "../Utils/Typing";
import "./HomeMain.css";

function HomeMain() {
  return (
    <div className="home-main">
      {/* Typing Animation */}
      <Typing
        texts={["Best E-Learning Site", "Study Efficiently", "Join Us"]}
      />
      <p className="home-main__para">
        Welcome to our e-learning website! We are excited to offer you a wide
        range of educational materials and resources to help you learn and grow.
        We hope you enjoy your time on our e-learning website!
      </p>
      <a href="http://localhost/3/index.php" className="link home-main__link">
        <h3>Let's Connect</h3>
        <BsFillArrowRightCircleFill className="link__icon" />
      </a>
    </div>
  );
}

export default HomeMain;
