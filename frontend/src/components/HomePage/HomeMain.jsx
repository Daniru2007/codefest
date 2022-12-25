import React from "react";
import Typing from "../Utils/Typing";
import "./HomeMain.css";

function HomeMain() {
    return (
        <div className="home-main">
            <Typing
                texts={["Best E-Learning Site", "Study Efficiently", "Join Us"]}
            />
            <p className="home-main__para">
                Welcome to our e-learning website! We are excited to offer you a
                wide range of educational materials and resources to help you
                learn and grow. We hope you enjoy your time on our e-learning
                website and we look forward to supporting you in your
                educational journey.
            </p>
        </div>
    );
}

export default HomeMain;
