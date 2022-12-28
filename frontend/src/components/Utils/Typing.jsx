import React, { useEffect, useState } from "react";
import "./Typing.css";

// different states while typing
const TYPING = 1;
const WAITING = 2;
const DELETING = 3;

// Setting up some constants for speed and delay
const TYPING_SPEED = 50;
const DELETING_SPEED = 50;
const DELAY = 2000;

function Typing({ texts }) {
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [state, setState] = useState(TYPING);

  // calls when the typing state occurs
  const onTyping = () => {
    if (currentText === texts[textIndex]) return setState(WAITING);
    const timeout = setInterval(() => {
      setCurrentText(texts[textIndex].slice(0, currentText.length + 1));
    }, TYPING_SPEED);
    return () => clearTimeout(timeout);
  };

  // calls when the waiting state occurs
  const onWaiting = () => {
    const timeout = setTimeout(() => {
      setState(DELETING);
    }, DELAY);
    return () => clearTimeout(timeout);
  };

  // calls when the deleting state occurs
  const onDeleting = () => {
    if (currentText === "") {
      const nextIndex = textIndex + 1;
      setTextIndex(texts[nextIndex] ? nextIndex : 0);
      return setState(TYPING);
    }
    const timeout = setInterval(() => {
      setCurrentText(texts[textIndex].slice(0, currentText.length - 1));
    }, DELETING_SPEED);
    return () => clearTimeout(timeout);
  };

  // this fires when currentText and state are changed
  useEffect(() => {
    switch (state) {
      case TYPING:
        return onTyping();
      case WAITING:
        return onWaiting();
      case DELETING:
        return onDeleting();
    }
  }, [currentText, state]);

  return (
    <span className={`typewriter ${state !== WAITING ? "move" : ""}`}>
      {currentText}
    </span>
  );
}

export default Typing;
