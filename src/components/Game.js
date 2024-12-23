
import React, { useState } from 'react';
import LevelSelection from './LevelSelection';
import CellsContainer from './CellContainer';

function Game() {
  const [level, setLevel] = useState('easy');
  const [numbers, setNumbers] = useState(generateNumbers(level));

  function generateNumbers(level) {
    let numbers;
    switch(level) {
      case 'easy' :
        numbers = [1,2,3,4,1,2,3,4];
        break;

        case 'normal' :
          numbers = [1,2,3,4,5,6,1,2,3,4,5,6,];
        break;

        case 'hard' :
          numbers = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
        break;

        default :
        numbers=[]
  }

  for(let i = numbers.length - 1; i>0; i--) {
    const j = Math.floor(Math.random() * i);
  const temp = numbers[i]
  numbers[i] = numbers[j]
  numbers[j] = temp;
  } 
   return numbers;
}
  function handleLevelChange(newLevel) {
    setLevel(newLevel);
    setNumbers(generateNumbers(newLevel));
  }

  const [lastClickedIndex, setLastClickedIndex] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState(0);

  function handleCellClick(index) {
    if (lastClickedIndex === null) {
      setLastClickedIndex(index);
    } else if (numbers[lastClickedIndex] === numbers[index]) {
      setMatchedPairs(matchedPairs + 1);
      setLastClickedIndex(null);
    } else {
      setLastClickedIndex(null);
    }
  }

  return (
    <div>
      <h1>Welcome! Memory Game</h1>
      <h4>Matched Pairs : { matchedPairs}</h4>
      <LevelSelection onLevelChange={handleLevelChange} />
      <CellsContainer numbers={numbers} onClick={handleCellClick}/>
    <button>Start Game</button>
    </div>
  );
}

export default Game;
