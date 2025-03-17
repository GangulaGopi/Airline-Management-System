import React from "react";
import "./Home.css"; // Ensure this file exists

function Home() {
  return (
    <div className="home-container">
      <h2 className="home-title">Welcome to Airline Management System</h2>

      {/* Airline Management Attributes */}
      <div className="cards-container">
        <div className="card">
          <h3>Available Flights</h3>
          <p>150+</p>
          <button>View Flights</button>
        </div>

        <div className="card">
          <h3>Active Bookings</h3>
          <p>320</p>
          <button>Manage Bookings</button>
        </div>

        <div className="card">
          <h3>Passenger Records</h3>
          <p>5000+</p>
          <button>View Passengers</button>
        </div>

        <div className="card">
          <h3>Flight Schedules</h3>
          <p>120 Planned</p>
          <button>View Schedule</button>
        </div>

        <div className="card">
          <h3>Canceled Flights</h3>
          <p>5 Today</p>
          <button>Check Status</button>
        </div>

        <div className="card">
          <h3>Total Revenue</h3>
          <p>$2.5M</p>
          <button>View Reports</button>
        </div>

        <div className="card">
          <h3>Customer Feedback</h3>
          <p>85% Positive</p>
          <button>View Reviews</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
