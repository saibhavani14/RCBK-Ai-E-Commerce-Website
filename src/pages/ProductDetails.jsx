import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { useParams } from "react-router-dom";
import api from "../api/api";

import ProductReviews from "../components/products/ProductReviews";
import RelatedProducts from "../components/products/RelatedProducts";

import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/products/${id}/`);

        setProduct(response.data);
        setSelectedImage(response.data.image);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    try {
      await api.post("/cart/", {
        product: product.id,
        quantity: 1,
      });

      alert("Added to Cart Successfully");
    } catch (error) {
      console.log(error);
      alert("Please login to add product to cart");
    }
  };

  const handleAddToWishlist = async () => {
    try {
      await api.post("/wishlist/", {
        product: product.id,
      });

      alert("Added to Wishlist Successfully");
    } catch (error) {
      console.log(error);
      alert("Please login to add product to wishlist");
    }
  };

  if (loading) {
    return (
      <Layout>
        <h1>Loading...</h1>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <h1>Product Not Found</h1>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="product-details-container">
        <div className="product-image">
          <img
            src={selectedImage || product.image}
            alt={product.name}
            className="main-image"
          />

          <div className="gallery">
            <img
              src={product.image}
              alt={product.name}
              className="thumbnail"
              onClick={() => setSelectedImage(product.image)}
            />
          </div>
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>

          <h2>₹{product.price}</h2>

          <h3>Description</h3>
          <p>{product.description}</p>

          <p>
            <strong>Category:</strong> {product.category}
          </p>

          <p>
            <strong>Stock:</strong> {product.stock}
          </p>

          <div className="btn-group">
            <button onClick={handleAddToCart}>
              Add To Cart
            </button>

            <button
              className="wishlist-btn"
              onClick={handleAddToWishlist}
            >
              Add To Wishlist
            </button>
          </div>
        </div>
      </div>

      <RelatedProducts />
      <ProductReviews />
    </Layout>
  );
}

export default ProductDetails;