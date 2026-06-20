import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import Layout from "../components/layout/Layout";
import api from "../api/api";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const fetchCart = async () => {
    try {
      const response = await api.get("/cart/");
      setCartItems(response.data);
    } catch (error) {
      console.log(error);
      alert("Please login to view cart");
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const removeItem = async (id) => {
    await api.delete(`/cart/${id}/`);
    fetchCart();
  };

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + Number(item.product_price) * item.quantity,
    0
  );

  return (
    <Layout>
      <div className="cart-page">
        <h2 className="cart-title">Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h3>Your Cart is Empty 🛒</h3>
            <p>Add some products to continue shopping.</p>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.product_image}
                  alt={item.product_name}
                  className="cart-image"
                />

                <div className="cart-details">
                  <h3>{item.product_name}</h3>

                  <p className="price">
                    ₹{item.product_price}
                  </p>

                  <p>Quantity: {item.quantity}</p>

                  <p className="subtotal">
                    Subtotal: ₹
                    {Number(item.product_price) *
                      item.quantity}
                  </p>

                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="cart-summary">
              <h3>Total Amount: ₹{totalPrice}</h3>

              <Link to="/checkout">
                <button className="checkout-btn">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}

export default Cart;