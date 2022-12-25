import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import InvertCursor from "./components/Utils/InvertCursor";
import HomePage from "./components/HomePage/HomePage";

function App() {
  const [onLink, setOnLink] = useState(false);
  return (
    <div className="App">
      <InvertCursor onCursorLink={onLink} />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage setOnLink={setOnLink} />} />
          <Route path="/home" element={<HomePage setOnLink={setOnLink} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
