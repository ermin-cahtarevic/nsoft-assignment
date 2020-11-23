import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Item from '../Item';

import './list.css';

const List = () => {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    axios.get(
      './data.json'
    ).then(res => {
      setJobList(res.data);
    })
  }, []);

  if (jobList.length < 1) {
    return <div>Loading...</div>
  }

  return (
    <div className="list">
      {
        jobList.map(job => (
          <Item job={job} key={job.id} />
        ))
      }
    </div>
  );
};

export default List;
