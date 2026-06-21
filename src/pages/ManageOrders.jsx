import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import api from "../api/api";
import "./ManageOrders.css";

function ManageOrders() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await api.get("/orders/");
      setOrders(response.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load orders");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await api.patch(`/orders/${id}/`, {
        status,
      });

      fetchOrders();
      alert("Order Status Updated");
    } catch (error) {
      console.log("Orders error:", error.response?.data);
      alert(JSON.stringify(error.response?.data || "Failed to load orders"));
    }
  };

  return (
    <Layout>
      <div className="container">
        <h1>Manage Orders</h1>

        <table border="1" width="100%">
          <thead>
            <tr>
              <th>ID</th>
              <th>Total Amount</th>
              <th>Status</th>
              <th>Date</th>
              <th>Update Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>#{order.id}</td>
                <td>₹{order.total_amount}</td>
                <td>{order.status}</td>
                <td>{new Date(order.created_at).toLocaleDateString()}</td>

                <td>
                  <select
                    value={order.status}
                    onChange={(e) =>
                      updateStatus(order.id, e.target.value)
                    }
                  >
                    <option value="Processing">Processing</option>
                    <option value="Packed">Packed</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Out For Delivery">
                      Out For Delivery
                    </option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default ManageOrders;