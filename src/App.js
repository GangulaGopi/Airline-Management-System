import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard'; // Importing the Dashboard component
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import Profile from './Profile';
import Footer from './Footer';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status when app loads
  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(authStatus === "true");
  }, []);

  const handleLogin = () => {
    localStorage.setItem("isAuthenticated", "true");
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="app-container">
        {/* Header */}
        <header className="header">
          <h1>Airline Management</h1>
          <div className="auth-buttons">
            {isAuthenticated ? (
              <>
                <Link to="/"><button className="btn home-btn">Home</button></Link>
                <Link to="/profile"><button className="btn">My Profile</button></Link>
                <button className="btn logout-btn" onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <>
                <Link to="/login"><button className="btn">Login</button></Link>
                <Link to="/signup"><button className="btn signup-btn">Sign Up</button></Link>
              </>
            )}
          </div>
        </header>

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
            <Route path="/login" element={<Login setAuth={setIsAuthenticated} />} />
            <Route path="/signup" element={<SignUp setAuth={setIsAuthenticated} />} />
            <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/dashboard" element={<Dashboard />} /> {/* Adding route for Dashboard */}
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
