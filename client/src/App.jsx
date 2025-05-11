import React from "react";
import { ChatBotProvider } from "./context/ChatBotContext";
import AppRoutes from "./routes/AppRoutes";
import BackToTop from "./components/BackToTop/BackToTop";

const App = () => {
  return (
    <ChatBotProvider>
      <AppRoutes />
      <BackToTop />
    </ChatBotProvider>
  );
};

export default App;
