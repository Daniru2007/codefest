import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BsFillArrowRightCircleFill, BsArrowRightCircle } from "react-icons/bs";
import { HiLightBulb } from "react-icons/hi";
import { useState } from "react";
import Navbar from "../Utils/Navbar";
import content from "./StudyContent";
import "./StudyLesson.css";

function StudyLesson({ userId }) {
  const { grade } = useParams();
  const { subject } = useParams();
  const { lesson } = useParams();

  return (
    <div className="study__subject">
      <Navbar />
      <div className="study__main__back">
        <h1>Study like you have never done before.</h1>
        <p>
          Take your subject skills to the next level. Improve greatly by taking
          advantage of our online learning platform.
        </p>
        <Link className="link">
          Take me through{" "}
          <BsFillArrowRightCircleFill style={{ marginLeft: "5px" }} />
        </Link>
      </div>
      <div className="study__badge">
        <div className="study__badge__item">
          <svg
            width="84"
            height="81"
            viewBox="0 0 84 81"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M52.5 43.875H57.75V53.3925L66.29 58.1512L63.665 62.5387L52.5 56.3288V43.875ZM66.5 27H17.5V64.125H33.845C32.34 61.0537 31.5 57.6112 31.5 54C31.5 47.7343 34.0812 41.7252 38.6759 37.2946C43.2705 32.8641 49.5022 30.375 56 30.375C59.745 30.375 63.315 31.185 66.5 32.6362V27ZM17.5 70.875C15.6435 70.875 13.863 70.1638 12.5503 68.898C11.2375 67.6321 10.5 65.9152 10.5 64.125V16.875C10.5 13.1287 13.615 10.125 17.5 10.125H21V3.375H28V10.125H56V3.375H63V10.125H66.5C68.3565 10.125 70.137 10.8362 71.4497 12.102C72.7625 13.3679 73.5 15.0848 73.5 16.875V37.4625C77.84 41.715 80.5 47.5537 80.5 54C80.5 60.2657 77.9188 66.2748 73.3241 70.7054C68.7295 75.1359 62.4978 77.625 56 77.625C49.315 77.625 43.26 75.06 38.85 70.875H17.5ZM56 37.6312C51.4979 37.6312 47.1803 39.3558 43.9969 42.4255C40.8134 45.4953 39.025 49.6587 39.025 54C39.025 63.045 46.62 70.3688 56 70.3688C58.2292 70.3688 60.4365 69.9454 62.496 69.1227C64.5555 68.3001 66.4269 67.0944 68.0031 65.5745C69.5794 64.0545 70.8298 62.25 71.6829 60.264C72.5359 58.2781 72.975 56.1496 72.975 54C72.975 44.955 65.38 37.6312 56 37.6312Z"
              fill="white"
            />
          </svg>
          <h3>Learn on your own timeline</h3>
        </div>
        <div className="study__badge__item">
          <svg
            width="78"
            height="78"
            viewBox="0 0 78 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38.9993 0.666992C17.801 0.666992 0.666016 17.917 0.666016 39.0003C0.666016 60.0837 17.916 77.3337 38.9993 77.3337C60.0827 77.3337 77.3327 60.0837 77.3327 39.0003C77.3327 17.917 60.0827 0.666992 38.9993 0.666992ZM38.9993 69.667C22.056 69.667 8.33268 55.9437 8.33268 39.0003C8.33268 22.057 22.056 8.33366 38.9993 8.33366C55.9427 8.33366 69.666 22.057 69.666 39.0003C69.666 55.9437 55.9427 69.667 38.9993 69.667ZM23.666 46.667L19.8327 23.667L31.3327 31.3337L38.9993 19.8337L46.666 31.3337L58.166 23.667L54.3327 46.667H23.666ZM25.8127 54.3337C24.5093 54.3337 23.666 53.4903 23.666 52.187V50.5003H54.3327V52.187C54.3327 53.4903 53.4893 54.3337 52.186 54.3337H25.8127Z"
              fill="white"
            />
          </svg>
          <h3>Master all your subjects</h3>
        </div>
        <div className="study__badge__item">
          <svg
            width="88"
            height="88"
            viewBox="0 0 88 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M69.6667 65.9997H33C31.0551 65.9997 29.1898 65.2271 27.8146 63.8518C26.4393 62.4765 25.6667 60.6113 25.6667 58.6663V14.6663C25.6667 12.7214 26.4393 10.8562 27.8146 9.48089C29.1898 8.10562 31.0551 7.33301 33 7.33301H36.6667V25.6663L44 20.1663L51.3333 25.6663V7.33301H69.6667C71.6116 7.33301 73.4768 8.10562 74.8521 9.48089C76.2274 10.8562 77 12.7214 77 14.6663V58.6663C77 60.6113 76.2274 62.4765 74.8521 63.8518C73.4768 65.2271 71.6116 65.9997 69.6667 65.9997ZM62.3333 73.333V80.6663H18.3333C16.3884 80.6663 14.5231 79.8937 13.1479 78.5185C11.7726 77.1432 11 75.2779 11 73.333V21.9997H18.3333V73.333H62.3333Z"
              fill="white"
            />
          </svg>
          <h3>All subjects are available</h3>
        </div>
      </div>

      <center>
        <iframe
          className="yt-vid"
          src={`${content[grade][subject][lesson]["ytEmbed"]}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
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
        {content[grade][subject][lesson]["links"].map((lesson, ind) => {
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
