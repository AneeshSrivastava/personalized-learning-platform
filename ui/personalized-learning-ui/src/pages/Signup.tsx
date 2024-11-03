import React, { useState } from "react";
import { registerUser } from "../services/api";
import "../App.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
    console.log("Registering user");
    try {
      const response = await registerUser(email, password);
      setMessage("Registration successful");
      console.log("User registered:", response.data);
    } catch (error) {
      console.error("Error registering user:", error);
      setMessage("Registration failed. Please try again.");
    }
  };

  return (
    <div className="sign-up">
      <h1>Register</h1>
      <div className="form-container">
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label htmlFor="inputEmail" className="form-label">
              Email Address
            </label>
            <input
              className="form-control"
              id="inputEmail"
              aria-describedby="emailHelp"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <label htmlFor="inputPassword" className="form-label">
              Password
            </label>
            <input
              className="form-control mb-3"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <input
              className="form-control mb-3"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required
            />
            <button type="submit" className="btn btn-primary btn-lg">
              Register
            </button>
          </div>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default SignUp;
