import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import "./Payment.css";

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePayment = () => {
    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }

    alert(`Payment Successful via ${paymentMethod}`);
  };

  return (
    <Layout>
      <div className="payment-container">

        <h1>Select Payment Method</h1>

        <div className="payment-options">

          <label>
            <input
              type="radio"
              name="payment"
              value="Google Pay"
              onChange={(e) =>
                setPaymentMethod(e.target.value)
              }
            />
            Google Pay
          </label>

          <label>
            <input
              type="radio"
              name="payment"
              value="PhonePe"
              onChange={(e) =>
                setPaymentMethod(e.target.value)
              }
            />
            PhonePe
          </label>

          <label>
            <input
              type="radio"
              name="payment"
              value="Paytm"
              onChange={(e) =>
                setPaymentMethod(e.target.value)
              }
            />
            Paytm
          </label>

          <label>
            <input
              type="radio"
              name="payment"
              value="UPI"
              onChange={(e) =>
                setPaymentMethod(e.target.value)
              }
            />
            UPI
          </label>

          <label>
            <input
              type="radio"
              name="payment"
              value="Cash On Delivery"
              onChange={(e) =>
                setPaymentMethod(e.target.value)
              }
            />
            Cash On Delivery
          </label>

        </div>

        <button
          className="pay-btn"
          onClick={handlePayment}
        >
          Pay Now
        </button>

      </div>
    </Layout>
  );
}

export default Payment;