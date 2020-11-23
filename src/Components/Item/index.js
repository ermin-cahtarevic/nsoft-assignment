import React from 'react';

import './item.css';

const Item = ({ job }) => {
  return (
    <div className="item">
      <div className="item-left">
        <div className={job.featured ? 'featured-line featured' : 'featured-line'} />
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
        <span>{job.role}</span>
        <span>{job.level}</span>
        {
          job.languages.map(language => (
            <span key={language}>{language}</span>
          ))
        }
        {
          job.tools.map(tool => (
            <span key={tool}>{tool}</span>
          ))
        }
      </div>
    </div>
  );
};

export default Item;
