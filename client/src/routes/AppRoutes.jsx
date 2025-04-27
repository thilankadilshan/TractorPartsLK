import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import NotFound404 from "../pages/404/NotFound404";
import Spinner from "../components/Loader/Spinner";
import AIChatButton from "../components/AIChatButton/AIChatButton"; // Import AIChatButton
import AuthForm from "../pages/Auth/AuthForm";
import Homepage from "../pages/Buyer/HomePage/HomePage";
import BrandPage from "../pages/Brand/BrandPage";
import ShopsPage from "../pages/Buyer/Shops/ShopsPage";
import PartsPage from "../pages/Buyer/Parts/PartsPage";
import EventsPage from "../pages/Buyer/Events/EventsPage";
import Chatbot from "../components/Chatbot/Chatbot";

const AppRoutes = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 400); // Spinner delay
    return () => clearTimeout(timer);
  }, [location]);

  if (loading) return <Spinner />;

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />

        {/* Buyer section */}
        <Route path="/home" element={<Homepage />} />
        <Route path="/shop" element={<ShopsPage />} />
        <Route path="/parts" element={<PartsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/chatbot" element={<Chatbot />} />

        {/* Tractor Brand Pages */}
        <Route path="/brands/:brandName" element={<BrandPage />} />

        {/* Auth */}
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/login" element={<Navigate to="/auth" />} />
        <Route path="/register" element={<Navigate to="/auth" />} />

        {/* 404 Not Found */}
        <Route path="/404" element={<NotFound404 />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>

      {/* 🚀 Only show AIChatButton after loading finished */}
      {!loading && <AIChatButton />}
    </>
  );
};

export default AppRoutes;
