import React from "react";
import Tilty from "react-tilty";
import "./HomeDisplay.css";

function HomeDisplay({ setCursorOnLinks }) {
  const cursor = {
    onMouseEnter: () => setCursorOnLinks(true),
    onMouseLeave: () => setCursorOnLinks(false),
  };
  return (
    <div className="home-display">
      <h1>What do we Have?</h1>
      <div className="home-display__contents">
        <Tilty className="home-display__content time" {...cursor}>
          <h1>Time Management</h1>
          <p>
            We know that as a student, you have a lot on your plate - from
            classes and assignments to extracurricular activities and personal
            responsibilities. It can be overwhelming to try to balance
            everything, but good time management skills can help you stay
            organized and on top of your tasks. On our website, you will find a
            variety of resources to help you improve your time management
            skills.{" "}
          </p>
        </Tilty>
        <Tilty className="home-display__content study" {...cursor}>
          <h1>Study</h1>
          <p>
            We know that as a student, you have a lot on your plate - from
            classes and assignments to extracurricular activities and personal
            responsibilities. It can be overwhelming to try to balance
            everything, but good time management skills can help you stay
            organized and on top of your tasks. On our website, you will find a
            variety of resources to help you improve your time management
            skills.{" "}
          </p>
        </Tilty>
      </div>
    </div>
  );
}

export default HomeDisplay;
