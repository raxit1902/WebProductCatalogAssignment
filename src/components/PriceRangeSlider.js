
import React, { useState } from "react";

const PriceRangeSlider = ({ onPriceChange }) => {
  const [price, setPrice] = useState([0, 1000]);

  const handleChange = (event, newValue) => {
    setPrice(newValue);
    onPriceChange(newValue);
  };

  return (
    <div className="sidebar-card price-range-slider">
      <h4>Filter by Price</h4>
      <input
        type="range"
        min={0}
        max={1000}
        value={price[0]}
        onChange={(e) => handleChange(e, [e.target.value, price[1]])}
      />
      <input
        type="range"
        min={0}
        max={1000}
        value={price[1]}
        onChange={(e) => handleChange(e, [price[0], e.target.value])}
      />
      <p>
        Price Range: ${price[0]} - ${price[1]}
      </p>
    </div>
  );
};

export default PriceRangeSlider;
