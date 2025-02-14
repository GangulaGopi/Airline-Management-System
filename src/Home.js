import React from 'react';
import './Home.css'; // Ensure this file exists

function Home() {
  return (
    <div className="home-container">
      <h2>Welcome to Airline Management System</h2>
      <p>THE SKY IS WAITING FOR YOU .</p>

      {/* Image Section */}
      <div className="image-container">
        <img src="public\banner.jpg" alt="Airline Management" />
      </div>

      {/* Buttons Section */}
      <div className="button-container">
        <div className="button-card">
          <h3>Search Flights</h3>
          <p>Find and book your next flight.</p>
          <button className="btn">Search Now</button>
        </div>
        <div className="button-card">
          <h3>Manage Bookings</h3>
          <p>View and modify your flight bookings.</p>
          <button className="btn">Manage Now</button>
        </div>
        <div className="button-card">
          <h3>Air Booking</h3>
          <p>Book your flights quickly.</p>
          <button className="btn">Book Now</button>
        </div>
        <div className="button-card">
          <h3>My Trips</h3>
          <p>View your past and upcoming trips.</p>
          <button className="btn">View Trips</button>
        </div>
        <div className="button-card">
          <h3>Check-In</h3>
          <p>Check-in for your flights online.</p>
          <button className="btn">Check-In Now</button>
        </div>
        <div className="button-card">
          <h3>Show Flights</h3>
          <p>See available flights.</p>
          <button className="btn">Show Flights</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
