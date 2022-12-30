import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Study from "./components/Study/Study";
import TimeManagement from "./components/TimeManagement/TimeManagement";
import AboutUs from "./components/AboutUs/AboutUs";
import TimeProject from "./components/TimeManagement/TimeProject";
import TimeProjectItem from "./components/TimeManagement/TimeProjectItem";

function App() {
  // Setting Up the routes
  return (
    <div className="App">
      <Router>
        <Routes mode="absolute">
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/study" element={<Study />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/time" element={<TimeManagement />} />
          <Route path="time/project" element={<TimeProject />} />
          <Route path="time/project/:id" element={<TimeProjectItem />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
