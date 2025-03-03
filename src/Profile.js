import React, { useState, useEffect } from "react";
import "./Profile.css";

const Profile = () => {
  const [profile, setProfile] = useState({
    fullName: "",
    gender: "",
    dob: "",
    country: "",
    phone: "",
    email: "",
    username: "",
    profilePic: "",
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
    </div>
  );
};

export default Profile;
