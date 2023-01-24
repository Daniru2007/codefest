import React from "react";
import Quiz from "react-quiz-component";

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { BsArrowLeftCircleFill } from "react-icons/bs";

import content from "./StudyContent";
import "./StudyQuiz.css";

function StudyQuiz({ userId }) {
  const { grade } = useParams();
  const { subject } = useParams();
  const { lesson } = useParams();

  const [data, setData] = useState({});
  const [subjectData, setSubjectData] = useState({});
  let quiz = {
    quizTitle: `Answer those ${subject} questions in lesson ${lesson}`,
    nrOfQuestions: "4",
    questions: subjectData?.[lesson]?.["quiz"],
  };

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
    // fetchJson();
    setData(content);
    setSubjectData(content[grade][subject]);
  }, []);
  useEffect(() => {}, [data]);
  return (
    <div className="project__quiz">
      <Link to={`../study/${grade}/${subject}/${lesson}`}>
        <BsArrowLeftCircleFill className="back__button" />
      </Link>
      {(() => {
        if (quiz.questions) {
          return <Quiz quiz={quiz} />;
        } else {
          return <></>;
        }
      })()}
    </div>
  );
}

export default StudyQuiz;
