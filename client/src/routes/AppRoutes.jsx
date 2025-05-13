import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import NotFound404 from "../pages/404/NotFound404";
import Spinner from "../components/Loader/Spinner";
import AIChatButton from "../components/AIChatButton/AIChatButton";
import AuthForm from "../pages/Auth/AuthForm";
import Homepage from "../pages/Buyer/HomePage/HomePage";
import BrandPage from "../pages/Brand/BrandPage";
import ShopsPage from "../pages/Buyer/Shops/ShopsPage";
import PartsPage from "../pages/Buyer/Parts/PartsPage";
import EventsPage from "../pages/Buyer/Events/EventsPage";
import SearchByImage from "../pages/Buyer/SearchByImage/SearchByImage";
import Profile from "../pages/Buyer/Profile/Profile";
import Chatbot from "../components/Chatbot/Chatbot";
import { useChatBot } from "../context/ChatBotContext";
import ProductView from "../pages/Buyer/ProductView/ProductView";

// Seller components
import SellerRegister from "../pages/Seller/SellerRegister/SellerRegister";
import SellerLayout from "../layouts/SellerLayout";
import SellerDashboard from "../pages/Seller/SellerDashboard/SellerDashboard";
import EditProfile from "../pages/Seller/SellerDashboard/EditProfile";
import Messages from "../pages/Seller/SellerDashboard/Messages";
import ManageProducts from "../pages/Seller/SellerDashboard/ManageProducts";
import AddProducts from "../pages/Seller/SellerDashboard/AddProduts";

const AppRoutes = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const { isOpen } = useChatBot();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, [location]);

  if (loading) return <Spinner />;

  return (
    <>
      <Routes>
        {/* Redirect root to /home */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* Buyer Routes */}
        <Route path="/home" element={<Homepage />} />
        <Route path="/shop" element={<ShopsPage />} />
        <Route path="/parts" element={<PartsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/search-by-image" element={<SearchByImage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product/:id" element={<ProductView />} />

        {/* Tractor Brand Route */}
        <Route path="/brands/:brandName" element={<BrandPage />} />

        {/* Authentication */}
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/login" element={<Navigate to="/auth" />} />
        <Route path="/register" element={<Navigate to="/auth" />} />

        {/* Seller Registration */}
        <Route path="/seller/register" element={<SellerRegister />} />

        {/* ✅ Seller Dashboard Layout with nested routes */}
        <Route path="/seller" element={<SellerLayout />}>
          <Route index element={<SellerDashboard />} />
          <Route path="dashboard" element={<SellerDashboard />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="messages" element={<Messages />} />
          <Route path="manage-products" element={<ManageProducts />} />
          <Route path="add-products" element={<AddProducts />} />
        </Route>

        {/* 404 Not Found */}
        <Route path="/404" element={<NotFound404 />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>

      {/* Floating Chat Button */}
      {!loading && <AIChatButton />}

      {/* Pop-up Chatbot when opened */}
      {isOpen && <Chatbot />}
    </>
  );
};

export default AppRoutes;
