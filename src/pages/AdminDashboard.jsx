import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import AdminSidebar from "../components/admin/AdminSidebar";
import api from "../api/api";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [productsCount, setProductsCount] = useState(0);
  const [ordersCount, setOrdersCount] = useState(0);
  const [usersCount] = useState(1);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const productsRes = await api.get("/products/");
        const ordersRes = await api.get("/orders/");

        setProductsCount(productsRes.data.length);
        setOrdersCount(ordersRes.data.length);

        const totalRevenue = ordersRes.data.reduce(
          (total, order) =>
            total + Number(order.total_amount),
          0
        );

        setRevenue(totalRevenue);
      } catch (error) {
        console.log(error);
        alert("Failed to load dashboard data");
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <Layout>
      <div className="admin-layout">
        <AdminSidebar />

        <div className="admin-content">
          <h1>Admin Dashboard</h1>

          <div className="dashboard-cards">
            <div className="dashboard-card">
              <h2>{productsCount}</h2>
              <p>Products</p>
            </div>

            <div className="dashboard-card">
              <h2>{ordersCount}</h2>
              <p>Orders</p>
            </div>

            <div className="dashboard-card">
              <h2>{usersCount}</h2>
              <p>Users</p>
            </div>

            <div className="dashboard-card">
              <h2>₹{revenue}</h2>
              <p>Revenue</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AdminDashboard;