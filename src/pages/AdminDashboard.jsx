import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import AdminSidebar from "../components/admin/AdminSidebar";
import api from "../api/api";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [stats, setStats] = useState({
    products: 0,
    orders: 0,
    users: 0,
    revenue: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await api.get("/admin-stats/");
        setStats(response.data);
      } catch (error) {
        console.log("Dashboard stats error:", error.response?.data);
        alert(JSON.stringify(error.response?.data || "Failed to load dashboard stats"));
      }
    };

    fetchStats();
  }, []);

  return (
    <Layout>
      <div className="admin-layout">
        <AdminSidebar />

        <div className="admin-content">
          <h1>Admin Dashboard</h1>

          <div className="dashboard-cards">
            <div className="dashboard-card">
              <h2>{stats.products}</h2>
              <p>Products</p>
            </div>

            <div className="dashboard-card">
              <h2>{stats.orders}</h2>
              <p>Orders</p>
            </div>

            <div className="dashboard-card">
              <h2>{stats.users}</h2>
              <p>Users</p>
            </div>

            <div className="dashboard-card">
              <h2>₹{stats.revenue}</h2>
              <p>Revenue</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AdminDashboard;