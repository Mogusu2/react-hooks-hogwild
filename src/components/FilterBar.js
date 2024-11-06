// src/components/FilterBar.js
import React from 'react';

function FilterBar({ setFilterGreased, setSortCriteria }) {
  return (
    <div>
      <label>
        Greased:
        <input type="checkbox" onChange={(e) => setFilterGreased(e.target.checked)} />
      </label>
      <label>
        Sort by:
        <select onChange={(e) => setSortCriteria(e.target.value)}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </label>
    </div>
  );
}

export default FilterBar;
