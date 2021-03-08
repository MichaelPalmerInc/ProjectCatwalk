import React from 'react';
import './Helpfulness.css';

var number = 0;

var helpfulness = (props) => {
  return (
    <div class = 'help'>
      Helpful? <a href ='#'>Yes</a> ({props.helpfulness}) |
</div>
  )
}

export default helpfulness;