import React from 'react';

import './filter-bar.css';
import FilterTag from '../FilterTag';

const FilterBar = ({ filters }) => {
  return (
    <div className="filter-bar">
      <div className="filter-list">
        {
          filters.map(filter => (
            <FilterTag key={filter} filter={filter} />
          ))
        }
      </div>
      <button className="clear-filters">Clear</button>
    </div>
  );
};

export default FilterBar;
