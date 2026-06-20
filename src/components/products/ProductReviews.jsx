import React, { useState } from "react";
import "./ProductReviews.css";

function ProductReviews() {

  const [reviews, setReviews] =
    useState([]);

  const [review, setReview] =
    useState("");

  const [rating, setRating] =
    useState(5);

  const submitReview = () => {

    if (!review) return;

    setReviews([
      ...reviews,
      {
        id: Date.now(),
        review,
        rating
      }
    ]);

    setReview("");
    setRating(5);
  };

  return (
    <div className="reviews-section">

      <h2>
        Customer Reviews
      </h2>

      <div className="review-form">

        <select
          value={rating}
          onChange={(e) =>
            setRating(e.target.value)
          }
        >
          <option value="5">
            ⭐⭐⭐⭐⭐
          </option>
          <option value="4">
            ⭐⭐⭐⭐
          </option>
          <option value="3">
            ⭐⭐⭐
          </option>
          <option value="2">
            ⭐⭐
          </option>
          <option value="1">
            ⭐
          </option>
        </select>

        <textarea
          placeholder="Write review..."
          value={review}
          onChange={(e) =>
            setReview(e.target.value)
          }
        />

        <button
          onClick={submitReview}
        >
          Submit Review
        </button>

      </div>

      {reviews.map(item => (

        <div
          key={item.id}
          className="review-card"
        >

          <h4>
            {"⭐".repeat(item.rating)}
          </h4>

          <p>
            {item.review}
          </p>

        </div>

      ))}

    </div>
  );
}

export default ProductReviews;