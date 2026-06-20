import React from "react";
import "./RecentlyViewed.css";

const viewedProducts = [
  {
    id: 1,
    name: "Gaming Mouse",
    price: 999,
    image:
      "https://via.placeholder.com/250x200?text=Mouse"
  },
  {
    id: 2,
    name: "Laptop",
    price: 59999,
    image:
      "https://via.placeholder.com/250x200?text=Laptop"
  },
  {
    id: 3,
    name: "Headphones",
    price: 1499,
    image:
      "https://via.placeholder.com/250x200?text=Headphones"
  }
];

function RecentlyViewed() {
  return (
    <div className="recently-viewed">

      <h2>Recently Viewed</h2>

      <div className="recent-grid">

        {viewedProducts.map(item => (

          <div
            key={item.id}
            className="recent-card"
          >

            <img
              src={item.image}
              alt={item.name}
            />

            <h4>{item.name}</h4>

            <p>₹{item.price}</p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default RecentlyViewed;