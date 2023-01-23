import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Study from "./components/Study/Study";
import StudyGrade from "./components/Study/StudyGrade";
import StudySubject from "./components/Study/StudySubject";
import StudyLesson from "./components/Study/StudyLesson";
import TimeManagement from "./components/TimeManagement/TimeManagement";
import AboutUs from "./components/AboutUs/AboutUs";
import TimeProject from "./components/TimeManagement/TimeProject";
import TimeProjectItem from "./components/TimeManagement/TimeProjectItem";
import StudyQuiz from "./components/Study/StudyQuiz";

function App() {
  const [userId, setUserId] = useState(0);
  // Setting Up the routes
  return (
    <div className="App">
      <Router>
        <Routes mode="absolute">
          <Route
            path="/"
            element={<HomePage userId={userId} setUserId={() => {}} />}
          />
          <Route
            path="/home"
            element={<HomePage userId={userId} setUserId={() => {}} />}
          />
          <Route
            path="/home/:id"
            element={<HomePage userId={userId} setUserId={setUserId} />}
          />
          <Route
            path="/:id"
            element={<HomePage userId={userId} setUserId={setUserId} />}
          />
          <Route path="/study/" element={<Study userId={userId} />} />
          <Route
            path="/study/:grade"
            element={<StudyGrade userId={userId} />}
          />
          <Route
            path="/study/:grade/:subject"
            element={<StudySubject userId={userId} />}
          />
          <Route
            path="/study/:grade/:subject/:lesson"
            element={<StudyLesson userId={userId} />}
          />
          <Route
            path="/study/:grade/:subject/:lesson/quiz"
            element={<StudyQuiz userId={userId} />}
          />
          <Route path="/study" element={<Study userId={userId} />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/time" element={<TimeManagement userId={userId} />} />
          <Route
            path="time/project"
            element={<TimeProject userId={userId} />}
          />
          <Route
            path="time/project/:id"
            element={<TimeProjectItem userId={userId} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
