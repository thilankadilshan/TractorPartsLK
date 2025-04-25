import React from "react";
import { BrowserRouter } from "react-router-dom"; // 👈 import this
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <BrowserRouter>
      {/* 👈 wrap your routes in this */}
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
