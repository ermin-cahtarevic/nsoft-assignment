import React from 'react';

import './filter-tag.css';

const FilterTag = ({ filter }) => {
  return (
    <div className="filter-tag">
      <span>{filter}</span>
      <button><img src="./images/icon-remove.svg" alt="remove" /></button>
    </div>
  );
};

export default FilterTag;