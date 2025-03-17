import React, { useState, useEffect } from "react";
import "./Profile.css";
import { useNavigate } from "react-router-dom"; // For redirection

const Profile = () => {
  const navigate = useNavigate();
  
  const [profile, setProfile] = useState({
    fullName: "",
    gender: "",
    dob: "",
    country: "",
    phone: "",
    email: "",
    username: "",
    profilePic: "",
    passportNumber: "",
    frequentFlyer: "",
    travelHistory: "No recent trips",
  });

  const [editingSection, setEditingSection] = useState(null);
  const [editedProfile, setEditedProfile] = useState({ ...profile });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setProfile(storedUser);
      setEditedProfile(storedUser);
    }
  }, []);

  const handleEdit = (section) => {
    setEditingSection(section);
  };

  const handleChange = (e) => {
    setEditedProfile({
      ...editedProfile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (section) => {
    setProfile(editedProfile);
    localStorage.setItem("user", JSON.stringify(editedProfile));
    setEditingSection(null);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setEditedProfile({ ...editedProfile, profilePic: reader.result });
      setProfile({ ...profile, profilePic: reader.result });
      localStorage.setItem("user", JSON.stringify({ ...profile, profilePic: reader.result }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteProfile = () => {
    localStorage.removeItem("user"); // Remove profile from local storage
    alert("Profile deleted successfully!");
    navigate("/signup"); // Redirect to Sign Up page
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated"); // Remove authentication status
    alert("You have been logged out.");
    navigate("/login"); // Redirect to Login page
  };

  return (
    <div className="profile-container">
      <h2>My Profile</h2>

      {/* Profile Picture Section */}
      <div className="profile-pic-section">
        <img src={profile.profilePic || "default-profile.png"} alt="Profile" className="profile-pic" />
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </div>

      {/* Personal Information */}
      <div className="profile-section">
        <h3>Personal Information</h3>
        {editingSection === "personal" ? (
          <>
            <label>Full Name:</label>
            <input type="text" name="fullName" value={editedProfile.fullName} onChange={handleChange} />

            <label>Gender:</label>
            <select name="gender" value={editedProfile.gender} onChange={handleChange}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <label>Date of Birth:</label>
            <input type="date" name="dob" value={editedProfile.dob} onChange={handleChange} />

            <button onClick={() => handleSave("personal")}>Save</button>
          </>
        ) : (
          <>
            <p><strong>Full Name:</strong> {profile.fullName}</p>
            <p><strong>Gender:</strong> {profile.gender}</p>
            <p><strong>Date of Birth:</strong> {profile.dob}</p>
            <button onClick={() => handleEdit("personal")}>Edit</button>
          </>
        )}
      </div>

      {/* Contact Details */}
      <div className="profile-section">
        <h3>Contact Details</h3>
        {editingSection === "contact" ? (
          <>
            <label>Country:</label>
            <input type="text" name="country" value={editedProfile.country} onChange={handleChange} />

            <label>Phone:</label>
            <input type="text" name="phone" value={editedProfile.phone} onChange={handleChange} />

            <button onClick={() => handleSave("contact")}>Save</button>
          </>
        ) : (
          <>
            <p><strong>Country:</strong> {profile.country}</p>
            <p><strong>Phone:</strong> {profile.phone}</p>
            <button onClick={() => handleEdit("contact")}>Edit</button>
          </>
        )}
      </div>

      {/* Account Details */}
      <div className="profile-section">
        <h3>Account Details</h3>
        {editingSection === "account" ? (
          <>
            <label>Email:</label>
            <input type="email" name="email" value={editedProfile.email} onChange={handleChange} />

            <label>Username:</label>
            <input type="text" name="username" value={editedProfile.username} onChange={handleChange} />

            <button onClick={() => handleSave("account")}>Save</button>
          </>
        ) : (
          <>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Username:</strong> {profile.username}</p>
            <button onClick={() => handleEdit("account")}>Edit</button>
          </>
        )}
      </div>

      {/* Airline-Related Details */}
      <div className="profile-section">
        <h3>Airline Management Details</h3>
        {editingSection === "airline" ? (
          <>
            <label>Passport Number:</label>
            <input type="text" name="passportNumber" value={editedProfile.passportNumber} onChange={handleChange} />

            <label>Frequent Flyer Status:</label>
            <select name="frequentFlyer" value={editedProfile.frequentFlyer} onChange={handleChange}>
              <option value="None">None</option>
              <option value="Silver">Silver</option>
              <option value="Gold">Gold</option>
              <option value="Platinum">Platinum</option>
            </select>

            <button onClick={() => handleSave("airline")}>Save</button>
          </>
        ) : (
          <>
            <p><strong>Passport Number:</strong> {profile.passportNumber}</p>
            <p><strong>Frequent Flyer Status:</strong> {profile.frequentFlyer}</p>
            <p><strong>Travel History:</strong> {profile.travelHistory}</p>
            <button onClick={() => handleEdit("airline")}>Edit</button>
          </>
        )}
      </div>

      {/* Logout and Delete Profile Buttons */}
      <div className="profile-buttons">
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
        <button className="delete-btn" onClick={handleDeleteProfile}>Delete Profile</button>
      </div>
    </div>
  );
};

export default Profile;
