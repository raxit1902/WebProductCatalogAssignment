
import React from "react";

const SortMenu = ({ onSortChange }) => {
  return (
    <div className="sidebar-card sort-menu">
      <h4>Sort</h4>
      <select onChange={(e) => onSortChange(e.target.value)}>
        <option value="price">Price</option>
        <option value="discount">Discount</option>
      </select>
    </div>
  );
};

export default SortMenu;
