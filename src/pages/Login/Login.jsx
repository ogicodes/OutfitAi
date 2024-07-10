import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../Login/Login.scss'

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post("http://localhost:8080/auth", { email, password });
      localStorage.setItem("token", response.data.token);
      setUser(response.data.user);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="login">
      <h2 className="login__header">Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form className="login__form" onSubmit={handleSubmit}>
        <div>
          <input className="login__input" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <input className="login__input" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button className="login__button" type="submit">Login</button>
      </form>
    </div>
  );
}
