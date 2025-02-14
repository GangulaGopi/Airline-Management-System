import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button className="auth-btn">Login</button>
      <p>Don't have an account? <button onClick={() => navigate("/signup")}>Sign Up</button></p>

      <style jsx>{`
        .auth-container { text-align: center; margin-top: 50px; }
        input { display: block; margin: 10px auto; padding: 10px; width: 80%; max-width: 300px; }
        .auth-btn { padding: 10px 20px; background-color: #007bff; color: white; border: none; cursor: pointer; }
      `}</style>
    </div>
  );
}

export default Login;
