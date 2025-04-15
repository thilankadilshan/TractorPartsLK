import React, { useState } from 'react';
import './Register.css';
import cog1 from '../../../assets/cogs/cog1.svg';
import cog2 from '../../../assets/cogs/cog2.svg';

const Register = ({ onSwitch }) => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } = form;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Invalid email format.');
      return;
    }

    console.log('Registering:', form);
    setError('');
  };

  return (
    <div className="form-container">
      <div className="cog-container">
        <img src={cog1} alt="cog1" className="cog" />
        <img src={cog2} alt="cog2" className="cog reverse" />
      </div>
      <h2>Register</h2>
      <form className="form" onSubmit={handleRegister}>
        <input type="text" name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} />
        <input type="text" name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Re-enter Password"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Register</button>
      </form>
      <p className="switch-text">
        Already have an account? <span onClick={onSwitch}>Login</span>
      </p>
    </div>
  );
};

export default Register;
