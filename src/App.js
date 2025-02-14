import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Header */}
        <header className="header">
          <h1>Airline Management</h1>
          <div className="auth-buttons">
            <Link to="/">
              <button className="btn home-btn">Home</button>
            </Link>
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
            <Link to="/signup">
              <button className="btn signup-btn">Sign Up</button>
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; 2025 Airline Management. All Rights Reserved.</p>
          <div className="social-links">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/facebook.png" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/instagram.png" alt="Instagram" />
            </a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
