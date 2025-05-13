import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import AdminDashboard from "../pages/Admin/Dashboard";
import ManageUsers from "../pages/Admin/ManageUsers";
import ManageProducts from "../pages/Admin/ManageProducts";
import SiteSettings from "../pages/Admin/SiteSettings";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="users" element={<ManageUsers />} />
        <Route path="products" element={<ManageProducts />} />
        <Route path="settings" element={<SiteSettings />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
