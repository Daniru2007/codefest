import React, { useEffect, useState } from "react";
import "./Typing.css";

const TYPING = 1;
const WAITING = 2;
const DELETING = 3;

const TYPING_SPEED = 50;
const DELETING_SPEED = 50;
const DELAY = 2000;

function Typing({ texts }) {
    const [textIndex, setTextIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [state, setState] = useState(TYPING);

    const onTyping = () => {
        if (currentText === texts[textIndex]) return setState(WAITING);
        const timeout = setInterval(() => {
            setCurrentText(texts[textIndex].slice(0, currentText.length + 1));
        }, TYPING_SPEED);
        return () => clearTimeout(timeout);
    };

    const onWaiting = () => {
        const timeout = setTimeout(() => {
            setState(DELETING);
        }, DELAY);
        return () => clearTimeout(timeout);
    };

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
