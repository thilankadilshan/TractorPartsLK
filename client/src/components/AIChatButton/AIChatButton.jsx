// src/components/AIChatButton.jsx
import React from "react";
import "./AIChatButton.css";
import { FaRobot } from "react-icons/fa";
import { useChatBot } from "../../context/ChatBotContext";

const AIChatButton = () => {
  const { toggleChatBot } = useChatBot();

  return (
    <div className="ai-chat-container">
      <div className="tooltip">Chat with AI Bot!</div>
      <button className="ai-chat-button" onClick={toggleChatBot}>
        <div className="circle-icon">
          <FaRobot className="chat-icon" />
        </div>
        <span className="chat-text">Chat!</span>
      </button>
    </div>
  );
};

export default AIChatButton;
