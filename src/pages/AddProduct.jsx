import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import api from "../api/api";
import "./AddProduct.css";

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    image: "",
    stock: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/products/", {
        name: product.name,
        description: product.description,
        price: product.price,
        image: product.image,
        stock: product.stock,
        category: Number(product.category),
      });

      alert("Product Added Successfully");

      setProduct({
        name: "",
        price: "",
        category: "",
        description: "",
        image: "",
        stock: "",
      });

    } catch (error) {
  console.log("Add product error:", error.response?.data);
  alert(JSON.stringify(error.response?.data));
  }
  };

  return (
    <Layout>
      <div className="container">
        <h1>Add Product</h1>

        <form
          onSubmit={handleSubmit}
          className="product-form"
        >
          <input
            name="name"
            placeholder="Product Name"
            value={product.name}
            onChange={handleChange}
          />

          <input
            name="price"
            placeholder="Price"
            value={product.price}
            onChange={handleChange}
          />

          <input
            name="category"
            placeholder="Category ID"
            value={product.category}
            onChange={handleChange}
          />

          <input
            name="stock"
            placeholder="Stock"
            value={product.stock}
            onChange={handleChange}
          />

          <input
            name="image"
            placeholder="Image URL"
            value={product.image}
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Description"
            value={product.description}
            onChange={handleChange}
          />

          <button type="submit">
            Add Product
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default AddProduct;