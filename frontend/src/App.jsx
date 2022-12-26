import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Study from "./components/Study/Study";
import TimeManagement from "./components/TimeManagement/TimeManagement";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/study" element={<Study />} />
          <Route path="/time" element={<TimeManagement />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
