import React from "react";
import "./HomePage.css";
import HomeMain from "./HomeMain";
import Navbar from "../Utils/Navbar";

function HomePage({ setOnLink }) {
  return (
    <div className="home-page">
      <Navbar setCursorOnLinks={setOnLink} />
      <HomeMain />
    </div>
  );
}

export default HomePage;
