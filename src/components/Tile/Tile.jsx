import React from "react";
import "./Tile.css";

// Tile 组件
const Tile = ({ image, altText, onClick }) => {
  return (
    <div className="tile" onClick={onClick}>
      <img src={image} alt={altText} className="tile-image" />
    </div>
  );
};

export default Tile;
