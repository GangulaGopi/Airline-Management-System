import React, { useState } from 'react';
import './Footer.css';

function Footer() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <footer className="footer">
      {/* Navigation Links */}
      <div className="footer-links">
        <button onClick={() => setActiveSection('about')}>About Us</button>
        <button onClick={() => setActiveSection('faqs')}>FAQs</button>
        <button onClick={() => setActiveSection('contact')}>Contact</button>
        <button onClick={() => setActiveSection('suggestions')}>Suggestions</button>
        <button onClick={() => setActiveSection('more')}>More</button>
      </div>

      {/* Dynamic Content Based on Selection */}
      <div className="footer-content">
        {activeSection === 'about' && (
          <div>
            <h2>About Us</h2>
            <p>Welcome to our Airline Management System, designed for seamless flight booking and management.</p>
          </div>
        )}
        {activeSection === 'faqs' && (
          <div>
            <h2>FAQs</h2>
            <p><strong>Q: How can I book a flight?</strong> - Use the 'Search Flights' option on the homepage.</p>
            <p><strong>Q: How do I check-in?</strong> - Click on 'Check-In' before your flight.</p>
            <p><strong>Q: How do I cancel a flight?</strong> - Go to 'Manage Bookings' and cancel your reservation.</p>
          </div>
        )}
        {activeSection === 'contact' && (
          <div>
            <h2>Contact Us</h2>
            <p>Email: support@airline.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Airline Street, Aviation City, USA</p>
          </div>
        )}
        {activeSection === 'suggestions' && (
          <div>
            <h2>Suggestions</h2>
            <p>We value your feedback. Let us know how we can improve our services.</p>
            <textarea placeholder="Write your suggestions here..." rows="3"></textarea>
            <button className="submit-btn">Submit</button>
          </div>
        )}
        {activeSection === 'more' && (
          <div>
            <h2>More Information</h2>
            <p>For corporate inquiries, partnerships, or other services, contact us directly.</p>
          </div>
        )}
      </div>

      {/* Copyright & Social Media Links */}
      <p>&copy; 2025 Airline Management. All Rights Reserved.</p>
      <div className="social-links">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </footer>
  );
}

export default Footer;
