import React from 'react';
import FilterTag from '../FilterTag';

import './filter-bar.css';

const FilterBar = ({ filters, removeFilter, clearFilters }) => (
  <div className="filter-bar">
    <div className="filter-list">
      {
        filters.map(filter => (
          <FilterTag key={filter} filter={filter} removeFilter={removeFilter} />
        ))
      }
    </div>
    <button className="clear-filters" onClick={clearFilters}>Clear</button>
  </div>
);

export default FilterBar;
