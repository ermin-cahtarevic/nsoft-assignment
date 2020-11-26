import React from 'react';

import './filter-bar.css';
import FilterTag from '../FilterTag';

const FilterBar = ({ filters, removeFilter, clearFilters }) => {
  return (
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
};

export default FilterBar;
