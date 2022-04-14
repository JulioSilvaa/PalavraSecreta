import React from "react";
import "./style.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h1>Palavra Secreta</h1>
      <p>Clique no botão abaixo para iniciar o Jogo</p>
      <button onClick={startGame}>Começar a jogar</button>
    </div>
  );
};

export default StartScreen;
