import React from 'react';
import Helpfulness from '../helpfulness/Helpfulness.js';
import './Answer.css';

var Answer = () => {
  return (
    <div class = 'answer_container'>
      <div class = 'answer_text'>Actual text for the answer here</div>
      {/* <p># # # -images</p> */}

      <div class = 'username_container'>
        <div class ='username'>user1345 | </div>
        <div class = 'help'><Helpfulness /></div>
        <div class = 'report'>Report</div>
      </div>

    </div>
  )
};

export default Answer;