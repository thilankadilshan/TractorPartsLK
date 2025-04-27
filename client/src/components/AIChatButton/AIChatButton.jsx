// src/components/AIChatButton.jsx

import React from "react";
import "./AIChatButton.css";
import { FaRobot } from "react-icons/fa";

const AIChatButton = () => {
  return (
    <div className="ai-chat-container">
      <div className="tooltip">Chat with Ai BOt!</div>
      <button className="ai-chat-button">
        <div className="circle-icon">
          <FaRobot className="chat-icon" />
        </div>
        <span className="chat-text">Chat!</span>
      </button>
    </div>
  );
};

export default AIChatButton;
