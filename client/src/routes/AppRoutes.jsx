import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import AuthForm from "../pages/Auth/AuthForm";
import Homepage from "../pages/Buyer/HomePage/HomePage";
import NotFound404 from "../pages/404/NotFound404";
import Spinner from "../components/Loader/Spinner";
import BrandPage from "../pages/Brand/BrandPage"; // Import the dynamic brand page
// import ModelPage from "../pages/Model/ModelPage";

const AppRoutes = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 400); // Delay for spinner visibility
    return () => clearTimeout(timer);
  }, [location]);

  if (loading) return <Spinner />;

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />

      {/* Buyer section */}
      <Route path="/home" element={<Homepage />} />

      {/* Tractor Brand Pages - dynamic route */}
      <Route path="/brands/:brandName" element={<BrandPage />} />
      {/* <Route path="/models/:modelName" element={<ModelPage />} /> */}

      {/* Auth */}
      <Route path="/auth" element={<AuthForm />} />
      <Route path="/login" element={<Navigate to="/auth" />} />
      <Route path="/register" element={<Navigate to="/auth" />} />

      {/* 404 Not Found */}
      <Route path="/404" element={<NotFound404 />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
};

export default AppRoutes;
