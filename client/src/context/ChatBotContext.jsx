import React, { createContext, useContext, useState } from "react";

const ChatBotContext = createContext();

export const ChatBotProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatBot = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <ChatBotContext.Provider value={{ isOpen, toggleChatBot }}>
      {children}
    </ChatBotContext.Provider>
  );
};

export const useChatBot = () => useContext(ChatBotContext);
