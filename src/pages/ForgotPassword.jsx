import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";
import "./ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async () => {
    if (!email) {
      alert("Please enter email");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post(
  "/forgot-password/",
  { email },
  {
    headers: {
      Authorization: "",
    },
  }
);

      alert(response.data.message);
     } catch (error) {
  console.log("Forgot password error:", error.response?.data);
  alert(JSON.stringify(error.response?.data || error.message));
}
finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot-container">
      <div className="forgot-box">
        <h2>Forgot Password</h2>

        <p>
          Enter your registered email. We will send a
          reset password link to your email.
        </p>

        <input
          type="email"
          placeholder="Enter registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={handleForgotPassword}>
          {loading ? "Sending..." : "Send Reset Link"}
        </button>

        <p>
          <Link to="/login">Back to Login</Link>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;