// Controls.js
import React from "react";

function Controls({ isActive, startStopTimer, resetTimer, startShortBreak, startLongBreak }) {
  return (
    <div className="controls">
      <button onClick={startStopTimer}>{isActive ? "Pausar" : "Iniciar"}</button>
      <button onClick={resetTimer}>Reiniciar</button>
      <button onClick={startShortBreak}>Pequena Pausa</button>
      <button onClick={startLongBreak}>Longa Pausa</button>
    </div>
  );
}

export default Controls;