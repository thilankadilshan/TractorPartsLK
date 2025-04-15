// client/src/App.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import AppRoutes from './routes/AppRoutes';
import './App.css';

const App = () => {
  const location = useLocation();

  // Hide header and hero on auth page
  const hideHeaderAndHero = location.pathname === '/auth';

  return (
    <div>
      {!hideHeaderAndHero && <Header />}
      {!hideHeaderAndHero && <HeroSection />}
      <AppRoutes />
    </div>
  );
};

export default App;
