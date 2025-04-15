import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import AuthForm from '../pages/Auth/AuthForm';
import Homepage from '../pages/Buyer/HomePage/HomePage';
import NotFound from '../pages/NotFound';
import Spinner from '../components/Loader/Spinner'; // Make sure path is correct

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

      {/* Auth */}
      <Route path="/auth" element={<AuthForm />} />
      <Route path="/login" element={<Navigate to="/auth" />} />
      <Route path="/register" element={<Navigate to="/auth" />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
