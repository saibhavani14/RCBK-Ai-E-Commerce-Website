import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AiSearch.css";

function AiSearch() {

  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {

    if (!query.trim()) return;

    navigate(
      `/products?search=${query}`
    );

  };

  return (
    <div className="ai-search-container">

      <h2 className="ai-search-title">
        AI Product Search
      </h2>

      <div className="ai-search-box">

        <input
          type="text"
          className="ai-search-input"
          placeholder="Search laptops, mobiles, headphones..."
          value={query}
          onChange={(e) =>
            setQuery(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />

        <button
          className="ai-search-btn"
          onClick={handleSearch}
        >
          Search
        </button>

      </div>

    </div>
  );
}

export default AiSearch;