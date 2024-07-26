import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../Register/Register.scss'

export default function Register({ setUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/register`, { name, email, password });
      localStorage.setItem("token", response.data.token);
      setUser(response.data.user);
      navigate("/dashboard");
    } catch (err) {
      setError("Registration failed: " + err.response.data.message);
    }
  };

  return (
    <div className="register">
      <h2 className="register__header">Register</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form className="register__form" onSubmit={handleSubmit}>
        <div>
          <input className="register__input" placeholder='Name' type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <input className="register__input" placeholder='Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <input className="register__input" placeholder='Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button className="register__button" type="submit">Register</button>
      </form>
    </div>
  );
}
