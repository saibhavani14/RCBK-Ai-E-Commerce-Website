import React, { useState } from "react";
import {
  Link,
  useNavigate
} from "react-router-dom";

import { useSelector } from "react-redux";

import logo from "../../assets/logo/logo.png";

import "./Navbar.css";

function Navbar() {

  const cartItems = useSelector(
    state => state.cart.cartItems
  );

  const wishlistItems = useSelector(
    state => state.wishlist.wishlistItems
  );

  const user = JSON.parse(
    localStorage.getItem("currentUser")
  );

  const [search, setSearch] =
    useState("");

  const navigate =
    useNavigate();

  const handleSearch = () => {

    if (!search.trim()) return;

    navigate(
      `/products?search=${search}`
    );

  };

  return (
    <nav className="navbar">

      <div className="logo">

        <Link to="/">

          <img
            src={logo}
            alt="RCBK Logo"
            className="logo-img"
          />

        </Link>

      </div>

      <div className="search-box">

        <input
          type="text"
          placeholder="Search Products..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />

        <button
          onClick={handleSearch}
        >
          Search
        </button>

      </div>

      <div className="nav-links">

        {user ? (
          <span className="welcome-user">
            Welcome, {user.name}
          </span>
        ) : (
          <Link to="/login">
            Login
          </Link>
        )}

        <Link to="/">
          Home
        </Link>

        <Link to="/admin">
          Admin
        </Link>

        <Link to="/products">
          Products
        </Link>

        <Link to="/ai-assistant">
          AI
        </Link>

        <Link to="/wishlist">
          Wishlist
          <span className="badge">
            {wishlistItems.length}
          </span>
        </Link>

        <Link to="/cart">
          Cart
          <span className="badge">
            {cartItems.length}
          </span>
        </Link>

        <Link to="/orders">
          Orders
        </Link>

        <Link to="/profile">
          Profile
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;