import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Importing menu icons
import "./Navbar.css"; // Ensure you have a Navbar.css for styling

const Navbar = ({ isAuthenticated, handleLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="navbar-title">Airline Management</h1>

      {/* Mobile Menu Button */}
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Navbar Links */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        {isAuthenticated ? (
          <>
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/dashboard" className="nav-item">Dashboard</Link>
            <Link to="/profile" className="nav-item">My Profile</Link>
            <button onClick={handleLogout} className="nav-item logout">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-item">Login</Link>
            <Link to="/signup" className="nav-item signup">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
