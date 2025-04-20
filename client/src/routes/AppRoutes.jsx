import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import AuthForm from "../pages/Auth/AuthForm";
import Homepage from "../pages/Buyer/HomePage/HomePage";
import NotFound404 from "../pages/404/NotFound404";
// import NotFound from "../pages/NotFound";
import Spinner from "../components/Loader/Spinner";
import TafePage from "../pages/Brands/TafePage";
import MahindraPage from "../pages/Brands/MahindraPage";
import SonalikaPage from "../pages/Brands/SonalikaPage";
import JohnDeerePage from "../pages/Brands/JohnDeerePage";

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
      {/* Buyer section */}
      <Route path="/home" element={<Homepage />} />

      {/* Tractor Brand Pages */}
      <Route path="/brands/tafe" element={<TafePage />} />
      <Route path="/brands/mahindra" element={<MahindraPage />} />
      <Route path="/brands/sonalika" element={<SonalikaPage />} />
      <Route path="/brands/john-deere" element={<JohnDeerePage />} />

      {/* Auth */}
      <Route path="/auth" element={<AuthForm />} />
      <Route path="/login" element={<Navigate to="/auth" />} />
      <Route path="/register" element={<Navigate to="/auth" />} />

      {/* <Route path="*" element={<NotFound />} /> */}
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  );
};

export default AppRoutes;
