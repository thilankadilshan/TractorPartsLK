// client/src/App.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AppRoutes from './routes/AppRoutes';
import './App.css';

const App = () => {
    const location = useLocation();
    const hideHeaderAndHero = location.pathname === '/login' || location.pathname === '/register';

    return (
        <div>
            {!hideHeaderAndHero && <Header />}
            {!hideHeaderAndHero && <HeroSection />}
            <AppRoutes />
        </div>
    );
};

export default App;
