// src/components/FilterBar.js
import React from 'react';

function FilterBar({ setFilterGreased, setSortCriteria }) {
  return (
    <div className="ui menu">
      <div className="item">
        <label>
          <input type="checkbox" onChange={(e) => setFilterGreased(e.target.checked)} />
          Show Greased Hogs Only
        </label>
      </div>
      <div className="item">
        <label>Sort by:</label>
        <select onChange={(e) => setSortCriteria(e.target.value)}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
    </div>
  );
}

export default FilterBar;
