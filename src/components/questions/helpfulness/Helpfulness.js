import React, { useState } from 'react';
import './Helpfulness.css';
import apiController from '../../../apiController';


var Helpfulness = (props) => {
  var rateHelp;
  var id = props.questionId || props.answerId;

  const [rated, setRated] = useState(false);
  const [helpfulness, setHelp] = useState(props.helpfulness);

  props.subject === 'Q'
  ? rateHelp = apiController.markHelpfulQuestion
  : rateHelp = apiController.markHelpfulAnswer

  var handleClick = (e, id) => {
    e.preventDefault();
    if (!rated) {
      rateHelp(id);
      setRated(true);
      setHelp(helpfulness + 1);
    }
  }

  return (
    <div className = 'help'>
      Helpful?
      <a href ='#'
      onClick = {(e) => handleClick(e, id)}
      className = 'add_link'>
      Yes
      </a>
      ({helpfulness}) |
    </div>
  )
}

export default Helpfulness;