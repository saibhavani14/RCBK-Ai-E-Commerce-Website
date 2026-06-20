import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    if (
      !name ||
      !email ||
      !mobile ||
      !password ||
      !confirmPassword
    ) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const existingUsers =
  JSON.parse(localStorage.getItem("users")) || [];

const user = {
  name,
  email,
  mobile,
  password,
  role: "user"
};

localStorage.setItem(
  "users",
  JSON.stringify([
    ...existingUsers,
    user
  ])
);

    alert("Account Created Successfully!");

    navigate("/login");
  };

  return (
    <Layout>
      <div className="signup-container">

        <div className="signup-left">
          <h2>Sign Up</h2>
          <p>
            Create your RCBK account and
            start shopping smarter.
          </p>
        </div>

        <div className="signup-right">

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button
            className="signup-btn"
            onClick={handleSignup}
          >
            Create Account
          </button>

          <p>
            Already have an account?{" "}
            <Link to="/login">
              Login
            </Link>
          </p>

        </div>

      </div>
    </Layout>
  );
}

export default Signup;