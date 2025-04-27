// // src/components/AIChatButton.jsx

// import React from "react";
// import "./AIChatButton.css";
// import { FaRobot } from "react-icons/fa";

// const AIChatButton = () => {
//   return (
//     <div className="ai-chat-container">
//       <div className="tooltip">Chat with Ai BOt!</div>
//       <button className="ai-chat-button">
//         <div className="circle-icon">
//           <FaRobot className="chat-icon" />
//         </div>
//         <span className="chat-text">Chat!</span>
//       </button>
//     </div>
//   );
// };

// export default AIChatButton;

// src/components/AIChatButton.jsx

import React from "react";
import "./AIChatButton.css";
import { FaRobot } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // 🚀 import useNavigate

const AIChatButton = () => {
  const navigate = useNavigate(); // 🚀 create navigate function

  const handleClick = () => {
    navigate("/chatbot"); // 🚀 Go to /chatbot page
  };

  return (
    <div className="ai-chat-container">
      <div className="tooltip">Chat with AI Bot!</div>
      <button className="ai-chat-button" onClick={handleClick}>
        {" "}
        {/* 🚀 added onClick */}
        <div className="circle-icon">
          <FaRobot className="chat-icon" />
        </div>
        <span className="chat-text">Chat!</span>
      </button>
    </div>
  );
};

export default AIChatButton;
