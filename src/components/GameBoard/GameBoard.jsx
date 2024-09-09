import React, { useState } from "react";
import "./GameBoard.css";
import Tile from "../Tile/Tile";

import amara from "../../assets/amara.png";
import blank from "../../assets/blank.png";
import empty from "../../assets/empty.png";
import flak from "../../assets/flak.png";
import moze from "../../assets/moze.png";
import spacer from "../../assets/spacer.png";
import zane from "../../assets/zane.png";

const imageMap = {
  amara,
  blank,
  empty,
  flak,
  moze,
  spacer,
  zane,
};

// 初始化网格数据，使用图片名称作为标识符
const initialGrid = [
  ["amara", "flak", "moze", "zane"],
  ["spacer", "empty", "blank", "amara"],
  ["flak", "zane", "moze", "empty"],
  ["blank", "amara", "spacer", "flak"],
];

const GameBoard = ({ onMatch, onMismatch }) => {
  const [grid, setGrid] = useState(initialGrid);
  const [selectedTiles, setSelectedTiles] = useState([]);

  const handleTileClick = (rowIndex, colIndex) => {
    if (
      selectedTiles.length < 2 &&
      !selectedTiles.some(
        (tile) => tile.rowIndex === rowIndex && tile.colIndex === colIndex
      )
    ) {
      const newSelectedTiles = [...selectedTiles, { rowIndex, colIndex }];
      setSelectedTiles(newSelectedTiles);

      // 当选中两个 Tile 时，检查是否匹配
      if (newSelectedTiles.length === 2) {
        checkForMatch(newSelectedTiles);
      }
    }
  };

  // 检查匹配逻辑
  const checkForMatch = (tiles) => {
    const [firstTile, secondTile] = tiles;
    const firstImage = grid[firstTile.rowIndex][firstTile.colIndex];
    const secondImage = grid[secondTile.rowIndex][secondTile.colIndex];

    if (firstImage === secondImage) {
      onMatch();
    } else {
      onMismatch();
    }

    setTimeout(() => {
      setSelectedTiles([]);
    }, 500);
  };

  const renderCell = (cell, rowIndex, colIndex) => {
    const isSelected = selectedTiles.some(
      (tile) => tile.rowIndex === rowIndex && tile.colIndex === colIndex
    );

    return (
      <Tile
        key={`${rowIndex}-${colIndex}`}
        image={imageMap[cell]}
        altText={cell}
        onClick={() => handleTileClick(rowIndex, colIndex)}
        isSelected={isSelected}
      />
    );
  };

  return (
    <div className="game-board">
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => renderCell(cell, rowIndex, colIndex))
      )}
    </div>
  );
};

export default GameBoard;
