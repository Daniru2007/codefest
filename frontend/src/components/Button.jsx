import React from "react";
import { useState, useEffect } from "react";

function Button({ children, theme }) {
  const [isRipple, setIsRipple] = useState(false);
  const [coords, setCoords] = useState({ x: -1, y: -1 });

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRipple(true);

      setTimeout(() => setIsRipple(false), 1000);
    } else {
      setIsRipple(false);
    }
  }, [coords]);

  useEffect(() => {
    if (!isRipple) setCoords({ x: -1, y: -1 });
  }, [isRipple]);

  const handleClick = (e) => {
    setCoords({
      x: e.clientX - e.target.offsetLeft,
      y: e.clientY - e.target.offsetTop,
    });
  };
  return (
    <button onClick={handleClick} className={`button ${theme}`}>
      {isRipple ? (
        <span
          className="button__ripple"
          style={{ left: coords.x, top: coords.y }}
        ></span>
      ) : (
        ""
      )}
      <span onClick={handleClick} className={`button__content ${theme}`}>
        {children}
      </span>
    </button>
  );
}

export default Button;
