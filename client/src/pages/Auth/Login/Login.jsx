// src/components/AuthForm/Login/Login.jsx
import React, { useState } from "react";
import "./Login.css";
import cog1 from "../../../assets/cogs/cog1.svg";
import cog2 from "../../../assets/cogs/cog2.svg";
import { useNavigate } from "react-router-dom";

const Login = ({ onSwitch }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }
    console.log("Logging in:", { email, password });
    setError("");
  };

  return (
    <div className="form-container">
      <div className="cog-container">
        <img src={cog1} alt="cog1" className="cog1" />
        <img src={cog2} alt="cog2" className="cog2" />
      </div>
      <h2>Login TracktorpartsLk</h2>
      <form className="form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
        <button
          type="button"
          className="home-btn"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </form>
      <p className="switch-text">
        Don’t have an account? <span onClick={onSwitch}>Register</span>
      </p>
    </div>
  );
};

export default Login;
