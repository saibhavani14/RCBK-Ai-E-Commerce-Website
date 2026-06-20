import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import api from "../api/api";
import "./AIAssistant.css";

function AIAssistant() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) {
      setAnswer("");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/ai/search/", {
        prompt: question,
      });

      setAnswer(response.data.answer);
    } catch (error) {
  console.log("AI Error:", error);
  console.log("AI Response:", error.response?.data);
  alert(JSON.stringify(error.response?.data || error.message));
} finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="ai-container">
        <h1>🤖 RCBK AI Product Search</h1>

        <p>Ask AI for product suggestions</p>

        <input
          type="text"
          className="ai-search-input"
          placeholder="Best mobiles under ₹20000..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAsk();
            }
          }}
        />

        <button
          onClick={handleAsk}
          className="ai-btn"
        >
          {loading ? "Searching..." : "Search"}
        </button>

        <div className="ai-results">
          {answer && (
            <div className="ai-answer-card">
              <h3>AI Recommendation</h3>
              <p style={{ whiteSpace: "pre-line" }}>
                {answer}
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default AIAssistant;