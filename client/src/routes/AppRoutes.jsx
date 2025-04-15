
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Auth/Login/Login';
import Register from '../pages/Auth/Register/Register';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Add your main app routes */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
