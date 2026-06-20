import React, { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import { Link, useSearchParams } from "react-router-dom";
import api from "../api/api";
import "./Products.css";

function Products() {
  const [searchParams] = useSearchParams();

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const urlSearch = searchParams.get("search") || "";
    setSearch(urlSearch);
  }, [searchParams]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productRes = await api.get("/products/");
        const categoryRes = await api.get("/categories/");

        setProducts(productRes.data);
        setCategories(categoryRes.data);
      } catch (error) {
        console.log(error);
        alert("Failed to load products");
      }
    };

    fetchData();
  }, []);

  const filteredProducts = products.filter((product) => {
  const productCategory =
  categories.find((cat) => Number(cat.id) === Number(product.category))?.name ||
  product.category ||
  "Category"; 

    const matchCategory =
      category === "All" || productCategory === category;

    const searchTerm = search.toLowerCase().trim();

    const matchSearch =
      searchTerm === "" ||
      product.name?.toLowerCase().includes(searchTerm) ||
      productCategory?.toLowerCase().includes(searchTerm) ||
      product.description?.toLowerCase().includes(searchTerm);

    return matchCategory && matchSearch;
  });

  return (
    <Layout>
      <div className="container">
        <h1>All Products</h1>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search Products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="category-filter">
          <button onClick={() => setCategory("All")}>
            All
          </button>

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.name)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => {
              const productCategory =
                categories.find((cat) => cat.id === product.category)?.name ||
                "Category";

              return (
                <div key={product.id} className="product-card">
                  <img
                    loading="lazy"
                    src={product.image}
                    alt={product.name}
                  />

                  <h3>{product.name}</h3>

                  <p className="product-price">
                    ₹{product.price}
                  </p>

                  <p className="product-category">
                    {productCategory}
                  </p>

                  <p className="product-desc">
                    {product.description}
                  </p>

                  <Link to={`/product/${product.id}`}>
                    <button>View Details</button>
                  </Link>
                </div>
              );
            })
          ) : (
            <h2>No Products Found</h2>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Products;