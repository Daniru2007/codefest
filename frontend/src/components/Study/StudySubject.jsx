import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BsFillArrowRightCircleFill, BsArrowRightCircle } from "react-icons/bs";
import Navbar from "../Utils/Navbar";
import content from "./StudyContent";
import "./StudySubject.css";
import { useState } from "react";

function StudySubject({ userId }) {
  const { grade } = useParams();
  const { subject } = useParams();

  let links = [];

  return (
    <div className="study__subject">
      <Navbar />
      <div className="back__img">
        <h2>Study like you have never done before.</h2>
        <p
          className="home-main__para"
          style={{
            color: "#eeffff",
            marginLeft: "30px",
            marginRight: "30px",
            marginTop: "1px",
            maxWidth: "555px",
            fontSize: "15px",
            width: "350px",
          }}
        >
          Take your subject skills to the next level. Improve greatly by taking
          advantage of our online learning platform.
        </p>
        <a
          className="link"
          style={{
            margin: "10px 30px",
            weight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h4 style={{ display: "inline-block" }}>Take me through!</h4>
          <BsFillArrowRightCircleFill className="link__icon" />
        </a>
      </div>
      <div className="topper"></div>
      <div className="subject__choose">
        {content[grade][subject]["lessons"].map((lesson, ind) => {
          return (
            <Link
              to={`${ind + 1}`}
              className="subject__choose__item grade"
              key={ind}
            >
              {lesson}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default StudySubject;
