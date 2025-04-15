// client/src/pages/Auth/Register/Register.jsx
import React, { useState } from 'react';
import './Register.css';
import cogs from '../../../assets/cogs.svg';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [form, setForm] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const { fname, lname, email, password, confirmPassword } = form;
    if (!fname || !lname || !email || !password || !confirmPassword)
      return alert('Fill all fields.');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return alert('Invalid email');
    if (password !== confirmPassword) return alert('Passwords do not match');
    alert('Registration successful!');
  };

  return (
    <div className="auth-container">
      <img src={cogs} className="cog" alt="cog" />
      <img src={cogs} className="cog second" alt="cog2" />
      <form className="auth-form" onSubmit={handleRegister}>
        <h2>Sign Up</h2>
        <input type="text" placeholder="First Name" name="fname" onChange={handleChange} />
        <input type="text" placeholder="Last Name" name="lname" onChange={handleChange} />
        <input type="email" placeholder="Email Address" name="email" onChange={handleChange} />
        <input type="password" placeholder="Password" name="password" onChange={handleChange} />
        <input type="password" placeholder="Re-enter Password" name="confirmPassword" onChange={handleChange} />
        <button type="submit">Register</button>
        <div className="auth-switch" onClick={() => navigate('/login')}>
          Already have an account? Login
        </div>
      </form>
    </div>
  );
}

export default Register;
