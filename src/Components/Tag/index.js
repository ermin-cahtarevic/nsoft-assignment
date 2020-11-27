import React from 'react';

import './tag.css';

const Tag = ({ value, addFilter }) => (
  <button className="tag" onClick={() => addFilter(value)}>{value}</button>
);

export default Tag;
