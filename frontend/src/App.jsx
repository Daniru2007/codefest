import { useState } from "react";
import "./App.css";
import Navbar from "./components/Utils/Navbar";
import InvertCursor from "./components/Utils/InvertCursor";
import HomePage from "./components/HomePage/HomePage";

function App() {
  const [onLink, setOnLink] = useState(false);
  return (
    <div className="App">
      <InvertCursor onCursorLink={onLink} />
      <HomePage setOnLink={setOnLink} />
    </div>
  );
}

export default App;
