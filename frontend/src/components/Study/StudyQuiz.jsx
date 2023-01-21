import React from "react";
import Quiz from "react-quiz-component";

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./StudyQuiz.css";

function StudyQuiz() {
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
    fetchJson();
  }, []);
  useEffect(() => {}, [data]);
  return (
    <div className="project__quiz">
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
