import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import "./Profile.css";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/AuthSlice";
import api from "../api/api";

function Profile() {
  const [profile, setProfile] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await api.get("/profile/");
        setProfile(response.data);
      } catch (error) {
        alert("Please login again");
        navigate("/login");
      }
    };

    getProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("currentUser");

    dispatch(logout());
    navigate("/login");
  };

  return (
    <Layout>
      <div className="profile-container">
        <div className="profile-card">
          <h1>My Profile</h1>

          <div className="profile-section">
            <h3>Personal Information</h3>

            <p>
              <strong>Username:</strong>{" "}
              {profile?.username || "Loading..."}
            </p>

            <p>
              <strong>Email:</strong>{" "}
              {profile?.email || "No Email"}
            </p>
          </div>

          <div className="profile-section">
            <h3>Recent Orders</h3>

            <p>No orders found</p>

            <button
              className="profile-btn"
              onClick={() => navigate("/orders")}
            >
              View All Orders
            </button>
          </div>

          <div className="profile-section">
            <h3>Account Settings</h3>

            <button
              className="profile-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;