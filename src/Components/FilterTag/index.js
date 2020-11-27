import React from 'react';

import './filter-tag.css';

const FilterTag = ({ filter, removeFilter }) => (
  <div className="filter-tag">
    <span>{filter}</span>
    <button onClick={() => removeFilter(filter)}><img src="./images/icon-remove.svg" alt="remove" /></button>
  </div>
);

export default FilterTag;