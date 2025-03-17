import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src="/AMS_LOGO.png" alt="AMS Logo" className="logo" />
        <h1>Airline Management System</h1>
      </div>
      <p>Book your journey with ease!</p>
    </header>
  );
};

export default Header;
