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
  ];

  return (
    <div className="messages">
      <h2>Messages</h2>
      {messages.map((msg, idx) => (
        <div key={idx} className="message">
          <p>
            <strong>From:</strong> {msg.from}
          </p>
          <p>{msg.content}</p>
          <span>{msg.date}</span>
        </div>
      ))}
    </div>
  );
};

export default Messages;
