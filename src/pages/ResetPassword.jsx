import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import api from "../api/api";

function ResetPassword() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const uid = searchParams.get("uid");
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");

  const handleReset = async () => {
    try {
      await api.post("/reset-password/", {
        uid,
        token,
        password,
      });

      alert("Password reset successful");
      navigate("/login");
    } catch (error) {
      alert(JSON.stringify(error.response?.data));
    }
  };

  return (
    <div className="reset-password-page">
      <h2>Reset Password</h2>

      <input
        type="password"
        placeholder="Enter new password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleReset}>
        Reset Password
      </button>
    </div>
  );
}

export default ResetPassword;