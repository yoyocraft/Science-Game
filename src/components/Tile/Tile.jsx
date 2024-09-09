import React from "react";
import "./Tile.css";

const Tile = ({ image, altText, onClick, isSelected }) => {
  return (
    <div className={`tile ${isSelected ? "selected" : ""}`} onClick={onClick}>
      <img src={image} alt={altText} className="tile-image" />
    </div>
  );
};

export default Tile;
