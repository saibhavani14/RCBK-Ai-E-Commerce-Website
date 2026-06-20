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

      alert("Order Updated");
    } catch (error) {
      console.log(error);
      alert("Failed to update order");
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
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>

                <td>₹{order.total_amount}</td>

                <td>{order.status}</td>

                <td>
                  {new Date(
                    order.created_at
                  ).toLocaleDateString()}
                </td>

                <td>
                  <select
                    value={order.status}
                    onChange={(e) =>
                      updateStatus(
                        order.id,
                        e.target.value
                      )
                    }
                  >
                    <option value="Pending">
                      Pending
                    </option>

                    <option value="Processing">
                      Processing
                    </option>

                    <option value="Delivered">
                      Delivered
                    </option>
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