import React, { useState } from 'react';
import GameBoard from './components/GameBoard/GameBoard.jsx';
import ScoreBoard from './components/ScoreBoard/ScoreBoard.jsx';
import ControlPanel from './components/ControlPanel/ControlPanel.jsx';
import './App.css';

const App = () => {
  const [score, setScore] = useState(0);
  const [matches, setMatches] = useState(0);

  // 开始游戏的逻辑
  const handleStart = () => {
    console.log('Game Started');
    // 可以在这里初始化游戏状态
  };

  // 重置游戏的逻辑
  const handleReset = () => {
    setScore(0);
    setMatches(0);
    console.log('Game Reset');
  };

  return (
    <div className="app">
      <ScoreBoard score={score} matches={matches} />
      <GameBoard />
      <ControlPanel onStart={handleStart} onReset={handleReset} />
    </div>
  );
};

export default App;
