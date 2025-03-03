import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = ({ setAuth }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    gender: "",
    dob: "",
    country: "",
    phone: "+91",
  });

  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.name === "password") {
      const strongPasswordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      setPasswordError(
        strongPasswordRegex.test(e.target.value)
          ? ""
          : "Password must be at least 8 characters, include one uppercase, one lowercase, one number, and one special character."
      );
    }
  };

  const nextStep = () => {
    if (step === 1 && passwordError) return;
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    if (formData.password !== formData.confirmPassword) {
      return;
    }

    localStorage.setItem("user", JSON.stringify(formData));
    localStorage.setItem("isAuthenticated", "true");

    if (typeof setAuth === "function") {
      setAuth(true);
    }

    navigate("/login");
  };

  return (
    <div className="signup-container">
      <h2>Sign Up - Step {step} of 3</h2>

      {step === 1 && (
        <div className="step">
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />

          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          {passwordError && <p className="error">{passwordError}</p>}

          <label>Confirm Password:</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </div>
      )}

      {step === 2 && (
        <div className="step">
          <label>Full Name:</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />

          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <label>Date of Birth:</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        </div>
      )}

      {step === 3 && (
        <div className="step">
          <label>Country:</label>
          <select name="country" value={formData.country} onChange={handleChange} required>
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Australia">Australia</option>
            <option value="Other">Other</option>
          </select>

          <label>Phone Number:</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
      )}

      <div className="buttons">
        {step > 1 && <button onClick={prevStep}>Back</button>}
        {step < 3 && <button onClick={nextStep}>Next</button>}
        {step === 3 && <button onClick={handleSubmit}>Submit</button>}
      </div>
    </div>
  );
};

export default SignUp;
