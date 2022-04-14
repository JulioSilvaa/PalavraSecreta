import React from "react";
import "./Game.css";

const Game = ({ verifyLetter }) => {
  return (
    <div>
      <div>Game</div>
      <button onClick={verifyLetter}>Jogando</button>
    </div>
  );
};

export default Game;
