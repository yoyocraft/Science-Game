import React, { useState } from "react";
import "./GameBoard.css"; // 导入样式

// 导入素材图片
import amara from "../../assets/amara.png";
import blank from "../../assets/blank.png";
import empty from "../../assets/empty.png";
import flak from "../../assets/flak.png";
import moze from "../../assets/moze.png";
import spacer from "../../assets/spacer.png";
import zane from "../../assets/zane.png";

// 定义图片映射
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

const GameBoard = () => {
  const [grid, setGrid] = useState(initialGrid);

  // 渲染单元格
  const renderCell = (cell, rowIndex, colIndex) => {
    return (
      <div key={`${rowIndex}-${colIndex}`} className="grid-cell">
        <img src={imageMap[cell]} alt={cell} className="cell-image" />
      </div>
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
