import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import Profile from "./Profile";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import Navbar from "./Navbar";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);
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
    <div className="app-container">
      {/* Navbar */}
      <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />

      {/* Main Content */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login setAuth={setIsAuthenticated} />} />
          <Route path="/signup" element={<SignUp setAuth={setIsAuthenticated} />} />
          <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
