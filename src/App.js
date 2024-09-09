import React, { useState } from 'react';
import GameBoard from './components/GameBoard/GameBoard.jsx';
import ScoreBoard from './components/ScoreBoard/ScoreBoard.jsx';
import ControlPanel from './components/ControlPanel/ControlPanel.jsx';
import './App.css';

const App = () => {
  const [score, setScore] = useState(0);
  const [matches, setMatches] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const handleStart = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setMatches(0);
    console.log('Game Started');
  };

  const handleReset = () => {
    setScore(0);
    setMatches(0);
    setGameStarted(false);
    setGameOver(false);
    console.log('Game Reset');
  };

  const handleMatch = () => {
    setScore((prevScore) => prevScore + 10);
    setMatches((prevMatches) => prevMatches + 1);
    checkGameOver();
  };

  const handleMismatch = () => {
    setScore((prevScore) => (prevScore > 0 ? prevScore - 5 : 0));
  };

  // 检查游戏是否结束
  const checkGameOver = () => {
    // 假设当匹配数达到一定数量时游戏结束
    if (matches + 1 >= 8) { // 8 可以根据实际需求调整
      setGameOver(true);
      setGameStarted(false);
      console.log('Game Over!');
    }
  };

  return (
    <div className="app">
      <ScoreBoard score={score} matches={matches} />
      {gameStarted ? (
        <GameBoard onMatch={handleMatch} onMismatch={handleMismatch} />
      ) : (
        <p className="game-message">{gameOver ? 'Game Over! Click Reset to play again.' : 'Click Start to play.'}</p>
      )}
      <ControlPanel onStart={handleStart} onReset={handleReset} />
    </div>
  );
};

export default App;