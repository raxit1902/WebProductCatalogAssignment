
import React from "react";

const CategoryList = ({ categories, onCategorySelect }) => {
  return (
    <div className="sidebar-card category-list">
      <h3>All categories</h3>
      <ul>
        <li onClick={() => onCategorySelect("all")}>All categories</li>
        {categories.map((category, index) => (
          <li key={index} onClick={() => onCategorySelect(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
