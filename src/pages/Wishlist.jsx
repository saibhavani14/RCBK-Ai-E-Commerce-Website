import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import "./Wishlist.css";
import api from "../api/api";

function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);

  const fetchWishlist = async () => {
    try {
      const response = await api.get("/wishlist/");
      setWishlistItems(response.data);
    } catch (error) {
      alert("Please login to view wishlist");
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  const removeItem = async (id) => {
    await api.delete(`/wishlist/${id}/`);
    fetchWishlist();
  };

  const handleMoveToCart = async (item) => {
    await api.post("/cart/", {
      product: item.product,
      quantity: 1,
    });

    await api.delete(`/wishlist/${item.id}/`);

    fetchWishlist();
    alert("Moved to Cart");
  };

  return (
    <Layout>
      <div className="wishlist-page">
        <h1 className="wishlist-title">
          My Wishlist ❤️
        </h1>

        {wishlistItems.length === 0 ? (
          <div className="empty-wishlist">
            <h2>Your Wishlist is Empty</h2>
            <p>Add products to your wishlist.</p>
          </div>
        ) : (
          <div className="wishlist-grid">
            {wishlistItems.map((item) => (
              <div key={item.id} className="wishlist-card">
                <img
                  src={item.product_image}
                  alt={item.product_name}
                  className="wishlist-image"
                />

                <div className="wishlist-content">
                  <h3>{item.product_name}</h3>

                  <p className="wishlist-price">
                    ₹{item.product_price}
                  </p>

                  <div className="wishlist-buttons">
                    <button
                      className="add-cart-btn"
                      onClick={() => handleMoveToCart(item)}
                    >
                      Move To Cart
                    </button>

                    <button
                      className="remove-wishlist-btn"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Wishlist;