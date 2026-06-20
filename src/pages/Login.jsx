import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import "./Login.css";
import api from "../api/api";

import { useDispatch } from "react-redux";
import { login } from "../redux/AuthSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter username/email and password");
      return;
    }

    try {
      const response = await api.post("/token/", {
        username: email,
        password: password,
      });

      localStorage.setItem(
        "accessToken",
        response.data.access
      );

      localStorage.setItem(
        "refreshToken",
        response.data.refresh
      );

      const userData = {
        username: email,
        email: email,
      };

      localStorage.setItem(
        "currentUser",
        JSON.stringify(userData)
      );

      dispatch(login(userData));

      alert("Login Successful");
      navigate("/profile");
    }  catch (error) {
  console.log("Login error:", error);
  console.log("Response:", error.response?.data);
  alert(JSON.stringify(error.response?.data));
}
  };

  return (
    <Layout>
      <div className="login-container">
        <div className="login-left">
          <h2>Login</h2>

          <p>
            Get access to your Orders,
            Wishlist and Recommendations
          </p>
        </div>

        <div className="login-right">
          <input
            type="text"
            placeholder="Enter Username"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button
            className="login-btn"
            onClick={handleLogin}
          >
            Login
          </button>

          <p>
            New User?
            <Link to="/signup">
              Create an account
            </Link>
          </p>

          <p>
            <Link to="/forgot-password">
              Forgot Password?
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Login;