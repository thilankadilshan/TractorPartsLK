// client/src/pages/Auth/Login/Login.jsx
import React, { useState } from 'react';
import './Login.css';
import cogs from '../../../assets/cogs.svg';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) return alert('Please fill in all fields.');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return alert('Invalid email format');
    alert('Login successful!');
  };

  return (
    <div className="auth-container">
      <img src={cogs} className="cog" alt="cog" />
      <img src={cogs} className="cog second" alt="cog2" />
      <form className="auth-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <div className="auth-switch" onClick={() => navigate('/register')}>
          Don’t have an account? Register
        </div>
      </form>
    </div>
  );
}

export default Login;
