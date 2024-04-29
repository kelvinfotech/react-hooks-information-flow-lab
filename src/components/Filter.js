import React from "react";

function Filter({ selectedCategory, handleCategoryChange }) {
  return (
    <div className="Filter">
      <select name="filter" value={selectedCategory} onChange={handleCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
