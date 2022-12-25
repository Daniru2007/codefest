import React from "react";
import Tilty from "react-tilty";
import "./HomeDisplay.css";

function HomeDisplay({ setCursorOnLinks }) {
  return (
    <div className="home-display">
      <h1>What do we Have?</h1>
      <div className="home-display__contents">
        <Tilty className="home-display__content time">
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
        <Tilty className="home-display__content study">
          <h1>Study</h1>
          <p>
            We know that as a student, you are always looking for ways to
            improve your study skills and get the most out of your education. On
            our website, you will find a variety of resources to help you
            succeed in your studies. From tips on how to create a study schedule
            and set goals, to strategies for staying focused and retaining
            information, we have something for every student.{" "}
          </p>
        </Tilty>
      </div>
    </div>
  );
}

export default HomeDisplay;
