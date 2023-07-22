import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Board from "./Components/Board";

function App() {
  const [cardsData, setCardsData] = useState([]);
  const [clickedCardIds, setClickedCardIds] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://rickandmortyapi.com/api/character?page=${Math.floor(
          Math.random() * 41
        )}`
      )
        .then((response) => response.json())
        .then((data) => {
          const shuffledArray = shuffleArray(data.results);
          setCardsData(shuffledArray);
        });
    };

    fetchData();
  }, []);

  function onCardClick(cardId) {
    if (clickedCardIds.includes(cardId)) {
      setCurrentScore(0);
      setClickedCardIds([]);
    } else {
      setCurrentScore(currentScore + 1);

      if (currentScore + 1 > bestScore) {
        setBestScore(currentScore + 1);
      }

      setClickedCardIds([...clickedCardIds, cardId]);
    }

    const shuffledArray = shuffleArray(cardsData);
    setCardsData(shuffledArray);
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  return (
    <div className="app">
      <header className="App-header"></header>
      <div className="App-body">
        <Board data={cardsData} onCardClick={onCardClick} />
      </div>
    </div>
  );
}

export default App;
