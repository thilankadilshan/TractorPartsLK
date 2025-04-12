import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import './App.css';



const App = () => {
    return (
        <div>
            <Header />
            {/* Additional components can be added here */}
            <HeroSection />
        </div>
    );
};

export default App;