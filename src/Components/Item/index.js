import React from 'react';
import Tag from '../Tag';

import './item.css';

const Item = ({ job }) => {
  return (
    <div className="item">
      <div className={job.featured ? 'featured-line featured' : 'featured-line'} />
      <div className="content-wrap">
        <div className="item-left">
          <img src={job.logo} className="job-logo" alt={job.company} />
          <div className="job-description">
            <div className="job-description-top">
              <span>{job.company}</span>
              { job.new && <span className="new-job">New!</span> }
              { job.featured && <span className="featured-job">Featured</span> }
            </div>
            <h3>{job.position}</h3>
            <div className="job-description-bottom">
              <span>{job.postedAt}</span>
              <span className="job-description-dot" />
              <span>{job.contract}</span>
              <span className="job-description-dot" />
              <span>{job.location}</span>
            </div>
          </div>
        </div>
        <div className="item-right">
          <Tag value={job.role} />
          <Tag value={job.level} />
          {
            job.languages.map(language => (
              <Tag key={language} value={language} />
            ))
          }
          {
            job.tools.map(tool => (
              <Tag key={tool} value={tool} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Item;
