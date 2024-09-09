import React from "react";
import "./ControlPanel.css";

const ControlPanel = ({ onStart, onReset }) => {
  return (
    <div className="control-panel">
      <button onClick={onStart} className="control-button">
        Start
      </button>
      <button onClick={onReset} className="control-button">
        Reset
      </button>
    </div>
  );
};

export default ControlPanel;
