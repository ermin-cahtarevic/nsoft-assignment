import React from 'react';

import './tag.css';

const Tag = ({ value }) => {
  return (
    <button className="tag">{value}</button>
  );
};

export default Tag;
