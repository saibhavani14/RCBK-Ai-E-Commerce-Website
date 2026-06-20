import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { useNavigate } from "react-router-dom";

function ResetPassword() {

  const [password,setPassword] =
    useState("");

  const navigate =
    useNavigate();

  const handleReset = () => {

    localStorage.setItem(
      "newPassword",
      password
    );

    alert(
      "Password Updated Successfully"
    );

    navigate("/login");
  };

  return (
    <Layout>

      <div className="auth-container">

        <h2>
          Reset Password
        </h2>

        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e)=>
            setPassword(e.target.value)
          }
        />

        <button
          onClick={handleReset}
        >
          Update Password
        </button>

      </div>

    </Layout>
  );
}

export default ResetPassword;