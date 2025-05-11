// App.jsx
import React from "react";
import { ChatBotProvider } from "./context/ChatBotContext"; // only ChatBotProvider
import AppRoutes from "./routes/AppRoutes";
import BackToTop from "./components/BackToTop/BackToTop";
import AdminRoutes from "./routes/AdminRoute";

const App = () => {
  return (
    <ChatBotProvider>
      {" "}
      {/* ✅ Only wrap with ChatBotProvider */}
      <>
        <AppRoutes />
        <BackToTop />
        <AdminRoutes />
      </>
    </ChatBotProvider>
  );
};

export default App;
