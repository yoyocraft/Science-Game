import React from "react";
import "./ScoreBoard.css";

const ScoreBoard = ({ score, matches }) => {
  return (
    <div className="score-board">
      <h2>Score: {score}</h2>
      <p>Matches: {matches}</p>
    </div>
  );
};

export default ScoreBoard;
