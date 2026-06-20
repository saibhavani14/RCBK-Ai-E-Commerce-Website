import React from "react";
import { Link } from "react-router-dom";
import "./FeaturedProducts.css";

function FeaturedProducts() {

  const products = [
    {
      id:1,
      name:"iPhone 15",
      price:"79999",
      image:"https://images.unsplash.com/photo-1592750475338-74b7b21085ab"
    },
    {
      id:2,
      name:"Gaming Laptop",
      price:"69999",
      image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
    },
    {
      id:3,
      name:"Smart Watch",
      price:"3999",
      image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    }
  ];

  return (
    <div className="featured">

      <h2>Featured Products</h2>

      <div className="product-grid">

        {
          products.map(product=>(
            <div
              className="product-card"
              key={product.id}
            >

              <img
                src={product.image}
                alt={product.name}
              />

              <h3>{product.name}</h3>

              <p>₹{product.price}</p>

              <Link to={`/product/${product.id}`}>
                <button>
                  View Details
                </button>
              </Link>

            </div>
          ))
        }

      </div>

    </div>
  );
}

export default FeaturedProducts;