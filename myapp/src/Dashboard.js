import React from "react";
import "./Home.css"; // Reusing the same styling as Home.js

function Dashboard() {
  return (
    <div className="home-container">
      <h2>Welcome to Our Dashboard</h2>
      <p className="large-text">THE SKY IS WAITING FOR YOU</p>

      {/* Image Section (Using the same path as Home.js) */}
      <div className="image-container">
        <img src="/airline-logo.jpg" alt="Dashboard Overview" />
      </div>
    </div>
  );
}

export default Dashboard;
