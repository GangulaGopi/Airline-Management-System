import React from "react";
import airlineLogo from "./Assets/airline-logo.jpg"; // Importing the image from the new location




const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Welcome to the Dashboard</h1>
      <p>Welcome to the airline management system dashboard.</p>
      <img src={airlineLogo} alt="Airline Logo" /> {/* Adding the image */}
    </div>
  );
};

export default Dashboard;
