import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import Item from '../Item';

import './list.css';

const List = () => {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    axios.get(
      './data.json'
    ).then(res => {
      setTimeout(() => {
        setJobList(res.data);
      }, 800);
    })
  }, []);

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
      {
        jobList.map(job => (
          <Item job={job} key={job.id} />
        ))
      }
    </div>
  );
};

export default List;
