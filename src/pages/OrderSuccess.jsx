import React from "react";
import { Link } from "react-router-dom";
import "./OrderSuccess.css";

function OrderSuccess() {
  return (
    <div className="success-page">
      <h1>🎉 Order Placed Successfully!</h1>

      <p>
        Thank you for shopping with RCBK.
      </p>

      <Link to="/">
        <button>
          Continue Shopping
        </button>
      </Link>
    </div>
  );
}

export default OrderSuccess;