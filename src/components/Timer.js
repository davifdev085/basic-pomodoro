// Timer.js
import React from "react";

function Timer({ minutes, seconds, currentMode }) {
  return (
    <div>
      <h1>{currentMode === "work" ? "Pomodoro Timer :)" : currentMode === "shortBreak" ? "Pequena Pausa" : "Longa Pausa"}</h1>
      <div className="timer">
        <span>{String(minutes).padStart(2, "0")}</span>:
        <span>{String(seconds).padStart(2, "0")}</span>
        <span>{currentMode === "work"? "" : currentMode === "shortBreak"? " " : " "}</span>
      </div>
    </div>
  );
}

export default Timer;
