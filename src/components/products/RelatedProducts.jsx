import React from "react";
import { Link } from "react-router-dom";
import products from "../../assets/data/products";
import "./RelatedProducts.css";

function RelatedProducts() {

  const relatedProducts =
    products.slice(0, 8);

  return (
    <div className="related-products">

      <h2>
        Customers Also Bought
      </h2>

      <div className="related-grid">

        {relatedProducts.map(
          (product) => (

            <div
              key={product.id}
              className="related-card"
            >

              <img
                src={product.image}
                alt={product.name}
              />

              <h4>
                {product.name}
              </h4>

              <p>
                ₹{product.price}
              </p>

              <Link
                to={`/product/${product.id}`}
              >
                <button>
                  View Product
                </button>
              </Link>

            </div>

          )
        )}

      </div>

    </div>
  );
}

export default RelatedProducts;