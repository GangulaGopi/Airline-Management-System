import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ setAuth }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.get("http://localhost:3001/users");
      const user = data.find((u) => u.email === formData.email);

      if (!user) {
        setError("User does not exist. Please sign up.");
        return;
      }

      if (user.password !== formData.password) {
        setError("Invalid credentials. Please try again.");
        return;
      }

      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", JSON.stringify(user));
      setAuth(true);
      setLoading(true);

      setTimeout(() => {
        navigate("/");
      }, 5000);
    } catch (err) {
      setError("Error logging in. Try again.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      {loading ? (
        <p>Logging in... Redirecting to home in 5 seconds...</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Password:</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>

          <button type="submit" className="btn">
            Login
          </button>
        </form>
      )}
      <p>
        Don't have an account? <a href="/signup">Sign up here</a>
      </p>
    </div>
  );
};

export default Login;