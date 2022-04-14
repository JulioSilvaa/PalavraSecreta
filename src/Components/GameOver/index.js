import React from "react";
import "./GameOver.css";

const GameOver = ({ retry }) => {
  return (
    <div>
      <div>GameOver</div>
      <button onClick={retry}>reset Game</button>
    </div>
  );
};

export default GameOver;
