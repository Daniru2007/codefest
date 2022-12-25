import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./InvertCursor.css";

function InvertCursor({ onCursorLink }) {
    const [position, setPosition] = useState({ x: -50, y: -50 });
    const [isMobile, setIsMobile] = useState(false);
    window.addEventListener("mousemove", (e) => {
        if (
            navigator.userAgent.match(
                /Mobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo\/|Opera Mobi/i
            )
        ) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
        setPosition({
            x: e.clientX,
            y: e.clientY,
        });
    });
    return (
        <div
            className="cursor"
            style={{
                display: isMobile ? "none" : "block",
                top: `${position.y}px`,
                left: `${position.x}px`,
                transform: onCursorLink
                    ? "translate(-50%, -50%) scale(3)"
                    : "translate(-50%, -50%) scale(1)",
            }}
        ></div>
    );
}

export default InvertCursor;
