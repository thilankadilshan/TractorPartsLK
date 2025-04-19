import React, { useState } from 'react';
import Login from './Login/Login';
import Register from './Register/Register';
import './AuthForm.css';

const AuthForm = () => {
  const [flipped, setFlipped] = useState(false);

  const handleSwitch = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="auth-wrapper">
      <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <Login onSwitch={handleSwitch} />
          </div>
          <div className="flip-card-back">
            <Register onSwitch={handleSwitch} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
