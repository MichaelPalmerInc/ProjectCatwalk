import React from 'react';
import Helpfulness from '../helpfulness/Helpfulness.js';
import './Answer.css';
import apiController from '../../../apiController';

var Answer = (props) => {

  var answerId = props.answer.answer_id;


  var name = props.answer.answerer_name;
  var date = new Date(props.answer.date);
  var year = date.getFullYear();
  var day = date.getDate();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  var monthName = months[date.getMonth()];
  var formatDate = `${monthName} ${day}, ${year}`;

  var handleReport = (e) => {
    e.preventDefault();
    apiController.reportAnswer(answerId);

  }

  return (
    <div className = 'answer_container'>
      <div className = 'answer_text'>{props.answer.body}</div>
      <div className = 'username_container'>
        by

        <span className = {name === 'Seller'
          ? 'seller'
          : 'username'}>
          {` ${name}`} |
        </span>

        <div> {formatDate} </div>
        <div className = 'help'>
          <Helpfulness helpfulness = {props.answer.helpfulness} subject = 'A' answerId = {answerId}/>
        </div>
        <div className = 'report'>
          <a href = '#' onClick = {handleReport}>Report</a>
        </div>
      </div>
    </div>
  )
};

export default Answer;