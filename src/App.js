//estilo
import "./App.css";

//data
import { wordsList } from "./Data/words";

//Components
import StartScreen from "./Components/StartScreen";
import Game from "./Components/Game/index";
import GameOver from "./Components/GameOver/index";

//React
import { useCallback, useEffect, useState } from "react";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState();
  const [words] = useState(wordsList);

  const pickWordAndCategory = () => {
    //pegando categoria aleatórias
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    //pegando uma palavra aleatória
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  };

  // função que estarta o Game passada como prop para o componente GAME
  const startGame = () => {
    const { word, category } = pickWordAndCategory();

    //criando uma array com as letras daa palavra
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((lette) => lette.toLowerCase());
    console.log(word, category);
    console.log(wordLetters);

    //setando os estados
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(letters);

    setGameStage(stages[1].name);
  };

  //função que sorteia a letra do input
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };

  //função que reinicia o GAME
  const retry = () => {
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
      {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
