import React, { useCallback, useEffect, useState } from "react";
import "./Checkout.css";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const fetchCart = useCallback(async () => {
  try {
    const response = await api.get("/cart/");
    setCartItems(response.data);
  } catch (error) {
    alert("Please login first");
    navigate("/login");
  }
}, [navigate]);

  useEffect(() => {
    fetchCart();
  }, []);

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + Number(item.product_price) * item.quantity,
    0
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const placeOrder = async () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.address
    ) {
      alert("Please fill all fields");
      return;
    }

    if (cartItems.length === 0) {
      alert("Cart is Empty");
      return;
    }

    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }

    try {
      await api.post("/orders/", {
        total_amount: totalPrice,
        status: "Processing",
      });

      for (const item of cartItems) {
        await api.delete(`/cart/${item.id}/`);
      }

      setShowSuccess(true);
    } catch (error) {
      console.log("Order error:", error.response?.data);
      alert(JSON.stringify(error.response?.data || "Unable to place order"));
    }
  };

  const cancelItem = async (id) => {
    await api.delete(`/cart/${id}/`);
    fetchCart();
    navigate("/cart");
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      <div className="checkout-container">
        <div className="shipping-section">
          <h2>Shipping Details</h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
          />

          <textarea
            name="address"
            placeholder="Address"
            onChange={handleChange}
          />
        </div>

        <div className="order-summary">
          <h2>Order Summary</h2>

          {cartItems.map((item) => (
            <div key={item.id} className="summary-item">
              <div>
                <span>
                  {item.product_name} x{item.quantity}
                </span>
                <br />
                <span>
                  ₹{Number(item.product_price) * item.quantity}
                </span>
              </div>

              <button
                className="cancel-btn"
                onClick={() => cancelItem(item.id)}
              >
                Cancel
              </button>
            </div>
          ))}

          <hr />

          <h3>Total: ₹{totalPrice}</h3>

          <h2>Payment Method</h2>

          <div className="payment-options">
            {[
              "Google Pay",
              "PhonePe",
              "Paytm",
              "UPI",
              "Cash On Delivery",
            ].map((method) => (
              <label key={method}>
                <input
                  type="radio"
                  name="payment"
                  value={method}
                  onChange={(e) =>
                    setPaymentMethod(e.target.value)
                  }
                />
                {method}
              </label>
            ))}
          </div>

          <button
            className="place-order-btn"
            onClick={placeOrder}
          >
            Place Order
          </button>
        </div>
      </div>

      {showSuccess && (
        <div className="success-popup">
          <h2>🎉 Order Placed Successfully!</h2>

          <p>Payment Method: {paymentMethod}</p>

          <p>Thank you for shopping with RCBK.</p>

         <button
            onClick={() => {
            setShowSuccess(false);
            navigate("/orders");
           }}
           >
           OK
        </button> 
        </div>
      )}
    </div>
  );
}

export default Checkout;