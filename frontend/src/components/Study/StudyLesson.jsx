import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BsFillArrowRightCircleFill, BsArrowRightCircle } from "react-icons/bs";
import { HiLightBulb } from "react-icons/hi";
import { useState } from "react";
import Navbar from "../Utils/Navbar";
import "./StudyLesson.css";

function StudyLesson() {
  const { grade } = useParams();
  const { subject } = useParams();
  const { lesson } = useParams();
  const [data, setData] = useState({});
  const [subjectData, setSubjectData] = useState({});

  const fetchJson = () => {
    fetch(`http://localhost:3000/content`)
      .then((response) => {
        return response.json();
      })
      .then((tempData) => {
        setData(tempData);
        setSubjectData(tempData?.[grade]?.[subject]);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchJson();
  }, []);
  useEffect(() => {}, [data]);
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

      <center>
        <iframe
          style={{ borderRadius: "10px", marginTop: "80px" }}
          width="560"
          height="315"
          src={`${subjectData[lesson]?.["ytEmbed"]}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </center>

      <center>
        <Link
          to={"./quiz"}
          className="link"
          style={{
            width: "170px",
            textAlign: "center",
            marginTop: "100px",
            fontSize: "20px",
          }}
        >
          <h3
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Take a Quiz
            <HiLightBulb
              style={{ display: "inline", marginLeft: "2px", color: "#ffcb6b" }}
            />
          </h3>
        </Link>
      </center>
      <div className="subject__choose">
        {subjectData?.[lesson]?.["links"]?.map((lesson, ind) => {
          const [key, val] = Object.entries(lesson)[0];
          return (
            <a
              href={`${val}`}
              className="subject__choose__item grade"
              target={"_blank"}
              key={ind}
            >
              {key}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default StudyLesson;
