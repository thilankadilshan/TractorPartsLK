// client/src/routes/AppRoutes.jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthForm from '../pages/Auth/AuthForm';
import Homepage from '../pages/Buyer/HomePage/HomePage'
// import other pages if needed (e.g., Home, Dashboard)

function AppRoutes() {
  return (
    <Routes>

      {/* Buyer section */}
      <Route path='/home' element ={<Homepage/>}/>


      {/*Login*/}
      <Route path="/auth" element={<AuthForm />} />
      <Route path="/login" element={<Navigate to="/auth" />} />
      <Route path="/register" element={<Navigate to="/auth" />} />
      


    </Routes>
  );
}

export default AppRoutes;
