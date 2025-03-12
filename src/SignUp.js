import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
    phone: "",
  });

  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "password") {
      const strongPasswordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      setPasswordError(
        strongPasswordRegex.test(value)
          ? ""
          : "Password must be at least 8 characters, include one uppercase, one lowercase, one number, and one special character."
      );
    }
  };

  const validateStep = () => {
    const { username, email, password, confirmPassword, fullName, gender, dob, country, phone } = formData;

    if (step === 1) {
      if (!username || !email || !password || !confirmPassword) {
        setError("All fields are required.");
        return false;
      }
      if (passwordError) {
        setError("Please enter a strong password.");
        return false;
      }
      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return false;
      }
    } else if (step === 2) {
      if (!fullName || !gender || !dob) {
        setError("All fields are required.");
        return false;
      }
    } else if (step === 3) {
      if (!country || !phone) {
        setError("All fields are required.");
        return false;
      }
    }
    setError("");
    return true;
  };

  const nextStep = () => {
    if (validateStep()) setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = async () => {
    if (!validateStep()) return;

    try {
      const { data } = await axios.get("http://localhost:3001/users");
      const userExists = data.some((user) => user.email === formData.email);

      if (userExists) {
        setError("User already exists with this email.");
        return;
      }

      await axios.post("http://localhost:3001/users", formData);
      alert("Registration Successful!");
      navigate("/login");
    } catch (err) {
      setError("Error registering user. Try again.");
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up - Step {step} of 3</h2>

      {error && <p className="error">{error}</p>}

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
          <div className="gender-options">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
                required
              />
              Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
                required
              />
              Female
            </label>
          </div>

          <label>Date of Birth:</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        </div>
      )}

      {step === 3 && (
        <div className="step">
          <label>Country:</label>
          <select name="country" value={formData.country} onChange={handleChange} required>
            <option value="">Select Country</option>
            <option value="India">🇮🇳 India (+91)</option>
            <option value="USA">🇺🇸 USA (+1)</option>
            <option value="UK">🇬🇧 UK (+44)</option>
            <option value="Australia">🇦🇺 Australia (+61)</option>
            <option value="Canada">🇨🇦 Canada (+1)</option>
          </select>

          <label>Phone Number:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
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
