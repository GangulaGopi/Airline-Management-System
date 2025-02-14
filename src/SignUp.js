import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

function SignUp() {
  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form className="auth-form">
        <label>Full Name:</label>
        <input type="text" placeholder="Enter your full name" required />
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" required />
        <label>Password:</label>
        <input type="password" placeholder="Create a password" required />
        <button className="btn signup-btn">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default SignUp;
