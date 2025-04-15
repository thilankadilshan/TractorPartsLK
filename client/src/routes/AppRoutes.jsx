// client/src/routes/AppRoutes.jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthForm from '../pages/Auth/AuthForm';
// import other pages if needed (e.g., Home, Dashboard)

function AppRoutes() {
  return (
    <Routes>
      {/* Main Auth Flip Form */}
      <Route path="/auth" element={<AuthForm />} />

      {/* Optional Redirects from /login and /register to /auth */}
      <Route path="/login" element={<Navigate to="/auth" />} />
      <Route path="/register" element={<Navigate to="/auth" />} />

      {/* Add other routes here */}
      {/* Example: <Route path="/" element={<Home />} /> */}
      {/* Example: <Route path="/dashboard" element={<Dashboard />} /> */}
    </Routes>
  );
}

export default AppRoutes;
