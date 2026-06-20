import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { jsPDF } from "jspdf";
import api from "../api/api";
import "./Orders.css";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await api.get("/orders/");
        setOrders(response.data.reverse());
      } catch (error) {
        console.log(error);
        alert("Please login to view orders");
      }
    };

    fetchOrders();
  }, []);

  const handleTrackOrder = (order) => {
    alert(
      `Order ID: #${order.id}\n\nStatus: ${order.status}`
    );
  };

  const handleDownloadInvoice = (order) => {
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("RCBK E-Commerce Invoice", 20, 20);

    doc.setFontSize(12);
    doc.text(`Order ID: #${order.id}`, 20, 50);
    doc.text(`Price: Rs.${order.total_amount}`, 20, 65);
    doc.text(`Status: ${order.status}`, 20, 80);
    doc.text(`Date: ${new Date(order.created_at).toLocaleString()}`, 20, 95);

    doc.line(20, 110, 190, 110);
    doc.text("Thank you for shopping with RCBK!", 20, 130);

    doc.save(`Invoice-${order.id}.pdf`);
  };

  return (
    <Layout>
      <div className="orders-container">
        <h1>My Orders</h1>

        {orders.length === 0 ? (
          <div className="no-orders">
            <h2>No Orders Found</h2>
            <p>Place an order to see it here.</p>
          </div>
        ) : (
          orders.map((order) => (
            <div className="order-card" key={order.id}>
              <h3>Order ID : #{order.id}</h3>

              <p>Price : ₹{order.total_amount}</p>

              <p>
                Status :
                <span className="status"> {order.status}</span>
              </p>

              <p>
                Ordered On :{" "}
                {new Date(order.created_at).toLocaleString()}
              </p>

              <button onClick={() => handleTrackOrder(order)}>
                Track Order
              </button>

              <button
                className="invoice-btn"
                onClick={() => handleDownloadInvoice(order)}
              >
                Download Invoice
              </button>
            </div>
          ))
        )}
      </div>
    </Layout>
  );
}

export default Orders;
