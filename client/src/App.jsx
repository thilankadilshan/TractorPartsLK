// App.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import AdminRoutes from "./routes/AdminRoute";
import { ChatBotProvider } from "./context/ChatBotContext";
import BackToTop from "./components/BackToTop/BackToTop";

const RouterWrapper = () => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  if (isAdmin) {
    return <AdminRoutes />;
  }

  return (
    <ChatBotProvider>
      <>
        <AppRoutes />
        <BackToTop />
      </>
    </ChatBotProvider>
  );
};

const App = () => <RouterWrapper />;

export default App;
