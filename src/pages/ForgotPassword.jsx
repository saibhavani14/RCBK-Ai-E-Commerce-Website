import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { useNavigate } from "react-router-dom";
import "./ForgetPassword.css";

function ForgotPassword() {

  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSendOTP = () => {

    const otp = Math.floor(
      100000 + Math.random() * 900000
    );

    localStorage.setItem(
      "fakeOTP",
      otp
    );

    alert(
      `Demo OTP: ${otp}`
    );

    navigate("/otp-verification");
  };

  return (
    <Layout>

      <div className="auth-container">

        <h2>Forgot Password</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>
            setEmail(e.target.value)
          }
        />

        <button
          onClick={handleSendOTP}
        >
          Send OTP
        </button>

      </div>

    </Layout>
  );
}

export default ForgotPassword;