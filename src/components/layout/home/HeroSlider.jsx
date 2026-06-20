import React from "react";
import "./HeroSlider.css";

function HeroSlider() {
  return (
    <div className="hero-slider">
      <img
        src="https://rukminim2.flixcart.com/fk-p-flap/3140/1040/image/60181173b389b01d.png?q=60"
        alt="banner"
      />

      <div className="hero-content">
        <h1>RCBK Mega Sale</h1>
        <p>Up To 70% OFF</p>
        <button>Shop Now</button>
      </div>
    </div>
  );
}

export default HeroSlider;