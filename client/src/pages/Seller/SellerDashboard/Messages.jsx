import React from "react";
import "./styles/Messages.css";

const Messages = () => {
  const messages = [
    { from: "Buyer A", content: "Is part #245 available?", date: "2025-05-12" },
    {
      from: "Buyer B",
      content: "Can I get delivery to Galle?",
      date: "2025-05-11",
    },
    {
      from: "Buyer B",
      content: "Can I get delivery to Galle?",
      date: "2025-05-11",
    },
    {
      from: "Buyer B",
      content: "Can I get delivery to Galle?",
      date: "2025-05-11",
    },
    {
      from: "Buyer B",
      content: "Can I get delivery to Galle?",
      date: "2025-05-11",
    },
    {
      from: "Buyer B",
      content: "Can I get delivery to Galle?",
      date: "2025-05-11",
    },
  ];

  return (
    <div className="messages-page">
      <h2 className="messages-title">Messages</h2>
      <div className="messages-container">
        {messages.map((msg, idx) => (
          <div key={idx} className="message-card">
            <div className="message-header">
              <span className="message-from">From: {msg.from}</span>
              <span className="message-date">{msg.date}</span>
            </div>
            <div className="message-content">{msg.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
