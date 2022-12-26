import React from "react";
import Tilty from "react-tilty";
import "./HomeDisplay.css";

function HomeDisplay({ setCursorOnLinks }) {
  return (
    <div className="home-display">
      <div className="home-display__contents">
        <h1 className="home-display__content__title">What Do we Have?</h1>
        <div className="contents">
          <Tilty className="content study">
            <div className="img__back"></div>
            <div className="description">
              <h2>Study</h2>
              <p>
                On our website, you will find a variety of resources to help you
                succeed in your studies.
              </p>
            </div>
          </Tilty>

          <Tilty className="content time">
            <div className="img__back"></div>
            <div className="description">
              <h2>Time Management</h2>

              <p>
                We provide a variety of tools to help you with your time
                management.
              </p>
            </div>
          </Tilty>
        </div>
      </div>
    </div>
  );
}

export default HomeDisplay;
