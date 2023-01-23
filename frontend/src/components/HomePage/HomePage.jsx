import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./HomePage.css";
import HomeMain from "./HomeMain";
import Navbar from "../Utils/Navbar";
import HomeDisplay from "./HomeDisplay";

function HomePage({ userId, setUserId }) {
  const { id } = useParams();
  useEffect(() => {
    setUserId(id);
  }, []);
  return (
    <div className="home-page">
      <Navbar />
      <HomeMain />
      <HomeDisplay />
    </div>
  );
}

export default HomePage;
