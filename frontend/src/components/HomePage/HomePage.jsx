import React from "react";
import "./HomePage.css";
import HomeMain from "./HomeMain";
import Navbar from "../Utils/Navbar";
import HomeDisplay from "./HomeDisplay";

function HomePage({ setOnLink }) {
  return (
    <div className="home-page">
      <Navbar />
      <HomeMain />
      <HomeDisplay />
    </div>
  );
}

export default HomePage;
