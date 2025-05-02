// App.jsx
import React from "react";
import { ChatBotProvider } from "./context/ChatBotContext"; // only ChatBotProvider
import AppRoutes from "./routes/AppRoutes";
import BackToTop from "./components/BackToTop/BackToTop";

const App = () => {
  return (
    <ChatBotProvider>
      {" "}
      {/* ✅ Only wrap with ChatBotProvider */}
      <>
        <AppRoutes />
        <BackToTop />
      </>
    </ChatBotProvider>
  );
};

export default App;
