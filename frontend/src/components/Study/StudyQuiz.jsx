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

  let tempContent = content[grade][subject][lesson]["quiz"];
  for (let i = 0; i < tempContent.length; i++) {
    tempContent[i]["point"] = 10;
    tempContent[i]["questionType"] = "text";
    tempContent[i]["answerSelectionType"] = "single";
    tempContent[i]["messageForCorrectAnswer"] = "Correct answer. Good job.";
    tempContent[i]["messageForIncorrectAnswer"] =
      "Incorrect answer. Please try again.";
  }
  let quiz = {
    quizTitle: `Answer those ${subject} questions in lesson ${lesson}`,
    nrOfQuestions: "4",
    questions: tempContent,
  };

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
