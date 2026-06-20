import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { useNavigate } from "react-router-dom";

function OTPVerification() {

  const [otp, setOtp] =
    useState("");

  const navigate =
    useNavigate();

  const handleVerify = () => {

    const savedOTP =
      localStorage.getItem(
        "fakeOTP"
      );

    if (
      otp === savedOTP
    ) {

      alert(
        "OTP Verified"
      );

      navigate(
        "/reset-password"
      );

    } else {

      alert(
        "Invalid OTP"
      );

    }
  };

  return (
    <Layout>

      <div className="auth-container">

        <h2>
          OTP Verification
        </h2>

        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e)=>
            setOtp(e.target.value)
          }
        />

        <button
          onClick={handleVerify}
        >
          Verify OTP
        </button>

      </div>

    </Layout>
  );
}

export default OTPVerification;