// App.jsx
import React from "react";
import AppRoutes from "./routes/AppRoutes";
import BackToTop from "./components/BackToTop/BackToTop";

const App = () => {
  return (
    <>
      <AppRoutes />
      <BackToTop />
    </>
  );
};

export default App;
