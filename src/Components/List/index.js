import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import Item from '../Item';
import FilterBar from '../FilterBar';

import './list.css';

const List = () => {
  const [jobList, setJobList] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    axios.get(
      './data.json'
    ).then(res => {
      setJobList(res.data);
    })
  }, []);

  const addFilter = value => {
    if (filters.includes(value)) return;

    const temp = filters;
    temp.push(value);

    setFilters([...temp]);
  }

  const removeFilter = value => {
    const temp = filters;
    temp.splice(temp.findIndex(filter => filter === value), 1)
    setFilters([...temp])
  }

  const clearFilters = () => setFilters([]);

  const filtered = filters.length < 1 ? jobList : (
    jobList.filter(job => {
      const tags = [job.role, job.level, ...job.languages, ...job.tools];
      return filters.every(filter => tags.includes(filter));
    })
  );

  if (jobList.length < 1) {
    return (
      <div className="loader-wrap">
        <Loader
          type="Oval"
          color="hsl(180, 29%, 50%)"
        />
      </div>
    );
  };

  return (
    <div className="list">
      { filters.length > 0 && <FilterBar filters={filters} removeFilter={removeFilter} clearFilters={clearFilters} /> }
      {
        filtered.map(job => (
          <Item job={job} key={job.id} addFilter={addFilter} />
        ))
      }
    </div>
  );
};

export default List;
