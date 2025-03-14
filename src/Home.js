import React from 'react';
import './Home.css'; // Ensure this file exists
function Home() {
  return (
    <div className="home-container">
      <h2>Welcome to Airline Management System</h2>
      <p>THE SKY IS WAITING FOR YOU .</p>

      {/* Image Section */}
      <div className="image-container">
        <img src="/airline-logo.jpg" alt="Airline Management" />
      </div>
    </div>
  );
}

export default Home;
