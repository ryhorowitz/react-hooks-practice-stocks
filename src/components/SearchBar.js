import React from "react";

function SearchBar({ sortBy, setSortBy, setFilterBy }) {

  function handleRadioClick(e) {
    setSortBy(e.target.value)
  }

  function handleSelection(e) {
    setFilterBy(e.target.value)
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={sortBy === 'Alphabetically'}
          onChange={handleRadioClick}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={sortBy === 'Price'}
          onChange={handleRadioClick}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleSelection}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
